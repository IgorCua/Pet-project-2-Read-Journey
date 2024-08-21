import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({theme}) => ({
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    
    [theme.breakpoints.up('tablet')]: {
        marginTop: '16px',
        gap: '16px'
    },
    
    [theme.breakpoints.up('desktop')]: {
        // width: '100%'
        flexDirection: 'row',
    },
})) as typeof Box;

export const FormContainer = styled('section')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    
    [theme.breakpoints.up('tablet')]: {
        // width: '47%'
        maxWidth: '46%'
    },
    [theme.breakpoints.up('desktop')]: {
        maxWidth: '100%'
    }
}));

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

export const ContainerStats = styled(Box)(({theme}) => ({

})) as typeof Box;

export const ContainerNoStats = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('tablet')]:{
        width:'305px'
    }
})) as typeof Box;

export const Header = styled(Typography)(({theme}) => ({
    marginBottom: '14px',

    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700',
    
    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]:{
        fontSize: '20px',
        lineHeight: '20px',
    }
})) as typeof Typography;

export const Text = styled(Typography)(({theme}) => ({    
    fontSize: '14px',
    lineHeight: '18px',
    // letterSpacing: 'calc(16px / 100px)',
    letterSpacing: '-0.02em',
    
    color: theme.palette.custom.textSecondary,

})) as typeof Typography;

export const MyReadingContainer = styled(Box)(({theme}) => ({
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: theme.palette.custom.bg3,

    borderRadius: '30px',

    [theme.breakpoints.up('tablet')]: {
        width: '100%'
    }
}));

export const MyReadingHeaderContainer = styled(Box)(({theme}) => ({
    width: '100%',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    
    color: theme.palette.custom.textMain
})) as typeof Box;

export const MyReadingHeader = styled(Box)(({theme}) => ({
    alignSelf: 'start',

    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: '700',
    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        fontSize: '28px',
        lineHeight: '32px',
    }
})) as typeof Typography;

export const MyReadingTimeLeft = styled(Box)(({theme}) => ({
    alignSelf: 'start',

    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: '500',
    color: theme.palette.custom.textSecondary,

    [theme.breakpoints.up('tablet')]: {
        fontSize: '14px',
        lineHeight: '18px',
    }
})) as typeof Typography;

export const CircleOutside = styled(Box)(({theme}) => ({
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '50%',
    border: `2px solid ${theme.palette.custom.bgWhite}`,

    [theme.breakpoints.up('tablet')]: {
        width: '50px',
        height: '50px',
    }
}));

export const CircleInside = styled(Box)(({theme}) => ({
    width: '30px',
    height: '30px',
    transitionDuration: '300ms',
    transitionProperty: 'height, width, border-radius',

    backgroundColor: theme.palette.custom.utilRed,

    borderRadius: '50%',

    [theme.breakpoints.up('tablet')]: {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    }
})) as typeof Box;