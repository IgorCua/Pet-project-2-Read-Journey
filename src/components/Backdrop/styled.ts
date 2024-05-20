import { ButtonBase } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    position: 'relative',

    backgroundColor: theme.palette.custom.bg3,

    border: `1px solid ${theme.palette.custom.modalBorder}`,
    borderRadius: '12px',

    [theme.breakpoints.up('mobileS')]: {
        padding: '40px 50px'
    },
    [theme.breakpoints.up('mobileM')]: {
        padding: '40px 98px'
    },
}));

export const Button = styled(ButtonBase)(({theme})=>({
    width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',
})) as typeof ButtonBase;
