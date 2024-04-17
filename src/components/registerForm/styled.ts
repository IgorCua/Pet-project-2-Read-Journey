import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Form } from "formik";
import React from "react";

export const RegForm: React.FC<{ children?: React.ReactNode }> = styled(Form)(({theme}) =>({
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
        // '& div': {
        //     width: '100%'
        // },
        // '& input': {
        //     width: '100%'
        // }
}));

export const NameField = styled(TextField)(({theme})=>({
    // paddingLeft: '',
    '& div': {
        paddingLeft: '14px',
    },
    '& div::before': {
        content: '"Name:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        // backgroundColor: 'yellow',
        // border: '1px solir yellow',
    },
    '& div input': {
        paddingLeft: '10px',
        fontSize: '12px'        
    },
    '&:hover': {
    }
})) as typeof TextField;

export const EmailField = styled(TextField)(({theme})=>({
    '& div': {
        paddingLeft: '14px',
    },
    '& div::before': {
        content: '"Email:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        // backgroundColor: 'yellow',
        // border: '1px solir yellow',
    },
    '& div input': {
        paddingLeft: '10px',
        fontSize: '12px'        
    },
})) as typeof TextField;

export const PasswordField = styled(TextField)(({theme})=>({
    fontSize: '12px',
    '& div': {
        paddingLeft: '14px',
    },
    '& div:nth-child(1)::before': {
        content: '"Password:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        // backgroundColor: 'yellow',
        // border: '1px solir yellow',

    },
    '& div input': {
        paddingLeft: '10px',
        fontSize: '12px'
    },
})) as typeof TextField;

export const SubmitButton = styled(Button)(({theme})=>({

})) as typeof Button;

export {}