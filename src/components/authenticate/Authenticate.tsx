import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { selectAuthError, selectRefreshToken, selectToken } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { userLocalSignOut, userRefreshToken } from "../../redux/auth/operations";
import { store } from "../../redux/store";
import { axiosToken } from "../../services/axiosSettings";
import { selectBooksError } from "../../redux/books/selectors";
import { ErrorModal } from "../errorModal/ErrorModal";

type Props = {
    children: React.ReactElement
}

type ErrorObj = {
    errorCode: string,
    errorMessage: string,
}

type AppDispatch = typeof store.dispatch;

export const Authenticate = ({children}: Props) => {
    const token = useSelector(selectToken);
    const refreshToken = useSelector(selectRefreshToken);
    const decodedToken = token && JSON.parse(atob(token.split('.')[1]));
    const authError: any = useSelector(selectAuthError);
    const booksError: any = useSelector(selectBooksError);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const errorObj: ErrorObj = useMemo(() => {
        return {
            errorCode: 'code',
            errorMessage: 'message',
        };
    }, [authError]);

    const handleDelay = useCallback(() => {
        if(decodedToken) {
            return decodedToken.exp * 1000 - new Date().getTime();
        };
        return -1;
    }, [decodedToken]);

    useEffect(() => {
        if(authError && Object.keys(authError).length > 0){
            if(authError.config.url === "/users/signin"){
                errorObj.errorCode = authError.response.status;
                errorObj.errorMessage = 'Email or password is wrong.'; 
                setIsModalOpen(true);
            }
            if(authError.config.url === "/users/signup"){
                errorObj.errorCode = authError.response.status;
                errorObj.errorMessage = 'User already exist.'; 
                setIsModalOpen(true);
            }
            if( authError.config.url !== "/users/signin"
                && authError.config.url !== "/users/signup"
                && authError.response.status === 401
            ) {
                errorObj.errorCode = authError.response.status;
                errorObj.errorMessage = 'Your session timed out.';
                setIsModalOpen(true);
            }
        }
        if(!authError && booksError){
            if(booksError.response?.status === 401) {
                errorObj.errorCode = booksError.response.status;
                errorObj.errorMessage = 'Your session timed out.';
                setIsModalOpen(true);
            }
        }
    }, [
        isModalOpen, 
        setIsModalOpen, 
        authError, 
        booksError, 
        errorObj, 
    ]);

    useEffect(() => {
        if(token && refreshToken && !authError){
            // setTimeout(() => {
            //     if (!authError) {
            //         axiosToken.set(refreshToken);
            //         dispatch(userRefreshToken())
            //         axiosToken.set(token);

            //     }
            // }, handleDelay());
        }
    }, [token, refreshToken, authError, dispatch, handleDelay]);

    const authErrorDispatch = () => {
        dispatch(userLocalSignOut());
        dispatch({type: 'SIGNOUT'});
    }

    return <>
        <ErrorModal
            type="userError"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            erorrCode={errorObj.errorCode}
            errorMessage={errorObj.errorMessage}
            dispatchFunction={authErrorDispatch}
        />
        {children}
    </>
}