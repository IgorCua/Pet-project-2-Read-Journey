import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const CustomButton = styled(Button)(({ theme }) => ({
    color: 'black',
    textTransform: 'none',
    // backgroundColor: 'grey',
    '&:hover': {
        // backgroundColor: 'yellow'
        backgroundColor: theme.palette.custom.utilBlue
    }
})) as typeof Button;

export const DecorationContainer = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    }
}));

export const IconContainer = styled('div')(({theme}) => ({
    marginBottom: '40px'
}));

export const Header = styled('h1')(({theme}) => ({
    marginBottom: '20px',

    color: theme.palette.custom.textMain,
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '32px', /* 100% */
    letterSpacing: '0.64px'
}));

export const Span = styled('span')(({theme}) => ({
    color: theme.palette.custom.textSecondary
}));

export const ContainerMain = styled('div')(({theme}) => ({
    padding: '20px 20px',
    width: '100%',
    backgroundColor: theme.palette.custom.bg3,

    borderRadius: '30px',

    [theme.breakpoints.up("tablet")]: {
        padding: '40px 64px'
    },
}));

export const ContainerSecondary = styled('figure')(({theme}) => ({
    height: '351px',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.palette.custom.bg3,

    borderRadius: '30px',

    [theme.breakpoints.up("tablet")]: {
        paddingTop: '20px',
        // paddingLeft: '40px',
        // paddingRight: '40px'
    }
}));