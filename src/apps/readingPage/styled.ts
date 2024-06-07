import { Box, ButtonBase, TextField, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({theme}) => ({
    width: '100%',
}));

export const Form = styled('form')({

});

export const FormHeader = styled('h3')(({theme})=>({
    marginLeft: '14px',
    marginBottom:'8px',

    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '12px',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        fontSize: '14px',
        lineHeight: '18px'
    }
}));

export const Input = styled(TextField)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',

    '& .MuiInputBase-root::before': {
        minWidth: '79px',
        paddingLeft: '14px',
        content: '"Page number:"',
        alignSelf: 'center',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,

        zIndex: '1000',
        
        [theme.breakpoints.up('tablet')]: {
            minWidth: '92px',
            fontSize: '14px',
        },
    },
    '& input': {
        padding: '13px 10px 13px 10px',

        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '15px 4px 15px 10px',
            
            fontSize: '14px',
        },
    }
})) as typeof TextField;

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

export const ContainerStats = styled(Box)(({theme}) => ({

})) as typeof Box;

export const ContainerNoStats = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column'
})) as typeof Box;

export const Header = styled(Typography)(({theme}) => ({
    marginBottom: '14px',

    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700',
    
    color: theme.palette.custom.textMain
})) as typeof Typography;

export const Text = styled(Typography)(({theme}) => ({    
    fontSize: '14px',
    lineHeight: '18px',
    // letterSpacing: 'calc(16px / 100px)',
    letterSpacing: '-0.02em',
    
    color: theme.palette.custom.textSecondary
})) as typeof Typography;