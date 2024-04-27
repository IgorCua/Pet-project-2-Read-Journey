// import styled from "@emotion/styled";
// import { Container, styled } from "@mui/material";
// import Button from '@mui/material/Button';
import { PhoneImg } from "../../components/PhoneImg/PhoneImg";
import { Icon } from "../../components/icon/Icon";
import { RegisterForm } from "../../components/registerForm/RegisterForm";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { 
    ContainerMain, 
    ContainerSecondary, 
    DecorationContainer,
    Header,
    IconContainer,
    IconHeader,
    Span
} from "./styled";

export const RegisterPage = () => {

    return (
        <PageWrapper>
            <DecorationContainer>
            <ContainerMain>
                <IconContainer>
                    <Icon iconName='#icon-logo' sx={{width: '42px', height: '17px'}}/>
                    <IconHeader>Read Journey</IconHeader>
                </IconContainer>
                <Header>Expand your mind, reading <Span>a book</Span></Header>
                <RegisterForm/>
            </ContainerMain>
            <ContainerSecondary>
                <PhoneImg/>
            </ContainerSecondary>
            </DecorationContainer>
        </PageWrapper>
    )
}