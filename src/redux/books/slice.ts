import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { booksAddBook, booksAddById, booksDeleteReading, booksGetBookInfo, booksGetRecommended, booksGetUserBooks, booksRemoveBook, booksRemoveError, booksSaveEndOfReading, booksSaveReadingStart } from "./operations"
// import { PendingAction, RejectedAction } from "../actionTypes"
import { BookInterface, recomendedBooksInterface, PendingAction, RejectedAction } from "../reduxTypes";

interface initialStateInterface {
    recommendedBooks: recomendedBooksInterface | null,
    userBooks: BookInterface[] | [],
    // userBooks: BookInterface[] | null,
    readingStart: any | null,
    readingEnd: any | null,
    currentReading: null | BookInterface,
    bookInfo: null | BookInterface,
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
            .addCase(booksGetRecommended.fulfilled, (state, action: PayloadAction<any>) => {
                state.recommendedBooks = action.payload.data;
                // console.log
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
            // .addCase(booksAddById.fulfilled, (state, action: PayloadAction<any>) => {
            //     // state.userBooks = [...state.userBooks, action.payload];
            //     state.userBooks = action.payload.data;
            //     state.isLoading = false;
            //     state.isError = false;
            //     state.error = null;
            // })
            .addCase(booksAddById.fulfilled, (state, action: PayloadAction<any>) => {
                // console.log(action.payload);
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
            .addCase(booksRemoveError.fulfilled, (state, action) => {
                state.error = action.payload;
                state.isError = false;
                state.isLoading = false;
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
                    console.log('books slice error', action.payload)
                }
            )
    },
})

export default booksSlice.reducer;
