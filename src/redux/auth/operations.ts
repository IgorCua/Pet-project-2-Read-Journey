import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { 
    usersGetCurrentAPI, 
    usersSigninAPI, 
    usersSignupAPI, 
    usersRefreshTokenAPI,
    usersSignOutAPI, 
    // booksAddByIdAPI
} from "../../services/userConnectionsAPI"

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
            const res: any = await usersSignupAPI(data);

            if(res) localStorage.setItem('refreshToken', res.data.refreshToken);

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
            const res: any = await usersSigninAPI(data);

            if(res) localStorage.setItem('refreshToken', res.data.refreshToken);

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

    async ( data: {token: string, refreshToken: string} | undefined, { rejectWithValue }) => {
        try{
            if(data){
                return {
                    data:{
                        token: data.token,
                        refreshToken: data.refreshToken
                    }
                }
            }

            const res: any = await usersRefreshTokenAPI();
            if(res) localStorage.setItem('refreshToken', res.data.refreshToken);

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
            localStorage.removeItem('persist:auth');
            localStorage.removeItem('refreshToken');
            
            const res = await usersSignOutAPI();
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const userLocalSignOut = createAsyncThunk(
    'auth/localSignOut',

    async ( _, { rejectWithValue }) => {
        try{
            localStorage.removeItem('persist:auth');
            localStorage.removeItem('refreshToken');
            
            return null;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const userAddError = createAsyncThunk(
    'auth/addError',

    (data: any) => {
        return data
    }
)

export const userRemoveError = createAction(
    'auth/removeError',

    (): any => {
        return {
            payload: null
        };   
    }
);
