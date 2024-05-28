import axios from "axios";
import localStorage from "redux-persist/es/storage";

export const axiosToken = {
    set(token?: string) {
        // if(token) {
        //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        // } 
        // else {
        //     localStorage.getItem('persist:auth').then(data => {
        //         // if(typeof data === 'string'){
        //             const storageToken = typeof data === 'string' && JSON.parse(JSON.parse(data).token);
        //         // }
        //         // const storageToken = JSON.parse(JSON.parse(data).token);
        //         if(storageToken) axios.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

        //         return;
        //     });
        // }
    },
    unset() {
      axios.defaults.headers.common.Authorization = ``;
    },
};