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
    sx?: any
};
type AppDispatch = typeof store.dispatch;
export const ErrorModal = (props: Props) => {
    const {
        type, 
        erorrCode, 
        errorMessage, 
        isModalOpen, 
        setIsModalOpen, 
        sx
    } = props;

    const error = useMemo(()=>{
        return {
            erorrCode: erorrCode,
            errorMessage: errorMessage
        }
    }, [isModalOpen])

    const dispatch = useDispatch<AppDispatch>();
    
    const handleError = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget) {
            if(type === 'userError') dispatch(userRemoveError());
            if(type === 'booksError') dispatch(booksRemoveError());
        };
        setIsModalOpen(!isModalOpen);
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
                <ErrorCode>{error.erorrCode}</ErrorCode>
                <ErrorMessage>{error.errorMessage}</ErrorMessage>
                <ErrorButton onClick={handleError}>OK</ErrorButton>
            </ErrorContainer>
        </Container>
    </Backdrop>
}