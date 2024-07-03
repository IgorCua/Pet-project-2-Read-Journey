import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Section = styled(Box)(({theme}) => ({
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: theme.palette.custom.bg3,

    borderRadius: '30px',
    
    [theme.breakpoints.up('tablet')]:{
        padding: '32px 32px',
        flexDirection: 'row',
        gap: '32px'
    },

    [theme.breakpoints.up('desktop')]:{
        padding: '20px 20px',
        width: '353px',
        flexDirection: 'column',
    }
}));

export const SectionTest = styled(Box)(({theme}) => ({
    padding: '20px 20px',
    display: 'flex', 
    gap: '20px',
    flexDirection: 'column',

    backgroundColor: theme.palette.custom.bg3,
    borderRadius: '30px',

    [theme.breakpoints.up('tablet')]: {
        '&:nth-of-type(1)': {
            padding: '30px 30px',
            gap: '32px',
            flexDirection: 'row'
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
    }
})) as typeof Box;
