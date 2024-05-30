import axios from "axios";

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

interface IUserSighup {
    name: string,
    email: string,
    password: string,
}

interface IUserSignin {
    email: string,
    password: string
}

// interface IBooksGetRecommended {
//     title?: string,
//     author?: string,
//     page?: number
//     limit?: number
// }

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
type PaginationResponse<T> = {
    results: T[],
    totalPages: number,
    page: number,
    perPage: number
}

// type ErrorMessage = {
//     message: string
// }
type Book = {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: number,
    recommended: boolean
}

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

type UserBooksByStatus = {
    status: string
} | null;

type SignupRes = {
    email: string,
    name: string,
    token: string,
    refreshToken: string
} | {
    message: string
}

// user connections
export const usersSignupAPI = (data: IUserSighup) => {
    return axios.post<SignupRes>('/users/signup', data).then(res => {
        return res;
    });
};

export const usersSigninAPI = (data: IUserSignin) => {
    return axios.post('/users/signin', data).then(res => {
        return res;
    });
};

export const usersGetCurrentAPI = () => {
    return axios.get('/users/current').then(res => {
        return res;
    });
};

export const usersRefreshTokenAPI = () => {
    return axios.get('/users/current/refresh').then(res => {
        return res;
    });
};

export const usersSignOutAPI = () => {
    return axios.post('/users/signout').then(res => {
        return res;
    });
};

// books connections
// create object success error responces
export const booksGetRecommendedAPI = (data: IBooksGetRecommended) => {
// export const booksGetRecommendedAPI = (data: any) => {
    return axios.get<any, PaginationResponse<Book>>('/books/recommend', {params: data}).then(res => {
        return res;
    });
};
// export const booksGetRecommendedAPI = (data: IBooksGetRecommended) => {
//     return axios.get<PaginationResponse<Book> | ErrorMessage>('/users/signout', {params: data}).then(res => {
//         return res;
//     });
// };

export const booksAddBookAPI = (data: IBooksAddBook) => {
    return axios.post<any, AddBookInterface>('/books/recommend', data).then(res => {
        return res;
    });
};

export const booksAddByIdAPI = (data: string) => {
    return axios.post<any, AddBookInterface>(`/books/add/${data}`).then(res => {
        return res;
    });
};

export const booksRemoveBookAPI = (data: string) => {
    return axios.delete(`/books/remove/${data}`).then(res => {
        return res;
    });
};

export const booksGetUserBooksAPI = (data: UserBooksByStatus) => {
    console.log('booksGetUserBooksAPI', data);
    return axios.get<any, AddBookInterface[]>('/books/own', {params: data}).then(res => {
    // return axios.get<any, any>('/books/own', {params: data}).then(res => {
        return res;
    });
};

export const booksSaveReadingStartAPI = (data: {id: string, page: number}) => {
    return axios.post<any, AddBookInterface>('/books/reading/start', data).then(res => {
        return res;
    });
};

export const booksSaveEndOfReadingAPI = (data: {id: string, page: number}) => {
    return axios.post<any, AddBookInterface>('/books/readin/finish', data).then(res => {
        return res;
    });
};

export const booksDeleteReadingAPI = (data: { bookId: string, readingId: string }): any => {
    return axios.delete('/books/reading', {params: data}).then(res => {
        return res;
    });
};

export const booksGetBookInfoAPI = (data: string) => {
    return axios.get<any, AddBookInterface>(`/books/:${data}`).then(res => {
        return res;
    });
};
