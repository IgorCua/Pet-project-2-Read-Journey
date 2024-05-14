import { ButtonBase, IconButton, List } from "@mui/material";
import { borderRadius, display, styled } from "@mui/system";

export const Container = styled('div')({
    marginTop: '10px',
    display: 'flex',
    flexDirection:'column',
    gap: '10px'
});

export const Section = styled('section')(({theme}) => ({
    padding: '20px 20px',

    backgroundColor: theme.palette.custom.bg3,

    borderRadius: '30px',

    [theme.breakpoints.up('tablet')]: {
        '&:nth-of-type(1)': {
            padding: '30px 30px',
            display: 'flex', 
            gap: '32px'
        },

        '&:nth-of-type(2)': {
            padding: '40px 40px'
        }
    }
    
}));

export const DescripotionList = styled(List)(({theme}) => ({
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    color: theme.palette.custom.textMain,

    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '12px',

    zIndex: '0',

    '& li': {
        display:'flex',
        gap: '14px'
    },

    '& li:last-of-type': {
        justifyContent: 'space-between'
    }
})) as typeof List;

export const NumberDiv = styled('div')({
    // marginRight: '12px',
    minWidth: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',

    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700',

    color: 'black',
    backgroundColor: '#fff',

    borderRadius: '50%'
})

export const ListHeader = styled('h2')({
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700'
});

export const ListItemHeader = styled('h2')({
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '500'
});

export const Span = styled('span')(({theme}) => ({
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '500',

    color: theme.palette.custom.textSecondary
}));

export const LinkButton = styled(ButtonBase)(({theme}) => ({
    padding: '3px 5px',
    textDecoration: 'underline',
    textUnderlinePosition: 'under',
    fontSize: '14px',
    lineHeight: '18px',
    color: theme.palette.custom.textSecondary,

    borderRadius: '4px',

    transitionProperty: 'background-color',
    transitionDuration: '250ms',

    '&:hover': {
        backgroundColor: theme.palette.custom.bg3
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
    color: theme.palette.custom.textMain,

    border: `1px solid ${theme.palette.custom.buttonBorderGrey}`
}));