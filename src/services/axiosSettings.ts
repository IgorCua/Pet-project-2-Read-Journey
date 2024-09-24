import localStorage from "redux-persist/es/storage";
import { client } from "./axiosClient";

export const axiosToken = {
    set(token?: string) {
        if(token) {
            client.defaults.headers.common.Authorization = `Bearer ${token}`;
        } 
        else {
            localStorage.getItem('persist:auth').then(data => {
                const storageToken = typeof data === 'string' && JSON.parse(JSON.parse(data).token);
                if(storageToken) client.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

                return;
            });
        }
    },
    unset() {
        client.defaults.headers.common.Authorization = ``;
    },
};