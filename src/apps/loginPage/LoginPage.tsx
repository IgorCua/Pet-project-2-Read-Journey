import { useState } from "react";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { ContainerMain, ContainerSecondary, DecorationContainer, Header, IconContainer, IconHeader, Span } from "./styled";
import { Icon } from "../../components/icon/Icon";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { PhoneImg } from "../../components/PhoneImg/PhoneImg";

export const LoginPage = () => {
    // export type TargetGroup = {
    //     id: number;
    //     name: string;
    //     targets: Target[];
    //     children?: TargetGroup[];
    // }
    
    return (
        <PageWrapper>
            <DecorationContainer>
            <ContainerMain>
                <IconContainer>
                    <Icon iconName='#icon-logo' sx={{width: '42px', height: '17px'}}/>
                    <IconHeader>Read Journey</IconHeader>
                </IconContainer>
                <Header>Expand your mind, reading <Span>a book</Span></Header>
                <LoginForm/>
            </ContainerMain>
            <ContainerSecondary>
                <PhoneImg/>
            </ContainerSecondary>
            </DecorationContainer>
        </PageWrapper>
    )
}