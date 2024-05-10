import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
    userGetCurrent, 
    userLocalSignOut, 
    userRefreshToken, 
    userSignin, 
    userSignOut, 
    userSignup 
} from "./operations";
import { PendingAction, RejectedAction } from "../reduxTypes";

interface IInitialState {
    _id: string | null,
    name: string | null,
    email: string | null,
    token: string | null,
    // refreshToken: string | null,
    isLoggedIn: boolean,
    isError: boolean
    error: unknown | null,
    isLoading: boolean,
    // userBooks: {}[] | null
}

const initialState = {
    _id: null,
    name: null,
    email: null,
    token: null,
    // refreshToken: null,
    isLoggedIn: false,
    isError: false,
    error: null,
    isLoading: false,
    // userBooks: null
} satisfies IInitialState as IInitialState;

type SignupRes = {
    email: string,
    name: string,
    token: string,
    refreshToken: string
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userSignup.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
                state.name = action.payload.data.name;
                state.email = action.payload.data.email;
                state.token = action.payload.data.token;
            })
            .addCase(userSignin.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state.name = action.payload.data.name;
                state.email = action.payload.data.email;
                state.token = action.payload.data.token;
            })
            .addCase(userGetCurrent.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state = {...state, ...action.payload};
            })
            .addCase(userRefreshToken.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state.token = action.payload.data.token;
            })
            .addCase(userSignOut.fulfilled, (state, action: PayloadAction<any>) => {
                state._id = null;
                state.name = null;
                state.email = null;
                state.token = null;
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isError = false
                state.error = null;
            })
            .addCase(userLocalSignOut.fulfilled, (state, action: PayloadAction<any>) => {
                state._id = null;
                state.name = null;
                state.email = null;
                state.token = null;
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
                console.log('localSignOut payload:', action.payload);
            })
            .addMatcher(
                (action): action is PendingAction => (
                    action.type.startsWith('auth') 
                    && action.type.endsWith('/pending')
                ),
                (state, _) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is RejectedAction => (
                    action.type.startsWith('auth') 
                    && action.type.endsWith('/rejected')
                ),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.error = action.payload;
                }
            )
    },
});

export default authSlice.reducer;
