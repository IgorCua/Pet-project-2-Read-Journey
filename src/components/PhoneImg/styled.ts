import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const ImageContainer = styled(Container)(({theme}) => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
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
        top: '80px'
    }
//    [theme.breakpoints.up('mobile')]: {
//     backgroundImage: 'url(/assets/images/iPhone-15-Black-mobile-1x.png)',
//     // backgroundImage: `-webkit-image-set(
//     //     url(../assets/images/iPhone-15-Black-mobile-1x.png) 1x,
//     //     url(../assets/images/iPhone-15-Black-mobile-2x.png) 2x,
//     // )`,`
//     '@media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx)': {
//         backgroundImage: 'url(/assets/images/iPhone-15-Black-mobile-2x.png)'
//     }
// //     backgroundImage: '-webkit-image-set('
// //         'url(/images/image-lg_1x.webp) 1x,'    
// //         'url(/images/image-lg_2x.webp) 2x  )'';  
//    } 

}));