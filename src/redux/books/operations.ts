import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { 
    booksAddBookAPI, 
    booksAddByIdAPI, 
    booksDeleteReadingAPI, 
    booksGetBookInfoAPI, 
    booksGetRecommendedAPI, 
    booksGetUserBooksAPI, 
    booksRemoveBookAPI, 
    booksSaveEndOfReadingAPI, 
    booksSaveReadingStartAPI 
} from "../../services/booksConnectionsAPI";
import { axiosToken } from "../../services/axiosSettings";

interface GetRecommendedInterface {
    title?: string,
    author?: string,
    page?: number | string | null,
    limit?: number | string | null
}

interface AddBookInterface {
    title: string,
    author: string,
    totalPages: number
}

interface BooksSaveReading {
    id: string,
    page: number
}

type UserBooksByStatus = {
    status: string
} | null;

export const booksGetRecommended: any = createAsyncThunk(
    'books/getRecommended',

    async (data: GetRecommendedInterface, { rejectWithValue }) => {
        try{
            await axiosToken.set();
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
            await axiosToken.set();
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
            axiosToken.set();
            await booksAddByIdAPI(data);
            const userBooks = await booksGetUserBooksAPI(null);
            return userBooks;
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
            axiosToken.set();
            await booksRemoveBookAPI(data);
            const userBooks = await booksGetUserBooksAPI(null);
            return userBooks;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksGetUserBooks = createAsyncThunk(
    'books/getUserBooks',

    async (data: UserBooksByStatus, { rejectWithValue }) => {
        try{
            axiosToken.set();
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

    async (data: BooksSaveReading, { rejectWithValue }) => {
        try{
            await axiosToken.set();
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

    async (data: BooksSaveReading, { rejectWithValue }) => {
        try{
            await axiosToken.set();
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
            await axiosToken.set();
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
            await axiosToken.set();
            const res = await booksGetBookInfoAPI(data);
            return res;
        }
        catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
);

export const booksRemoveError = createAction(
    'books/removeError',

    (): any => {
        return {
            payload: null
        };   
    }
);

export const booksCurrentReading = createAction(
    'books/currentReading',

    (data) => {
        return {
            payload: data
        };       
    }
)