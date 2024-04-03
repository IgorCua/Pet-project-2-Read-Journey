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

export const usersSignupAPI = (data: IUserSighup) => {
    return axios.post('/users/signup', data).then(res => {
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

export const booksGetRecommendedAPI = (data: any): any => {
    return axios.get('/users/signout', data).then(res => {
        return res;
    });
};

export const booksAddBookAPI = (data: IBooksAddBook) => {
    return axios.post('/books/recommend', data).then(res => {
        return res;
    });
};

export const booksAddByIdAPI = (data: string) => {
    return axios.post(`/books/add/:${data}`).then(res => {
        return res;
    });
};

export const booksRemoveBookAPI = (data: string) => {
    return axios.delete(`/books/remove/:${data}`).then(res => {
        return res;
    });
};

export const booksGetUserBooksAPI = (data: {}): {} => {
    return axios.get('/books/own', data).then(res => {
        return res;
    });
};

export const booksSaveReadingStartAPI = (data: {id: string, page: number}) => {
    return axios.post('/books/reading/start', data).then(res => {
        return res;
    });
};

export const booksSaveEndOfReadingAPI = (data: {id: string, page: number}) => {
    return axios.post('/books/readin/finish', data).then(res => {
        return res;
    });
};

export const booksDeleteReadingAPI = (data: any): any => {
    return axios.delete('/books/reading', data).then(res => {
        return res;
    });
};

export const booksGetBookInfoAPI = (data: string) => {
    return axios.get(`/books/:${data}`).then(res => {
        return res;
    });
};
