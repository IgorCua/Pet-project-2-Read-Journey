// export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/slice';
import booksSlice from './books/slice';

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const store = configureStore({
    reducer: {
        auth: authSlice,
        books: booksSlice
    }
});

export default store;