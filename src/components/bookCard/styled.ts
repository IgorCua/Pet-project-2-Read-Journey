import { Box, ButtonBase, Typography } from "@mui/material";
import { maxWidth, styled, width } from "@mui/system";

export const Container = styled(Box)(({theme}) => ({
    minWidth:'71px',
    maxWidth: '137px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    
    '&:hover img': {
        boxShadow: `0px 0px 0px 3px ${theme.palette.custom.buttonBorderGrey}`
    },
})) as typeof Box;

export const ImageContainer = styled(Box)(({theme}) => ({
    marginBottom: '8px',
    width: '137px',
    height: '208px',
    borderRadius: '8px',
    background: `url(${require('../../assets/images/book-opened-small-2x.png')}) no-repeat center`,
    backgroundSize: '111px 72px'
})) as typeof Box;

export const Image = styled('img')(({theme}) => ({
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    transitionDuration: '250ms',
    transitionProperty: 'box-shadow',
}));

export const DescriptionContainer = styled('div')(({theme}) => ({
    width: '100%',
    textOverflow: 'ellipsis',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',

    // 'img:has(~ &:hover)': {
    //     boxShadow: `0px 0px 0px 3px ${theme.palette.custom.buttonBorderGrey}`
    // },
    '&.myReading': {
        justifyContent: 'center'
    },

    // '&.library': {
    //     justifyContent: 'center'
    // }
}));

export const TitleContainer = styled('div')({
    minWidth: '70%',
    maxWidth: '100%',

    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
});

export const Header = styled(Typography)(({theme}) => ({
    marginBottom: '2px',

    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '700',
    color: theme.palette.custom.textMain
})) as typeof Typography;

export const Author = styled(Typography)(({theme}) => ({
    fontSize: '10px',
    lineHeight: '12px',
    fontWeight: '500',
    color: theme.palette.custom.textSecondary
})) as typeof Typography;

export const BackdropContainer = styled('div')(({theme}) => ({
    position: 'relative',

    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: theme.palette.custom.bg3,
}));

export const BackdropCardContainer = styled('div')(({theme}) => ({
    width: '140px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    overflow:'hidden',
    textOverflow: 'ellipsis',

    [theme.breakpoints.up('tablet')]: {
        width: '320px'
    }
}));

export const BackdropDescrContainer = styled('div')(({theme}) => ({
    marginBottom: '20px',

    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    
    '& p':{
        maxWidth: '100%'
    },

    '& p:nth-type-of(1)': {
        width: '120px'
    },

    [theme.breakpoints.up('tablet')]: {

    }
}));

export const Pages = styled(Typography)(({theme}) => ({
    fontSize: '10px',
    lineHeight: '12px',

    color: theme.palette.custom.textMain
})) as typeof Typography;

export const AddToLibraryBtn = styled(ButtonBase)(({theme})=>({
    width: '141px',
    padding: '12px 24px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    color: theme.palette.custom.textMain,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '18px',

    [theme.breakpoints.down('tablet')]: {
        // display: 'none'
    }
}));

export const StartReadingBtn = styled(ButtonBase)(({theme})=>({
    width: '141px',
    padding: '12px 24px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    color: theme.palette.custom.textMain,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '18px',

    [theme.breakpoints.down('tablet')]: {
        // display: 'none'
    }
}))