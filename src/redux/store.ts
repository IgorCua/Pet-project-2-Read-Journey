// export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/slice';
import booksSlice from './books/slice';

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const store = configureStore({
    reducer: {
        auth: authSlice,
        books: booksSlice
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false
            // serializableCheck: {
            //     // ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            // }
        })
});

export default store;