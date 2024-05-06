import { ButtonBase, TextField } from "@mui/material";
import { styled, width } from "@mui/system";
import { FormTextField } from "../materialUI/FormTextField";

export const Form = styled('form')(({theme}) => ({
    marginBottom: '20px'
}));

export const FormHeader = styled('h3')(({theme})=>({
    marginLeft: '14px',
    marginBottom:'8px',
    fontSize: '10px',
    color: theme.palette.custom.textMain,
}));

export const InputTitle = styled(TextField)(({theme})=>({
    marginBottom: '8px',

    '& div': {
        paddingLeft: '14px',
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
        padding: '14px 14px 14px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '16px 14px 16px 10px',
            
            fontSize: '14px',
        },
    }
})) as typeof TextField;

export const InputAuthor = styled(TextField)(({theme})=>({
    marginBottom: '20px',
    '& div': {
        paddingLeft: '14px',
        // width: '30px'
    },
    '& div::before': {
        width: '111px',
        content: '"The author:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        
        [theme.breakpoints.up('tablet')]: {
            fontSize: '14px',
        },
    },
    '& div input': {
        padding: '14px 14px 14px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '16px 14px 16px 10px',
            
            fontSize: '14px',
        },
    }
})) as typeof TextField;

export const Submit = styled(ButtonBase)(({theme}) => ({
    // width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    color: theme.palette.custom.textMain,

    transitionProperty: 'background-color',
    transitionDuration: '250ms',

    '&:hover': {
        backgroundColor: theme.palette.custom.bg2
    }
}));

export const WorkoutContainer = styled('div')(({theme}) => ({
    padding: '20px 20px',
    marginTop: '10px',

    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '30px',
}));

export const LinksContainer = styled('div')(({theme}) => ({
    
}));