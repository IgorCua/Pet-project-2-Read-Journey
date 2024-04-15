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

    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    }
}));

export const ContainerMain = styled('div')(({theme}) => ({
    padding: '20px 20px',
    width: '100%',
    backgroundColor: theme.palette.custom.bg3,
    [theme.breakpoints.up("tablet")]: {
        padding: '40px 64px'
    }
}));

export const ContainerSecondary = styled('div')(({theme}) => ({
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.palette.custom.bg3,
    [theme.breakpoints.up("tablet")]: {
        paddingTop: '20px',
        // paddingLeft: '40px',
        // paddingRight: '40px'
    }
}));