import { IconButton } from "@mui/material";
import { fontSize, maxWidth, minWidth, styled } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // [theme.breakpoints.down('tablet')]: {
    //     // justifyContent: 'center',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    // }
}));

export const HeaderContainer = styled('div')(({theme}) => ({
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.down('tablet')]: {
        minWidth:'240px',
        maxWidth:'290px',
        width:'100%',  
    },
    [theme.breakpoints.up('tablet')]: {
        width:'100%',  
    }
}));

export const Header = styled('h3')(({theme}) => ({
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',

    [theme.breakpoints.up('tablet')]: {
        fontSize: '28px',
        lineHeight: '32px',
    }
}));

export const IconWrapper = styled(IconButton)(({theme}) => ({
    padding: '0',
    width: '32px',
    height: '32px',
    // display: 'flex',
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

export const CardsContainer = styled('div')(({theme}) => ({
    display: 'flex',
    maxHeight: '651px',
    gap: '20px',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    
    [theme.breakpoints.up('tablet')]: {
        flexWrap: 'wrap',
        gap: '25px'
    },
    [theme.breakpoints.up('desktop')]: {
        // flexWrap: 'wrap',
        gap: '20px'
    }
}));

export const CardsDecorationContainer = styled('div')(({theme}) => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    
    [theme.breakpoints.up('tablet')]: {
        flexWrap: 'wrap',
        gap: '25px'
    }
}));

