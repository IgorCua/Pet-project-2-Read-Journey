import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { booksAddBook, booksAddById, booksCurrentReading, booksDeleteReading, booksGetBookInfo, booksGetRecommended, booksGetUserBooks, booksRemoveBook, booksRemoveError, booksSaveEndOfReading, booksSaveReadingStart } from "./operations"
// import { PendingAction, RejectedAction } from "../actionTypes"
import { BookInterface, recomendedBooksInterface, PendingAction, RejectedAction } from "../reduxTypes";

interface initialStateInterface {
    recommendedBooks: recomendedBooksInterface | null,
    // recommendedIsLoading: boolean | null,
    userBooks: BookInterface[] | [],
    // userBooks: BookInterface[] | null,
    readingStart: any | null,
    readingEnd: any | null,
    // currentReading: null | BookInterface,
    bookInfo: BookInterface | null,
    isLoading: boolean,
    isError: boolean,
    error: any
}

const initialState = {
    recommendedBooks: null,
    // recommendedIsLoading: true,
    userBooks: [],
    readingStart: null,
    readingEnd: null,
    // currentReading: null,
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
            .addCase(booksGetRecommended.fulfilled, (state, action: PayloadAction<any>) => {
                state.recommendedBooks = action.payload.data;
                // state.recommendedIsLoading = false;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksAddBook.fulfilled, (state, action: PayloadAction<any>) => {
                // state.userBooks = [...state.userBooks, action.payload];
                state.userBooks = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksAddById.fulfilled, (state, action: PayloadAction<any>) => {
                state.userBooks = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksRemoveBook.fulfilled, (state, action: PayloadAction<any>) => {
                state.userBooks = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksGetUserBooks.fulfilled, (state, action: PayloadAction<any>) => {
                state.userBooks = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksSaveReadingStart.fulfilled, (state, action: PayloadAction<any>) => {
                state.bookInfo = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksSaveEndOfReading.fulfilled, (state, action: PayloadAction<any>) => {
                state.bookInfo = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksDeleteReading.fulfilled, (state, action: PayloadAction<any>) => {
                state.bookInfo = action.payload.data;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksGetBookInfo.fulfilled, (state, action: PayloadAction<any>) => {
                state.bookInfo = action.payload.data;                
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(booksRemoveError, (state, action) => {
                state.error = action.payload;
                state.isError = false;
                state.isLoading = false;
            })
            .addCase('SIGNOUT', (state) => {
                Object.assign(state, initialState);
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
                (action): action is RejectedAction => 
                    action.type.startsWith('books') 
                    && action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.error = action.payload;
                }
            )
    },
})

export default booksSlice.reducer;
