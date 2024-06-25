import { Box, ButtonBase } from "@mui/material";
import { fontSize, lineHeight, styled } from "@mui/system";
import { ErrorMessage, Form } from "formik";

export const CustomForm = styled(Form)(({theme}) =>({
    // width: '100%',
    display: 'flex',
    alignItems: 'start',
    // flexWrap: 'wrap',
    flexDirection: 'column',

    // gap: '20px',

    // nth-last-of-type(n + 2)
    '& .MuiBox-root:nth-last-of-type(n + 3)': {
        marginBottom: '8px',

        [theme.breakpoints.up('tablet')]: {
            // marginBottom: '14px',
        },
        '&:last-of-type':{
            // marginBottom: '0'
            display: 'flex',
            flexWrap: 'wrap'
        }
    },

    '& input': {
        [theme.breakpoints.up('tablet')]: {
            fontSize: '14px',
            lineHeight: '18px'
        },
    },

    [theme.breakpoints.up('tablet')]: {
        maxWidth: '472px',
        // marginBottom: '174px'
    },

    [theme.breakpoints.only('tablet')]: {
        // marginBottom: '174px'
    },
    // [theme.breakpoints.up('desktop')]: {
    //     width: '400px'
    // }

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

    zIndex: '10',
    
    [theme.breakpoints.up('tablet')]: {
        top: '34px',
        fontSize: '12px',
    },

})) as typeof ErrorMessage;

export const ErrorBox: any = styled('div')(({theme}) => ({
    margin: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    position: 'absolute',

    boxShadow: '0px 0px 0px 1px red',
    borderRadius: '12px',
    zIndex: '5'
    // zIndex: '1000'
}));

export const ButtonBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
})) as typeof Box;

export const Submit = styled(ButtonBase)(({theme}) => ({
    // marginTop: '20px',
    // width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        // marginTop: '82px',
        padding: '12px 28px',

        fontSize: '16px',
        lineHeight: '18px'
    }
})) as typeof ButtonBase;