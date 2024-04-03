import { AsyncThunk } from "@reduxjs/toolkit";

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export type usersSignupRes = {
    email: string,
    name: string,
    token: string,
    refreshToken: string
}
