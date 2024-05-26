import { BookInterface, recomendedBooksInterface } from "../reduxTypes";

export const selectRecommendedBooks = (state: any): null | recomendedBooksInterface => state.books.recommendedBooks;
export const selectUserBooks = (state: any): BookInterface[] => state.books.userBooks;
export const selectReadingStart = (state: any): any => state.books.readingStart;
export const selectReadingEnd = (state: any): any => state.books.readingEnd;
export const selectCurrentReading = (state: any): null | BookInterface => state.books.currentReading;
export const selectBookInfo = (state: any): null | BookInterface => state.books.bookInfo;
export const selectBooksIsLoading = (state: any): boolean => state.books.isLoading;
export const selectBooksIsError = (state: any): boolean => state.books.isError;
export const selectBooksError = (state: any): boolean => state.books.error;
