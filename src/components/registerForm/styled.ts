import { Button, ButtonBase, Container, TextField } from "@mui/material";
import { margin, styled } from "@mui/system";
import { ErrorMessage, Form } from "formik";
import React, { ComponentProps } from "react";
import { FormTextField } from "./FormTextField";

export const RegForm: React.FC<{ children?: React.ReactNode, onSubmit?: any }> = styled(Form)(({theme}) =>({
        display: 'flex',
        flexDirection: 'column',
        // gap: '8px'
        // '& div': {
        //     width: '100%'
        // },
        // '& input': {
        //     width: '100%'
        // }
        // '& div:first-of-type:nth-child(-n + 1)': {
        //     // marginBottom: '8px'
        //     backgroundColor: 'red'
        // }
}));

export const InputContainer = styled(Container)(({theme})=>({
    position: 'relative',
    
    // '&'
    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '12px',
    // '& :nth-child(4)': {
    //     backgroundColor: 'red'
    // }
}));

export const List = styled('ul')(({theme})=>({
    position: 'relative',
    
    // '&'
    // backgroundColor: theme.palette.custom.bg2,

    // borderRadius: '12px',
    '& li:nth-child(-n + 2)': {
        marginBottom: '8px'
    },

    '& li:last-child':{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px'
    }
}));

export const ButtonContainer = styled(Container)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
}));

export const NameField = styled(FormTextField)(({theme})=>({
    '& div': {
        paddingLeft: '14px',
    },
    '& div::before': {
        content: '"Name:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
    },
    '& div input': {
        padding: '14px 14px 14px 10px',
        // paddingLeft: '10px',
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
    },
    '& div input': {
        padding: '14px 14px 14px 10px',
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

    },
    '& div input': {
        padding: '14px 14px 14px 10px',
        fontSize: '12px'
    }
})) as typeof FormTextField;

export const CustomErrorMessage: any = styled(ErrorMessage)(({theme}) => ({
    position: 'absolute',
    top: '30px',
    left: '14px',

    lineHeight: '1.1em',
    color: 'red',
    fontSize: '12px',

    zIndex: '100'
})) as typeof ErrorMessage;

export const SubmitButton = styled(Button)(({theme})=>({

    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '18px', /* 128.571% */
    letterSpacing: '0.28px',

    '&:hover': {
        // backgroundColor: 'grey'
    }
})) as typeof Button;

export const LinkButton = styled(ButtonBase)(({theme})=>({
    padding: '0px',
    height: '20px',

    color: theme.palette.custom.textSecondary,
    fontSize: '12px',
    // lineHeight: 'calc(14 / 12)', /* 116.667% */
    letterSpacing: '-0.24px',
    textDecorationLine: 'underline',

    borderRadius: '5px',

    '&:hover': {
        color: theme.palette.custom.bg1
    }
})) as typeof ButtonBase;

export {}