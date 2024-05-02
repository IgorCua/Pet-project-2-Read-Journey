import { ButtonBase, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { FormTextField } from "../materialUI/FormTextField";

export const Container = styled('div')(({theme}) => ({

}));

export const Form = styled('form')(({theme}) => ({
    
}));

export const InputTitle = styled(TextField)(({theme})=>({
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
    '& div': {
        paddingLeft: '14px',
    },
    '& div::before': {
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
    
}));

export const WorkoutContainer = styled('div')(({theme}) => ({
    
}));

export const LinksContainer = styled('div')(({theme}) => ({
    
}));