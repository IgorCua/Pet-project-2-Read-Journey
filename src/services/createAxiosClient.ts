import axios from 'axios';

let failedQueue: any = [];
let isRefreshing = false;
let refreshError = false;

const processQueue = (error: any) => {
    failedQueue.forEach((prom: any) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });

    failedQueue = [];
};

export function createAxiosClient({
    options,
    getCurrentAccessToken,
    getCurrentRefreshToken,
    refreshTokenUrl,
    logout,
    setRefreshedTokens,
}: any) {
    const client = axios.create(options);

    client.interceptors.request.use(
        (config: any) => {
            if (config.authorization !== false) {
                const token = getCurrentAccessToken();

                if (token) {
                    config.headers.authorization = "Bearer " + token;
                }
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    client.interceptors.response.use(
        (response: any) => {
            return response;
        },
        (error) => {
            const originalRequest = error.config;
            originalRequest.headers = JSON.parse(
                JSON.stringify(originalRequest.headers || {})
            );

            const refreshToken = getCurrentRefreshToken();
            
            // If error, process all the requests in the queue and logout the user.
            const handleError = (error: any) => {
                processQueue(error);
                if (error.config.url === '/users/current/refresh') {
                    refreshError = true;
                }
                logout(error);

                return Promise.reject(error);
            }


            // Refresh token conditions
            if(
                refreshToken && 
                error.response?.status === 401 &&
                error.response.data.message === 'Unauthorized' &&
                originalRequest?.url !== refreshTokenUrl &&
                originalRequest?._retry !== true
            ) {

                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({resolve, reject});
                    })
                    .then(() => {
                        return client(originalRequest);
                    })
                    .catch((error) => {
                        return Promise.reject(error);
                    });
                }

                isRefreshing = true;
                originalRequest._retry = true;


                if(refreshError) {
                    refreshError = false;
                    return handleError(error);
                }
                
                return client.post(refreshTokenUrl,
                    {headers: {'Authorization': 'Bearer ' + refreshToken}}
                )
                    .then((res) => {
                        const tokens = {
                            token: res.data?.token,
                            refreshToken: res.data?.refreshToken
                        }
                        
                        setRefreshedTokens(tokens);
                        processQueue(null);
                        
                        return client(originalRequest);
                    }, handleError)
                    .finally(() => {
                        isRefreshing = false;
                    });
            }

            // Refresh token missing or expired => logout user
            if(
                (
                    error.response?.status === 401 &&
                    error.response?.data?.message === 'Unauthorized'
                ) || (
                    error.response?.status === 404 && 
                    error.config?.url === '/users/current/refresh'
                )
            ) {
                return handleError(error);
            }
            
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            return Promise.reject(error);
        }
    );

    return client;
}
