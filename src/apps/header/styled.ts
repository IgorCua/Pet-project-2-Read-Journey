import { ButtonBase } from "@mui/material";
import { display, height, styled, width } from "@mui/system";

export const NavContainer = styled('div')(({theme})=> ({
    paddingTop: '34px',
    paddingBottom: '40px',
    height:'100vh',
    width:'50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'center',

    '& button:first-of-type': {
        right: '30px',
        width: '28px', 
        height: '28px',
        alignSelf: 'flex-end',
    },

    backgroundColor: theme.palette.custom.bg2
}));

export const Nav = styled('nav')(({theme})=> ({
    width: '76px',
    display: 'flex',
    flexWrap: 'wrap',

    '& a': {
        color: theme.palette.custom.textMain,
        textDecoration: 'none',

        '& p': {
            marginRight: '2px',
            marginLeft: '2px',
        },

        '& div': {
            marginTop: '4px',
            width: '100%',
            height: '4px',
            display: 'none',
            transitionDuration: '250ms',
            transitionProperty: 'display',

            backgroundColor: theme.palette.custom.utilBlue,
            borderRadius: '4px'
        },

        [theme.breakpoints.down('tablet')]: {
            borderBottom: `8px solid transparent`,
        }
    },
    '& a.active': {
        borderBottom: 'none',
    },
    '& a.active div': {
        transitionDuration: '250ms',
        transitionProperty: 'display',

        display: 'block'
    },

    [theme.breakpoints.down('tablet')]: {
        gap: '20px',
    }
}));

export const LinkContainer = styled(`div`)(({theme})=> ({

}))

export const LogOffBtn = styled(ButtonBase)(({theme})=>({
    width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)'
}))
