import axios from "axios";

interface IUserSighup {
    name: string,
    email: string,
    password: string,
}

interface IUserSignin {
    email: string,
    password: string
}

type SignupResponse = {
    email: string,
    name: string,
    token: string,
    refreshToken: string
} | {
    message: string
}

export const usersSignupAPI = (data: IUserSighup) => {
    return axios.post<SignupResponse>('/users/signup', data).then(res => {
        return res;
    });
};

export const usersSigninAPI = (data: IUserSignin) => {
    return axios.post('/users/signin', data).then(res => {
        return res;
    });
};

export const usersGetCurrentAPI = () => {
    return axios.get('/users/current').then(res => {
        return res;
    });
};

export const usersRefreshTokenAPI = () => {
    return axios.get('/users/current/refresh').then(res => {
        return res;
    });
};

export const usersSignOutAPI = () => {
    return axios.post('/users/signout').then(res => {
        return res;
    });
};

export {}