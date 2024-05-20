import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { selectAuthError, selectToken } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { userRefreshToken } from "../../redux/auth/operations";
import { store } from "../../redux/store";
import { axiosToken } from "../../services/axiosSettings";
import { useNavigate } from "react-router-dom";
import { selectBooksError } from "../../redux/books/selectors";
import { ErrorModal } from "../errorModal/ErrorModal";

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    // const navigate = useNavigate();

    const errorObj = useMemo(() => {
        return {
            errorCode: 'code',
            errorMessage: 'message'
        };
    }, [authError]);

    const handleDelay = () => {
        if(decodedToken) {
            return decodedToken.exp * 1000 - new Date().getTime();
        };
        return -1;
    }

    useEffect(() => {
        if(authError && authError.config.url === "/users/signin"){
            errorObj.errorCode = authError.response.status;
            errorObj.errorMessage = 'Email or password is wrong.'; 
            setIsModalOpen(true);
        }
    }, [isModalOpen, setIsModalOpen, authError, errorObj]);

    if(token && refreshToken){
        setTimeout(() => {
            axiosToken.set(refreshToken);
            dispatch(userRefreshToken());
        }, handleDelay());
    }
    
    return <>
        {children}
        <ErrorModal
            type="userError"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            erorrCode={errorObj.errorCode}
            errorMessage={errorObj.errorMessage}
        />
    </>
}