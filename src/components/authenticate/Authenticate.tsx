import React, { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { selectAuthError, selectAuthIsLoading, selectAuthIsLoggedIn, selectToken } from "../../redux/auth/selectors"
import { useDispatch } from "react-redux"
import { userLocalSignOut, userRefreshToken, userSignOut } from "../../redux/auth/operations"
import { store } from "../../redux/store"
import { axiosToken } from "../../services/axiosSettings"
import { useNavigate } from "react-router-dom"
import { selectBooksError } from "../../redux/books/selectors"

type Props = {
    children: React.ReactElement
}

type AppDispatch = typeof store.dispatch;

export const Authenticate = ({children}: Props) => {
    const token = useSelector(selectToken);
    const refreshToken = localStorage.getItem('updateAccess');
    const decodedToken = token && JSON.parse(atob(token.split('.')[1]));
    const authError: any = useSelector(selectAuthError);
    const booksError: any = useSelector(selectBooksError);

    // const isLoggedIn = useSelector(selectAuthIsLoggedIn);    
    const dispatch = useDispatch<AppDispatch>();
    // const navigate = useNavigate();
    
    const handleDelay = () => {
        if(decodedToken) {
            return decodedToken.exp * 1000 - new Date().getTime();
        };

        return -1;
    }

    if(authError || booksError) {
        if(authError.response.status === 401 || booksError.response.status === 401) {
            dispatch(userLocalSignOut());
            // return;
        } else {
        }
    }

    if(token && refreshToken){
        setTimeout(() => {
            axiosToken.set(refreshToken);
            dispatch(userRefreshToken());
        }, handleDelay());
    }
    
    return <>{children}</>
}