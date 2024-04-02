import axios from "axios";

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const usersSignupAPI = (data) => {
    return axios.post('/users/signup', data).then(res => {
        return res;
    });
};

export const usersSigninAPI = (data) => {
    return axios.post('/users/signin', data).then(res => {
        return res;
    });
};

export const usersGetCurrentAPI = (data) => {
    return axios.get('/users/current', data).then(res => {
        return res;
    });
};

export const usersRefreshTokenAPI = (data) => {
    return axios.get('/users/current/refresh', data).then(res => {
        return res;
    });
};

export const usersSignOutAPI = (data) => {
    return axios.post('/users/signout', data).then(res => {
        return res;
    });
};

export const booksGetRecommendedAPI = (data) => {
    return axios.get('/users/signout', data).then(res => {
        return res;
    });
};

export const booksAddBookAPI = (data) => {
    return axios.post('/books/recommend', data).then(res => {
        return res;
    });
};

export const booksAddByIdAPI = (data) => {
    return axios.post(`/books/add/:${data}`).then(res => {
        return res;
    });
};

export const booksRemoveBookAPI = (data) => {
    return axios.delete(`/books/remove/:${data}`).then(res => {
        return res;
    });
};

export const booksGetUsersBooksAPI = (data) => {
    return axios.get('/books/own', data).then(res => {
        return res;
    });
};

export const booksSaveReadingStartAPI = (data) => {
    return axios.post('/books/reading/start', data).then(res => {
        return res;
    });
};

export const booksSaveEndOfReadingAPI = (data) => {
    return axios.post('/books/readin/finish', data).then(res => {
        return res;
    });
};

export const booksDeleteReadingAPI = (data) => {
    return axios.delete('/books/reading', data).then(res => {
        return res;
    });
};

export const booksGetBookInfoAPI = (data) => {
    return axios.get(`/books/:${data}`).then(res => {
        return res;
    });
};
