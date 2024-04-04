import { createSlice } from "@reduxjs/toolkit"
import { booksAddBook, booksAddById, booksDeleteReading, booksGetBookInfo, booksGetRecommended, booksGetUserBooks, booksRemoveBook, booksSaveEndOfReading, booksSaveReadingStart } from "./operations"
import { PendingAction, RejectedAction } from "../actionTypes"

interface BookInterface {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: number,
    recommended: boolean
}

interface recomendedBooksInterface {
    results: BookInterface[],
    totalPages: number,
    page: number,
    perPage: number
}

// interface AddBookInterface {
//     _id: string,
//     title: string,
//     author: string,
//     imageUrl: string,
//     totalPages: string,
//     satus: string,
//     owner: string,
//     progress: any[]
// }

// interface BookProgressInterface {
//     startPage: number,
//     startReading: Date | string,
//     finishPage: number,
//     finishReading: string,
//     speed: number,
//     status: string
// }

interface AddBookInterface {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: string,
    satus: string,
    owner: string,
    progress: unknown[]
}

interface initialStateInterface {
    recommendedBooks: recomendedBooksInterface | null,
    userBooks: AddBookInterface[] | [],
    readingStart: number | null,
    readingEnd: number | null,
    currentReading: null | AddBookInterface,
    bookInfo: null | AddBookInterface,
    isLoading: boolean,
    isError: boolean,
    error: any
}

const initialState = {
    recommendedBooks: null,
    userBooks: [],
    readingStart: null,
    readingEnd: null,
    currentReading: null,
    bookInfo: null,
    isLoading: false,
    isError: false,
    error: null
} satisfies initialStateInterface as initialStateInterface

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(booksGetRecommended.fulfilled, (state, action) => {
                state.recommendedBooks = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksAddBook.fulfilled, (state, action) => {
                state.userBooks = [...state.userBooks, action.payload];
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksAddById.fulfilled, (state, action) => {
                state.userBooks = [...state.userBooks, action.payload];
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksRemoveBook.fulfilled, (state, action) => {
                state.userBooks = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksGetUserBooks.fulfilled, (state, action) => {
                state.userBooks = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksSaveReadingStart.fulfilled, (state, action) => {
                state.currentReading = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksSaveEndOfReading.fulfilled, (state, action) => {
                state.currentReading = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksDeleteReading.fulfilled, (state, _) => {
                state.currentReading = null;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksGetBookInfo.fulfilled, (state, action) => {
                state.bookInfo = action.payload;                
                state.isLoading = false;
                state.isError = false;
                state.error = null;
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
})

export default booksSlice.reducer;
