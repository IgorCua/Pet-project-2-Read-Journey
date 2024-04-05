import { createAsyncThunk } from "@reduxjs/toolkit";
import { booksAddBookAPI, booksAddByIdAPI, booksDeleteReadingAPI, booksGetBookInfoAPI, booksGetRecommendedAPI, booksGetUserBooksAPI, booksRemoveBookAPI, booksSaveEndOfReadingAPI, booksSaveReadingStartAPI } from "../../services/connectionsAPI";

interface GetRecommendedInterface {
    title?: string,
    author?: string,
    page: number | string | null,
    limit: number | string | null
}

interface AddBookInterface {
    title: string,
    author: string,
    totalPages: number
}

type GetUserBooksInterface = '--' | 'unread' | 'in-progress' | 'done';

export const booksGetRecommended = createAsyncThunk(
    'books/getRecommended',

    async (data: GetRecommendedInterface, { rejectWithValue }) => {
        try{
            const res = await booksGetRecommendedAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksAddBook = createAsyncThunk(
    'books/addBook',

    async (data: AddBookInterface, { rejectWithValue }) => {
        try{
            const res = await booksAddBookAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksAddById = createAsyncThunk(
    'books/addById',

    async (data: string, { rejectWithValue }) => {
        try{
            const res = await booksAddByIdAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksRemoveBook = createAsyncThunk(
    'books/removeBook',

    async (data: string, { rejectWithValue }) => {
        try{
            await booksRemoveBookAPI(data);
            const userBooks = await booksGetUserBooksAPI('--');
            return userBooks;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksGetUserBooks = createAsyncThunk(
    'books/getUserBooks',

    async (data: GetUserBooksInterface, { rejectWithValue }) => {
        try{
            const res = await booksGetUserBooksAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksSaveReadingStart = createAsyncThunk(
    'books/saveReadingStart',

    async (data: {id: string, page: number}, { rejectWithValue }) => {
        try{
            const res = await booksSaveReadingStartAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksSaveEndOfReading = createAsyncThunk(
    'books/saveEndOfReading',

    async (data: {id: string, page: number}, { rejectWithValue }) => {
        try{
            const res = await booksSaveEndOfReadingAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksDeleteReading = createAsyncThunk(
    'books/deleteReading',

    async (data: {bookId: string, readingId: string}, { rejectWithValue }) => {
        try{
            const res = await booksDeleteReadingAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksGetBookInfo = createAsyncThunk(
    'books/getBookInfo',

    async (data: string, { rejectWithValue }) => {
        try{
            const res = await booksGetBookInfoAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);
