import { ButtonBase, Typography } from "@mui/material";
import { maxWidth, styled, width } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    minWidth:'71px',
    // width:'137px',
    maxWidth: '137px',
    // width: '110px',
    width: '100%',
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    cursor: 'pointer',

    // '&:hover': {
    '&:hover img': {
        boxShadow: `0px 0px 0px 3px ${theme.palette.custom.buttonBorderGrey}`
    },
}));

export const Image = styled('img')(({theme}) => ({
    marginBottom: '8px',
    width: '100%',
    height: '208px',
    // maxHeight: '208px'
    // cursor: 'pointer',
    borderRadius: '8px',
    transitionDuration: '250ms',
    transitionProperty: 'box-shadow',
}));

export const DescriptionContainer = styled('div')(({theme}) => ({
    width: '100%',
    // overflow:'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',

    // 'img:has(~ &:hover)': {
    //     boxShadow: `0px 0px 0px 3px ${theme.palette.custom.buttonBorderGrey}`
    // },

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
    // padding: '40px 0px',
    // width: '335px',
    position: 'relative',

    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: theme.palette.custom.bg3,

    // border: `1px solid ${theme.palette.custom.modalBorder}`,
    // borderRadius: '12px',
}));

export const BackdropCardContainer = styled('div')(({theme}) => ({
    width: '140px',
    display: 'flex',
    // justifyContent: 'center',
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
    // textOverflow: 'ellipsis'

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