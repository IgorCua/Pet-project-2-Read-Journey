import { userAddError, userRefreshToken } from "../redux/auth/operations";
import { axiosToken } from "./axiosSettings";
import { createAxiosClient } from "./createAxiosClient";

const BASE_URL = 'https://readjourney.b.goit.study/api';
const REFRESH_TOKEN_URL = '/users/current/refresh';

let store: any;

export const injectStore = (_store: any) => {
    store = _store;
}

if(store){
    axiosToken.set(store.getState().auth.token);
}

export const getCurrentAccessToken = () => {
    const authData: any = localStorage.getItem('persist:auth');
    if (authData) {
        return JSON.parse(JSON.parse(authData).token);
    }
}

export function getCurrentRefreshToken() {
    const authData: any = localStorage.getItem('persist:auth');
    if(authData) {
        return JSON.parse(JSON.parse(authData).refreshToken);
    }
}

async function setRefreshedTokens(tokens: {token: string, refreshToken: string}){
    await store.dispatch(userRefreshToken(tokens));
}

async function logout(data: any) {
    store.dispatch(userAddError(data));
}

export const client = createAxiosClient({
    options: {
        baseURL: BASE_URL,
        timeout: 300000,
        headers: {
            'Content-Type': 'application/json',
        }
    },
    getCurrentAccessToken,
    getCurrentRefreshToken,
    refreshTokenUrl: REFRESH_TOKEN_URL,
    logout,
    setRefreshedTokens
});