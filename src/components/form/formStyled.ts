import { Box, ButtonBase } from "@mui/material";
import { styled } from "@mui/system";
import { ErrorMessage, Form } from "formik";

export const CustomForm = styled(Form)(({theme}) =>({
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    // flexWrap: 'wrap',

    // gap: '20px',

    [theme.breakpoints.up('tablet')]: {
        width: '472px',
        // marginBottom: '174px'
    },
    [theme.breakpoints.only('tablet')]: {
        marginBottom: '174px'
    }
}));

export const InputContainer = styled(Box)(({theme}) =>({
    position: 'relative',
    width: '100%'
})) as typeof Box;

export const CustomErrorMessage: any = styled(ErrorMessage)(({theme}) => ({
    position: 'absolute',
    top: '30px',
    left: '14px',

    lineHeight: '1.1em',
    color: 'red',
    fontSize: '10px',

    zIndex: '100',
    
    [theme.breakpoints.up('tablet')]: {
        top: '35px',
        fontSize: '14px',
    },

})) as typeof ErrorMessage;

export const Submit = styled(ButtonBase)(({theme}) => ({
    marginTop: '20px',
    // width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        padding: '12px 28px',

        fontSize: '16px',
        lineHeight: '18px'
    }
})) as typeof ButtonBase;