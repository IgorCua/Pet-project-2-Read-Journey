import { ButtonBase, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',

    [theme.breakpoints.up('tablet')]: {
        width: '100%',
        marginTop: '16px',
        gap: '16px',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('desktop')]: {
        flexDirection: 'row'
    }
}));

export const ContainerForm = styled('section')(({theme}) => ({
    flexDirection: 'column',
    [theme.breakpoints.up('tablet')]:{
    },

    [theme.breakpoints.up('desktop')]:{
        flexDirection: 'column',
    }
}));

export const FormHeader = styled(Typography)(({theme}) => ({
    marginBottom: '8px',
    marginLeft: '15px',

    fontSize: '14px',
    lineHeight: '14px',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]:{
        
    },

    [theme.breakpoints.up('desktop')]:{

    }
})) as typeof Typography;

export const ContainerRecommended = styled('div')(({theme}) => ({
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    // gap: '',
    // justifyContent: 'space-between',
    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '12px',
    
    [theme.breakpoints.up('tablet')]: {
        paddingTop: '26px',
        width: '313px'
    }
}));

export const Header = styled(Typography)(({theme}) => ({
    marginBottom: '14px',

    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]:{
        marginBottom: '20px',
        
        fontSize: '20px',
        lineHeight: '20px',
    }
})) as typeof Typography;

export const ContainerFilterCards = styled('div')(({theme}) => ({
    marginBottom: '11px',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',

    [theme.breakpoints.up('tablet')]: {
        marginBottom: '20px'
    }
}));

export const ContainerLinks = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export const LinkButton = styled(ButtonBase)(({theme}) => ({
    padding: '0px 1px',
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
})) as typeof ButtonBase;

export const IconWrapper = styled(IconButton)(({theme}) => ({
    padding: '0',
    width: '20px',
    height: '20px',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    color: theme.palette.custom.textMain,

    borderRadius: '50%',
    // border: `1px solid ${theme.palette.custom.buttonBorderGrey}`
})) as typeof IconButton;

export const ContainerMyLibrary = styled('section')(({theme}) => ({
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    backgroundColor: theme.palette.custom.bg3,

    borderRadius: '30px',

    [theme.breakpoints.up('tablet')]:{
        padding: '40px 40px',
        marginTop: '0px',
    },

    [theme.breakpoints.up('desktop')]:{
        width: '100%',
        marginTop: '0px',
    }
}));

export const LibraryHeaderContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between'
}));

export const LibraryHeader = styled('h2')(({theme}) => ({
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: '700',

    color: theme.palette.custom.textMain,
}));

// export const LibrarySelect = styled('div')(({theme}) => ({
//     color: theme.palette.custom.textMain,
// }));

export const ContainerEmptyLibrary = styled('div')(({theme}) => ({
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

export const ImageContainer = styled('figure')(({theme}) => ({
    padding: '25px 25px',
    marginBottom: '10px',

    backgroundColor: theme.palette.custom.bg2,

    borderRadius: '50%'
}));

export const Image = styled('img')(({theme}) => ({
    height: '50px',
    width: '50px'
}));

export const ImageText = styled('p')(({theme}) => ({
    textAlign: 'center',
    color: theme.palette.custom.textMain
}));

export const ImageSpan = styled('span')(({theme}) => ({
    color: theme.palette.custom.textSecondary
}));

export const ContainerBooks = styled('div')(({theme}) => ({
    // color: theme.palette.custom.textSecondary
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',

    [theme.breakpoints.up('tablet')]:{
        gap: '25px',
    },

    [theme.breakpoints.up('desktop')]:{
        gap: '20px',
    }
}));
