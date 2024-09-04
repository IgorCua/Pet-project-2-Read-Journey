import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const ImageContainer = styled(Container)(({theme}) => ({
    height: '331px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('desktop')]: {
        height: '100%'
    }
}));

export const Image = styled('img')(({theme}) => ({
    width: '255px',
    height: 'auto',
    position: 'absolute',
    // backgroundImage: 'url("/assets/images/iPhone-15-Black-mobile-1x.png")',
    // backgroundImage: 'url(./iPhone-15-Black-mobile-1x.png)',
    // backgroundImage: 'url(./woman_1x.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    
    [theme.breakpoints.up('desktop')]: {
        width: '405px',
    }
}));