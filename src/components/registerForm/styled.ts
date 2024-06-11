import { Button, ButtonBase, Container } from "@mui/material";
import { borderRadius, styled } from "@mui/system";
import { ErrorMessage, Form } from "formik";
import { FormTextField } from "../materialUI/FormTextField";
import zIndex from "@mui/material/styles/zIndex";

// : React.FC<{ children?: React.ReactNode, onSubmit?: any }>
export const RegForm = styled(Form)(({theme}) =>({
        display: 'flex',
        flexDirection: 'column',
    
        [theme.breakpoints.up('tablet')]: {
            width: '472px',
            // marginBottom: '174px'
        },
        [theme.breakpoints.only('tablet')]: {
            marginBottom: '174px'
        }
}));

export const InputContainer = styled(Container)(({theme})=>({
    position: 'relative',
    
    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '12px',
  
}));

export const List = styled('ul')(({theme})=>({
    position: 'relative',

    '& li': {
        position: 'relative',
    },

    '& li:nth-of-type(-n + 2)': {
        marginBottom: '8px',

        [theme.breakpoints.up('tablet')]: {
            marginBottom: '14px',
        }
    },

    '& li:last-child':{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',

        [theme.breakpoints.up('tablet')]: {
            marginTop: '82px',
        }
    }
}));

export const ButtonContainer = styled(Container)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
}));

export const NameField = styled(FormTextField)(({theme})=>({
    '& div': {
        paddingLeft: '13px',
    },

    '& div::before': {
        content: '"Name:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,

        [theme.breakpoints.up('tablet')]: {
            fontSize: '14px',
        },
    },
    '& div input': {
        // padding: '13px 13px 13px 10px',
        fontSize: '12px',
        
        [theme.breakpoints.up('tablet')]: {
            // padding: '15px 14px 15px 10px',

            fontSize: '14px',
        },
    },
})) as typeof FormTextField;

export const EmailField = styled(FormTextField)(({theme})=>({
    '& div': {
        paddingLeft: '13px',
    },

    '& div::before': {
        content: '"Email:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        
        [theme.breakpoints.up('tablet')]: {
            fontSize: '14px',
        },
    },
    '& div input': {
        padding: '13px 13px 13px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '15px 14px 15px 10px',
            
            fontSize: '14px',
        },
    }
})) as typeof FormTextField;

export const PasswordField = styled(FormTextField)(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    transitionDuration: '250ms',
    transitionProperty:'box-shadow',

    '& input': {
        padding: '13px 13px 13px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '15px 5px 15px 10px',
            
            fontSize: '14px',
        },
    },

    '& .MuiInputBase-root::before': {
        paddingLeft: '14px',
        content: '"Password:"',
        alignSelf: 'center',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,

        zIndex: '1000',
        [theme.breakpoints.up('tablet')]: {
            fontSize: '14px',
        },
    },
})) as typeof FormTextField;

export const CustomErrorMessage: any = styled(ErrorMessage)(({theme}) => ({
    position: 'absolute',
    top: '30px',
    left: '14px',

    lineHeight: '1.1em',
    color: 'red',
    fontSize: '12px',

    zIndex: '100',
    
    [theme.breakpoints.up('tablet')]: {
        top: '35px',
        fontSize: '14px',
    },

})) as typeof ErrorMessage;

export const SubmitButton = styled(Button)(({theme})=>({

    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '18px', /* 128.571% */
    letterSpacing: '0.28px',

    [theme.breakpoints.up('tablet')]: {
        padding: '16px 54px',
        fontSize: '20px',
        lineHeight: '20px', /* 100% */
        letterSpacing: '0.4px'
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
    },

    [theme.breakpoints.up('tablet')]: {
        fontSize: '14px',
        lineHeight: '18px', /* 128.571% */
        letterSpacing: '-0.28px',
        textDecorationLine: 'underline'
    }
})) as typeof ButtonBase;
