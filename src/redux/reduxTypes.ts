import { AsyncThunk } from "@reduxjs/toolkit";

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export interface recommendedBookInterface {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: number,
    recommended: boolean
}

export interface recomendedBooksInterface {
    results: recommendedBookInterface[],
    totalPages: number,
    page: number,
    perPage: number
}

export interface BookInterface {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: string,
    satus: string,
    owner: string,
    progress: unknown[]
}

// interface BookProgressInterface {
//     startPage: number,
//     startReading: Date | string,
//     finishPage: number,
//     finishReading: string,
//     speed: number,
//     status: string
// }
