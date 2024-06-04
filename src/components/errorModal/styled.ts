import { Button, ButtonBase } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')(({theme}) =>({
    position: 'relative',

    backgroundColor: theme.palette.custom.bg3,

    border: `1px solid ${theme.palette.custom.modalBorder}`,
    borderRadius: '12px',
    
    [theme.breakpoints.up('mobileS')]: {
        padding: '20px 20px 15px 20px'
    },
    [theme.breakpoints.up('mobileM')]: {
        padding: '40px 40px 20px 40px'
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '80px 80px 40px 80px'
    },
}));

export const ErrorContainer = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));
export const ErrorHeader = styled('div')(({theme})=>({
    fontSize: '26px',
    fontWeight: '700',
    color: theme.palette.custom.textMain
}));
export const ErrorCode = styled('div')(({theme})=>({
    fontSize: '26px',
    fontWeight: '700',
    color: theme.palette.custom.textSecondary
}));
export const ErrorMessage = styled('div')(({theme})=>({
    marginBottom: '30px',
    color: theme.palette.custom.textMain
}));

// export const Button = styled(ButtonBase)(({theme})=>({
//     width: '91px',
//     padding: '10px 20px',
//     borderRadius: '30px',
//     border: '1px solid rgba(249, 249, 249, 0.20)',
// })) as typeof ButtonBase;

export const ErrorButton = styled(Button)(({theme})=>({

    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '18px', /* 128.571% */
    letterSpacing: '0.28px',

    [theme.breakpoints.up('tablet')]: {
        padding: '16px 54px',
        fontSize: '20px',
        lineHeight: '20px', /* 100% */
        letterSpacing: '0.4px'
    }

})) as typeof Button;
