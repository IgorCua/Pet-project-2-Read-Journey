import { Backdrop } from "@mui/material"
import React from "react"

type Props = {
    children: React.ReactElement;
    handleModal: () => void;
    isModalOpen: boolean;
};

const handleBackdrop = () => {

}

export const CustomBackdrop = ({isModalOpen, handleModal, children}: Props) => {
    return <Backdrop
        open={isModalOpen}
        onClick={handleModal}
    >
        {children}
    </Backdrop>
}