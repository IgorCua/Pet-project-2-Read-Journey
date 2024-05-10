import { ButtonBase } from "@mui/material";
import { display, height, lineHeight, padding, positions, styled, width } from "@mui/system";

// export const HeaderWrapper = styled

export const UserContainer = styled('div')(({theme}) => ({
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: theme.palette.custom.textMain,
    backgroundColor: theme.palette.custom.bg2,

    border: `1px solid ${theme.palette.custom.buttonBorderGrey}`,
    borderRadius: '50%',

    // [theme.breakpoints.up('mobile')]: {
    //     marginRight:'10px'
    // },
    
    // [theme.breakpoints.up('tablet')]: {
    //     marginRight:'16px'
    // }
}));

export const NavContainer = styled('div')(({theme})=> ({
    paddingTop: '34px',
    paddingBottom: '40px',
    height:'100vh',
    width:'50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'center',

    backgroundColor: theme.palette.custom.bg2,

    // zIndex: -100,
    '& button:first-of-type': {
        right: '30px',
        width: '28px', 
        height: '28px',
        alignSelf: 'flex-end',
    },

    [theme.breakpoints.up('tablet')]: {
        padding: '0',
        height: 'auto',
        width: 'auto',
        flexDirection:'row',
        backgroundColor: theme.palette.custom.bg3
    }    
}));

export const Nav = styled('nav')(({theme})=> ({
    width: '76px',
    display: 'flex',
    flexWrap: 'wrap',

    '& a': {
        color: theme.palette.custom.textSecondary,
        textDecoration: 'none',
        position:'relative',

        '& p': {
            marginRight: '2px',
            marginLeft: '2px',

            fontSize: '14px',
            lineHeight: '18px',

            [theme.breakpoints.up('tablet')]: {
                fontSize: '16px',
                // lineHeight: '20px',
            }
        },

        '& div': {
            position: 'absolute',
            // marginTop: '4px',
            width: '100%',
            height: '3px',
            display: 'none',
            transitionDuration: '250ms',
            transitionProperty: 'display',

            backgroundColor: theme.palette.custom.utilBlue,
            borderRadius: '4px'
        },

        [theme.breakpoints.down('tablet')]: {
            // borderBottom: `8px solid transparent`,
        },

        [theme.breakpoints.up('tablet')]: {
            // borderBottom: `8px solid transparent`,
        }
    },
    '& a.active': {
        borderBottom: 'none',
        color: theme.palette.custom.textMain
    },
    '& a.active div': {
        
        // transitionDuration: '250ms',
        // transitionProperty: 'display',
        cursor: 'auto',
        display: 'block',

        [theme.breakpoints.up('mobile')]: {
            bottom:'-7px'
        },
        [theme.breakpoints.up('tablet')]: {
            bottom:'-10px',
        }
    },

    [theme.breakpoints.down('tablet')]: {
        gap: '20px',
    },
    [theme.breakpoints.up('tablet')]: {
        // height: 'auto',
        width: 'auto',
        flexDirection:'row',
        gap: '32px'
    }  
}));

export const LinkContainer = styled(`div`)(({theme})=> ({

}));

export const LogOffBtn = styled(ButtonBase)(({theme})=>({
    width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    [theme.breakpoints.up('tablet')]: {
        display: 'none'
    }
}));
