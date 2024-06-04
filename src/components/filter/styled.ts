import { ButtonBase, TextField } from "@mui/material";
import { lineHeight, maxWidth, minWidth, styled, width } from "@mui/system";
import { FormTextField } from "../materialUI/FormTextField";

export const Form = styled('form')(({theme}) => ({
    // marginBottom: '20px',
    
    [theme.breakpoints.up('tablet')]: {
        minWidth: '295px',
        width: '47.5%',
        fontSize: '14px',
    },
    [theme.breakpoints.up('desktop')]: {
        width: '100%'
    }

}));

export const FormHeader = styled('h3')(({theme})=>({
    marginLeft: '14px',
    marginBottom:'8px',
    fontSize: '10px',
    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        fontSize: '14px',
        lineHeight: '18px'
    }
}));

export const InputTitle = styled(TextField)(({theme})=>({
    marginBottom: '8px',

    '& div': {
        paddingLeft: '14px',
    },
    '& div::before': {
        content: '"Book title:"',
        minWidth: '57px',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        
        [theme.breakpoints.up('tablet')]: {
            minWidth: '66px',
            fontSize: '14px',
        },
    },
    '& div input': {
        padding: '14px 14px 14px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '16px 14px 16px 10px',
            width: '84px',

            fontSize: '14px',
        },
    }
})) as typeof TextField;

export const InputAuthor = styled(TextField)(({theme})=>({
    '& div': {
        paddingLeft: '14px',
        // width: '30px'
    },
    '& div::before': {
        minWidth: '65px',
        content: '"The author:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        
        [theme.breakpoints.up('tablet')]: {
            fontSize: '14px',
            minWidth: '75px'
        },
    },
    '& div input': {
        padding: '14px 14px 14px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '16px 14px 16px 10px',
            
            fontSize: '14px',
        },
    }
})) as typeof TextField;

export const InputNumOfPages = styled(TextField)(({theme})=>({
    // marginBottom: '20px',
    marginTop: '8px',
    '& div': {
        paddingLeft: '14px',
        // width: '30px'
    },
    '& div::before': {
        minWidth: '100px',
        content: '"Number of Pages:"',
        fontSize: '12px',
        color: theme.palette.custom.textSecondary,
        
        [theme.breakpoints.up('tablet')]: {
            minWidth: '116px',

            fontSize: '14px',
        },
    },
    '& div input': {
        padding: '14px 14px 14px 10px',
        fontSize: '12px',

        [theme.breakpoints.up('tablet')]: {
            padding: '16px 14px 16px 10px',
            
            fontSize: '14px',
        },
    }
})) as typeof TextField;

export const Submit = styled(ButtonBase)(({theme}) => ({
    marginTop: '20px',
    // width: '91px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid rgba(249, 249, 249, 0.20)',

    color: theme.palette.custom.textMain,

    // transitionProperty: 'background-color',
    // transitionDuration: '250ms',

    // '&:hover': {
    //     backgroundColor: theme.palette.custom.bg2
    // },

    [theme.breakpoints.up('tablet')]: {
        padding: '12px 28px',

        fontSize: '16px',
        lineHeight: '18px'
    }
}));

// export const WorkoutContainer = styled('div')(({theme}) => ({
//     padding: '20px 20px',
//     marginTop: '10px',

//     backgroundColor: theme.palette.custom.bg2,

//     borderRadius: '30px',
// }));

// export const LinksContainer = styled('div')(({theme}) => ({
    
// }));