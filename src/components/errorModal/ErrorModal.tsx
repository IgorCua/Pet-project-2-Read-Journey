import { Backdrop } from "@mui/material";
import { Container, ErrorButton, ErrorCode, ErrorContainer, ErrorHeader, ErrorMessage } from "./styled";
import { store } from "../../redux/store";
import { useDispatch } from "react-redux";
import { userRemoveError } from "../../redux/auth/operations";
import { booksRemoveError } from "../../redux/books/operations";
import { useMemo } from "react";

type Props = {
    type: 'userError' | 'booksError',
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    erorrCode: string,
    errorMessage: string,
    dispatchAction?: any,
    sx?: any
};

type AppDispatch = typeof store.dispatch;

type ErrorObj = {
    errorCode: string,
    errorMessage: string
}

let errorObj: ErrorObj = {
    errorCode: '',
    errorMessage: ''
};

export const ErrorModal = (props: Props) => {
    const {
        type, 
        erorrCode, 
        errorMessage, 
        isModalOpen, 
        setIsModalOpen, 
        dispatchAction,
        sx
    } = props;
    const dispatch = useDispatch<AppDispatch>();

    const error = useMemo(()=>{
        if(erorrCode !== 'code' || errorMessage !== 'message'){
            errorObj.errorCode = erorrCode;
            errorObj.errorMessage = errorMessage;
        }
        return {
            erorrCode: erorrCode,
            errorMessage: errorMessage
        }
    }, [isModalOpen]);

    if(typeof dispatchAction === 'function')console.log('error dispatch');
    
    const handleError = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget) {
            if(type === 'userError') dispatch(userRemoveError());
            if(type === 'booksError') dispatch(booksRemoveError());

        };
        setIsModalOpen(!isModalOpen);
    };

    const handleDispatch = () => {
        console.log('handleDispatch',dispatchAction);
    }

    return <Backdrop
        open={isModalOpen}
        onClick={handleError}
        sx={{
            zIndex: '2000',
            ...sx
        }}
    >
        <Container>
            <ErrorContainer>
                <ErrorHeader>ERROR</ErrorHeader>
                <ErrorCode>{error.erorrCode === 'code' ? errorObj.errorCode : error.erorrCode}</ErrorCode>
                <ErrorMessage>{error.errorMessage === 'message' ? errorObj.errorMessage : error.errorMessage}</ErrorMessage>
                {!dispatchAction 
                    ? <ErrorButton onClick={handleError}>OK</ErrorButton>
                    : <ErrorButton onClick={handleDispatch}>OK</ErrorButton>
                }

            </ErrorContainer>
        </Container>
    </Backdrop>
}