import { createSlice } from "@reduxjs/toolkit";
import { 
    userGetCurrent, 
    userRefreshToken, 
    userSignin, 
    userSignOut, 
    userSignup 
} from "./operations";
import { PendingAction, RejectedAction } from "../actionTypes";

interface IInitialState {
    _id: string | null,
    name: string | null,
    email: string | null,
    token: string | null,
    refreshToken: string | null,
    isLoggedIn: boolean,
    isError: boolean
    error: unknown | null,
    isLoading: boolean,
    userBooks: {}[] | null
}

const initialState = {
    _id: null,
    name: null,
    email: null,
    token: null,
    refreshToken: null,
    isLoggedIn: false,
    isError: false,
    error: null,
    isLoading: false,
    userBooks: null
} satisfies IInitialState as IInitialState

// type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

// type PendingAction = ReturnType<GenericAsyncThunk['pending']>
// type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userSignup.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state = {...state, ...action.payload};
            })
            .addCase(userSignin.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state = {...state, ...action.payload};
            })
            .addCase(userGetCurrent.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state = {...state, ...action.payload};
            })
            .addCase(userRefreshToken.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state = {...state, ...action.payload};
            })
            .addCase(userSignOut.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isError = false
                state.error = null;
                state = {...state, ...initialState};
            })
            .addMatcher(
                (action): action is PendingAction => action.type.startsWith('auth') && action.type.endsWith('/pending'),
                (state, _) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is RejectedAction => action.type.startsWith('auth') && action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.error = action.payload;
                }
            )
    },
});

export default authSlice.reducer;