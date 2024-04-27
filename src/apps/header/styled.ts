import { ButtonBase } from "@mui/material";
import { display, styled } from "@mui/system";

export const NavContainer = styled('div')(({theme})=> ({
    paddingTop: '34px',
    paddingBottom: '40px',
    height:'100vh',
    width:'50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'center',
    // position: 'relative',
    // opacity: '1',

    '& button:first-of-type': {
        // top: '30px',
        right: '30px',
        width: '28px', 
        height: '28px',
        alignSelf: 'flex-end',
        // position:'absolute'
    },

    backgroundColor: theme.palette.custom.bg2
}));

export const Nav = styled('nav')(({theme})=> ({
    padding: '20px 20px',
    display: 'flex',
    flexDirection:'column',
    // opacity: '1 !important',
    // position:'absolute',

    // backgroundColor: theme.palette.custom.textMain
}));

export const LogOffBtn = styled(ButtonBase)(({theme})=>({
    width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)'
}))
