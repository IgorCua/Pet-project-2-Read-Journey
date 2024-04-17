import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Form } from "formik";
import React from "react";
import { FormTextField } from "./FormTextField";

export const RegForm: React.FC<{ children?: React.ReactNode, onSubmit?:any }> = styled(Form)(({theme}) =>({
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

export const NameField = styled(FormTextField)(({theme})=>({
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
    }
})) as typeof FormTextField;

export const EmailField = styled(FormTextField)(({theme})=>({
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
    }
})) as typeof FormTextField;

export const PasswordField = styled(FormTextField)(({theme})=>({
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
    }
})) as typeof FormTextField;

export const SubmitButton = styled(Button)(({theme})=>({

})) as typeof Button;

export {}