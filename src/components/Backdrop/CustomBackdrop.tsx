import { Backdrop, IconButton } from "@mui/material"
import React, { MouseEvent } from "react"
import { Container } from "./styled";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/themes";

type Props = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactElement;
};

export const CustomBackdrop = ({isModalOpen, setIsModalOpen, children}: Props) => {
    const handleModal = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget)setIsModalOpen(!isModalOpen);
    }

    return <Backdrop
        open={isModalOpen}
        onClick={handleModal}
    >
        <Container>
            <IconButton
                size="small"
                aria-label="close book modal"
                aria-controls="book-modal"
                // aria-haspopup="true"
                onClick={() => setIsModalOpen(false)}
                color='inherit'
                sx={{
                    // width: '22px', 
                    // height: '22px', 
                    position: 'absolute',
                    right: '16px',
                    top: '16px',
                    color: theme.palette.custom.textMain
                }} 
                >
                    <Icon 
                        iconName='#icon-close' 
                        sx={{width: '22px', height: '22px',
                            
                        }} 
                    />
            </IconButton>

            {children}

        </Container>
    </Backdrop>
}