import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit"
import { 
    usersGetCurrentAPI, 
    usersSigninAPI, 
    usersSignupAPI, 
    usersRefreshTokenAPI,
    usersSignOutAPI 
} from "../../services/connectionsAPI"
import { axiosToken } from "../../services/axiosSettings";

interface SignupInterface {
    name: string, 
    email: string, 
    password: string
}

interface ISignin {
    email: string, 
    password: string
}

export const userSignup = createAsyncThunk(
    'auth/signup',

    async (data: SignupInterface, { rejectWithValue }) => {
        try{
            const res = await usersSignupAPI(data);
            const {token}: any = res.data;

            axiosToken.set(token);

            // console.log(axios.defaults);

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
            const {token}:any = res.data;

            axiosToken.set(token);
            // console.log(axios.defaults);

            return res;
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
            await axiosToken.set();
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
