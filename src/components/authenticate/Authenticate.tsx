import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { selectAuthError, selectRefreshToken, selectToken } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { userLocalSignOut, userRefreshToken } from "../../redux/auth/operations";
import { store } from "../../redux/store";
import { axiosToken } from "../../services/axiosSettings";
import { useNavigate } from "react-router-dom";
import { selectBooksError } from "../../redux/books/selectors";
import { ErrorModal } from "../errorModal/ErrorModal";

type Props = {
    children: React.ReactElement
}

type DispatchAction = () => void;

type ErrorObj = {
    errorCode: string,
    errorMessage: string,
    // dispatchAction: null | DispatchAction
    // dispatchAction: any
}

type AppDispatch = typeof store.dispatch;

export const Authenticate = ({children}: Props) => {
    const token = useSelector(selectToken);
    // const refreshToken = localStorage.getItem('updateAccess');
    const refreshToken = useSelector(selectRefreshToken);
    const decodedToken = token && JSON.parse(atob(token.split('.')[1]));
    const authError: any = useSelector(selectAuthError);
    const booksError: any = useSelector(selectBooksError);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    // const navigate = useNavigate();

    const errorObj: ErrorObj = useMemo(() => {
        return {
            errorCode: 'code',
            errorMessage: 'message',
            // dispatchFunction: null
        };
    }, [authError]);

    const handleDelay = () => {
        if(decodedToken) {
            return decodedToken.exp * 1000 - new Date().getTime();
        };
        return -1;
    }

    // const renderError = ()=> {
    //     return <ErrorModal
    //         type="userError"
    //         isModalOpen={isModalOpen}
    //         setIsModalOpen={setIsModalOpen}
    //         erorrCode={errorObj.errorCode}
    //         errorMessage={errorObj.errorMessage}
    //         // dispatchAction={userLocalSignOut()}
    //     />
    // }

    useEffect(() => {
        if(authError){
            if(authError.config.url === "/users/signin"){
                console.log('Authenticate');
                errorObj.errorCode = authError.response.status;
                errorObj.errorMessage = 'Email or password is wrong.'; 
                setIsModalOpen(true);
                // return
            }
            if(authError.config.url === "/users/signup"){
                console.log('Authenticate');
                errorObj.errorCode = authError.response.status;
                errorObj.errorMessage = 'User already exist.'; 
                setIsModalOpen(true);
                // return
            }
            if( authError.config.url !== "/users/signin"
                && authError.config.url !== "/users/signup"
                && authError.response.status === 401
            ) {
                // console.log('Authenticate auth', authError.response.status);
                errorObj.errorCode = authError.response.status;
                // errorObj.dispatchAction = userLocalSignOut();
                errorObj.errorMessage = 'Your session timed out.';
                setIsModalOpen(true);
                // return
                // renderError()
            }
        }
        if(!authError && booksError){
            if(booksError.response?.status === 401) {
                console.log('Authenticate books', booksError.response.status);
                // errorObj.dispatchAction = userLocalSignOut();
                errorObj.errorCode = booksError.response.status;
                errorObj.errorMessage = 'Your session timed out.';
                setIsModalOpen(true);
                // return
                // renderError()
            }
        }
    }, [isModalOpen, setIsModalOpen, authError, booksError, errorObj]);

    if(token && refreshToken){
        setTimeout(() => {
            if (!authError && !booksError) {
                axiosToken.set(refreshToken);
                dispatch(userRefreshToken());
            }
        }, handleDelay());
    }
    
    const authErrorDispatch = () => {
        dispatch(userLocalSignOut());
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