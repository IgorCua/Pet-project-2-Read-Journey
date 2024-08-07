import { Backdrop } from "@mui/material";
import { Container, ErrorButton, ErrorCode, ErrorContainer, ErrorHeader, ErrorMessage } from "./styled";
import { store } from "../../redux/store";
import { useDispatch } from "react-redux";
import { userRemoveError } from "../../redux/auth/operations";
import { booksRemoveError } from "../../redux/books/operations";
import { useMemo } from "react";
import { theme } from "../../styles/themes";
import { useNavigate } from "react-router-dom";

type Props = {
    type: 'userError' | 'booksError',
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    erorrCode: string,
    errorMessage: string,
    dispatchFunction?: any,
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
        dispatchFunction,
        sx
    } = props;
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

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

    // if(typeof dispatchFunction === 'function')console.log('error dispatch');
    
    const handleError = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget) {
            if(type === 'userError') dispatch(userRemoveError());
            if(type === 'booksError') dispatch(booksRemoveError());
        };
        setIsModalOpen(!isModalOpen);
    };

    return <Backdrop
        open={isModalOpen}
        onClick={handleError}
        sx={{
            zIndex: '2000',
            backgroundColor: theme.palette.custom.backdropBackground,
            ...sx
        }}
    >
        <Container>
            <ErrorContainer>
                <ErrorHeader>ERROR</ErrorHeader>
                <ErrorCode>{error.erorrCode === 'code' ? 'code' : error.erorrCode}</ErrorCode>
                <ErrorMessage>{error.errorMessage === 'message' ? 'message' : error.errorMessage}</ErrorMessage>
                {!dispatchFunction 
                    ? <ErrorButton onClick={handleError}>OK</ErrorButton>
                    : <ErrorButton onClick={dispatchFunction}>OK</ErrorButton>
                }
            </ErrorContainer>
        </Container>
    </Backdrop>
}