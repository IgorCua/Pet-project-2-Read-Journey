// import styled from "@emotion/styled";
// import { Container, styled } from "@mui/material";
// import Button from '@mui/material/Button';
import { Icon } from "../../components/icon/Icon";
import { Section } from "../../components/section/Section";
import { ContainerMain, ContainerSecondary, DecorationContainer } from "./styled";

export const RegisterPage = () => {

    return (
        <Section>
            <DecorationContainer>
            <ContainerMain>
                <Icon iconName='#icon-logo' sx={{width: '42px', height: '17px'}}/>
            </ContainerMain>
            <ContainerSecondary>

            </ContainerSecondary>
            </DecorationContainer>
        </Section>
    )
}