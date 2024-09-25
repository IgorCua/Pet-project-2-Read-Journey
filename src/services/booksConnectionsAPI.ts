import { client } from "./axiosClient";

interface IBooksAddBook {
    title: string,
    author: string,
    totalPages: number
}

interface IBooksGetRecommended {
    title?: string,
    author?: string,
    page?: number | string | null
    limit?: number | string | null
}

type Book = {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: number,
    recommended: boolean
}

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

type UserBooksByStatus = {
    status: string
} | null;

type PaginationResponse<T> = {
    results: T[],
    totalPages: number,
    page: number,
    perPage: number
}

export const booksGetRecommendedAPI = (data: IBooksGetRecommended) => {
    return client.get<any, PaginationResponse<Book>>('/books/recommend', {params: data}).then(res => {
        return res;
    });
};

export const booksAddBookAPI = (data: IBooksAddBook) => {
    return client.post<any, AddBookInterface>('/books/recommend', data).then(res => {
        return res;
    });
};

export const booksAddByIdAPI = (data: string) => {
    return client.post<any, AddBookInterface>(`/books/add/${data}`).then(res => {
        return res;
    });
};

export const booksRemoveBookAPI = (data: string) => {
    return client.delete(`/books/remove/${data}`).then(res => {
        return res;
    });
};

export const booksGetUserBooksAPI = (data: UserBooksByStatus) => {
    return client.get<any, AddBookInterface[]>('/books/own', {params: data}).then(res => {
        return res;
    });
};

export const booksSaveReadingStartAPI = (data: {id: string, page: number}) => {
    return client.post<any, AddBookInterface>('/books/reading/start', data).then(res => {
        return res;
    });
};

export const booksSaveEndOfReadingAPI = (data: {id: string, page: number}) => {
    return client.post<any, AddBookInterface>('/books/reading/finish', data).then(res => {
        return res;
    });
};

export const booksDeleteReadingAPI = (data: { bookId: string, readingId: string }): any => {
    return client.delete('/books/reading', {params: data}).then(res => {
        return res;
    });
};

export const booksGetBookInfoAPI = (data: string) => {
    return client.get<any, AddBookInterface>(`/books/${data}`).then(res => {
        return res;
    });
};