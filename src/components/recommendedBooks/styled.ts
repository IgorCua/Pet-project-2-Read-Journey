import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const Section = styled('section')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('tablet')]: {
        width: '624px',
        alignSelf: 'center'
    },

    [theme.breakpoints.up('desktop')]: {
        width: '100%'
    }
}));

export const IconWrapper = styled(IconButton)(({theme}) => ({
    padding: '0',
    width: '32px',
    height: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: theme.palette.custom.bg1,

    border: `1px solid ${theme.palette.custom.buttonBorderGrey}`,

    [theme.breakpoints.up('tablet')]: {
        width: '40px', 
        height: '40px', 
    }
})) as typeof IconButton;

export const CardsContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    width: '100%',
    gap: '20px',
    
    [theme.breakpoints.up('tablet')]: {
        flexWrap: 'wrap',
        gap: '25px'
    },
    [theme.breakpoints.up('desktop')]: {
        width: '100%',
        gap: '20px',
    }
})) as typeof Box;

export const CardsDecorationContainer = styled('div')(({theme}) => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    
    [theme.breakpoints.up('tablet')]: {
        flexWrap: 'wrap',
        gap: '25px'
    }
}));

