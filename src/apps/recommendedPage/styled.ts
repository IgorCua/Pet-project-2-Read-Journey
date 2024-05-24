import { ButtonBase, IconButton, List, Typography } from "@mui/material";
import { borderRadius, display, maxWidth, styled, width } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    marginTop: '10px',
    display: 'flex',
    flexDirection:'column',
    gap: '10px',

    [theme.breakpoints.up('desktop')]: {
        marginTop: '16px',
        flexDirection: 'row',
        gap: '16px',
        '&:nth-of-type(1)': {
        },

        '&:nth-of-type(2)': {
        }
    }
}));

export const Section = styled('section')(({theme}) => ({
    padding: '20px 20px',

    backgroundColor: theme.palette.custom.bg3,
    borderRadius: '30px',

    [theme.breakpoints.up('tablet')]: {
        '&:nth-of-type(1)': {
            // maxWidth: '353px',
            padding: '30px 30px',
            display: 'flex', 
            gap: '32px',
        },

        '&:nth-of-type(2)': {
            padding: '40px 40px'
        }
    },
    
    [theme.breakpoints.up('desktop')]: {
        '&:nth-of-type(1)': {
            maxWidth: '353px',
            padding: '20px 20px',
            flexDirection: 'column',
        },

        // '&:nth-of-type(2)': {
        //     // padding: '40px 40px'
        // }
    }
}));

export const DescripotionList = styled(List)(({theme}) => ({
    padding: '20px 20px',
    display: 'flex',
    minWidth: '200px',
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
        justifyContent: 'space-between',
    },

    [theme.breakpoints.up('desktop')]: {
        minWidth: '313px',
        width: '100%'
    }
})) as typeof List;

export const NumberDiv = styled('div')(({theme}) => ({
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

    borderRadius: '50%',

    [theme.breakpoints.up('tablet')]: {
        minWidth: '40px',
        height: '40px',

        fontSize: '18px',
        lineHeight: '18px',
    }
}));

export const ListHeader = styled('h2')(({theme}) => ({
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700',

    [theme.breakpoints.up('tablet')]: {
        fontSize: '20px',
        lineHeight: '20px',
    }
}));

export const ListItemText = styled('h2')({
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
    },

    // [theme.breakpoints.up('tablet')]: {
    // }
}))as typeof ButtonBase;;

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
})) as typeof IconButton;;

export const Figure = styled('figure')(({theme}) => ({
    padding: '15px 20px',
    display: 'flex',
    gap: '7px',

    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '12px'
}));

export const Img = styled('img')(({theme}) => ({
    height: '40px',
    width: '40px'
}));

export const FigureText = styled(Typography)(({theme}) => ({
    fontSize: '14px',
    lineHeight: '18px',
    color: theme.palette.custom.textSecondary
})) as typeof Typography;

export const FigureSpan = styled('span')(({theme}) => ({
    color: theme.palette.custom.textMain
}));
