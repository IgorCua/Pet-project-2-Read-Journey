import { Backdrop, IconButton } from "@mui/material";
import React from "react";
import { Container } from "./styled";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/themes";

type Props = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactElement,
    sx?: any
};

export const CustomBackdrop = (props: Props) => {
    const {
        isModalOpen,
        setIsModalOpen, 
        children, 
        sx
    } = props;

    const handleModal = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget) setIsModalOpen(!isModalOpen);
    }

    return <Backdrop
        aria-hidden={isModalOpen ? 'false' : 'true'}
        open={isModalOpen}
        onClick={handleModal}
        sx={{
            backgroundColor: theme.palette.custom.backdropBackground,
            zIndex: '1000',
            // ...sx,
        }}
    >
        
        <Container sx={{position: 'relative', ...sx}}>
            <IconButton
                size="small"
                aria-label="close backdrop"
                aria-controls="close backdrop button"
                onClick={() => setIsModalOpen(false)}
                color='inherit'
                sx={{
                    position: 'absolute',
                    right: '16px',
                    top: '16px',
                    color: theme.palette.custom.textMain,
                }} 
                >
                    <Icon 
                        iconName='#icon-close' 
                        sx={{
                            width: '22px', 
                            height: '22px',
                        }} 
                    />
            </IconButton>
            {children}
        </Container>
    </Backdrop>
}