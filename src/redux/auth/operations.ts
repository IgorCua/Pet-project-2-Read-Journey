import { createAsyncThunk } from "@reduxjs/toolkit"
import { 
    usersGetCurrentAPI, 
    usersSigninAPI, 
    usersSignupAPI, 
    usersRefreshTokenAPI,
    usersSignOutAPI 
} from "../../services/connectionsAPI"
import axios from "axios";

interface SignupInterface {
    name: string, 
    email: string, 
    password: string
}

interface ISignin {
    email: string, 
    password: string
}

export const axiosToken = {
    set(token: string) {
        if(token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        } 
        // else {
        //     localStorage.getItem('persist:auth').then(data => {
        //         const storageToken = JSON.parse(JSON.parse(data).token);
                
        //         if(data) axios.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

        //         return;
        //     });
        // }
    },
    unset() {
      axios.defaults.headers.common.Authorization = ``;
    },
};

export const userSignup = createAsyncThunk(
    'auth/signup',

    async (data: SignupInterface, { rejectWithValue }) => {
        try{
            const res = await usersSignupAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const userSignin = createAsyncThunk(
    'auth/signin',

    async (data: ISignin, thunkApi) => {
        try{
            const res = await usersSigninAPI(data);
            return res
        }
        catch (error: unknown) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const userGetCurrent = createAsyncThunk(
    'auth/getCurrent',

    async ( _, { rejectWithValue }) => {
        try{
            const res = await usersGetCurrentAPI();
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const userRefreshToken = createAsyncThunk(
    'auth/refreshToken',

    async ( _, { rejectWithValue }) => {
        try{
            const res = await usersRefreshTokenAPI();
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const userSignOut = createAsyncThunk(
    'auth/signOut',

    async ( _, { rejectWithValue }) => {
        try{
            const res = await usersSignOutAPI();
            axiosToken.unset();
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);
