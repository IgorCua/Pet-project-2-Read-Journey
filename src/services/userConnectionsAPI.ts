import { client } from "./axiosClient";

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

export const usersSignupAPI = (data: IUserSighup): any => {
    return client.post<SignupResponse>(
        '/users/signup', 
        data,
        { headers: {Authorization: false} }
    )
};

export const usersSigninAPI = (data: IUserSignin) => {
    return client.post(
        '/users/signin',
        data,
        { headers: {Authorization: false} }
    )
};

export const usersGetCurrentAPI = () => {
    return client.get('/users/current').then(res => {
        return res;
    });
};

export const usersRefreshTokenAPI = () => {
    return client.get('/users/current/refresh').then(res => {
        return res;
    });
};

export const usersSignOutAPI = () => {
    return client.post('/users/signout').then(res => {
        return res;
    });
};
