// export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/slice';
import booksSlice from './books/slice';
import { 
    persistStore,
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: [
        // 'userID', 
        'name', 
        'email', 
        'token',
        'refreshToken', 
        'isLoggedIn',        
    ]
}

const persistBooksConfig = {
    key: 'books',
    storage,
    whitelist: [
        // 'recommendedBooks',
        'userBooks',
        'bookInfo',
    ]
}

const persistAuthReducer = persistReducer(persistAuthConfig, authSlice);
const persistBooksReducer = persistReducer(persistBooksConfig, booksSlice)
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        books: persistBooksReducer
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        // serializableCheck: {
        //     ignoreActions: true,
        // }
        serializableCheck: false
    })
});

export const persistor = persistStore(store);
