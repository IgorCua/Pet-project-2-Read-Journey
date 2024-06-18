import { createSelector } from "@reduxjs/toolkit";
import { BookInterface, recomendedBooksInterface } from "../reduxTypes";

export const selectRecommendedBooks = (state: any): null | recomendedBooksInterface => state.books.recommendedBooks;
export const selectRecommendedIsLoading = (state: any): null | boolean => state.books.recommendedIsLoading;
export const selectUserBooks = (state: any): BookInterface[] | [] => state.books.userBooks;
export const selectReadingStart = (state: any): any => state.books.readingStart;
export const selectReadingEnd = (state: any): any => state.books.readingEnd;
export const selectCurrentReading = (state: any): null | BookInterface => state.books.currentReading;
export const selectBookInfo = (state: any): null | BookInterface => state.books.bookInfo;
export const selectBooksIsLoading = (state: any): boolean => state.books.isLoading;
export const selectBooksIsError = (state: any): boolean => state.books.isError;
export const selectBooksError = (state: any) => state.books.error;
export const selectBooksCurrentReading = (state: any) => state.books.currentReading;

export const selectRecommendedBooksIDsArr = createSelector(
    [selectRecommendedBooks],
    (recommendedBooks) => {
        return recommendedBooks ? recommendedBooks.results.map((book) => book._id) : null; 
    }
);

export const selectUserBooksIDsArr = createSelector(
    [selectUserBooks],
    (userBooks) => {
        return userBooks ? userBooks.map((book) => book._id) : null; 
    }
);

export const selectUserBooksTitlesArr = createSelector(
    [selectUserBooks],
    (userBooks) => {
        return userBooks ? userBooks.map((book) => book.title) : null; 
    }
);