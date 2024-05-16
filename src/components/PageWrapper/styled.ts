import { styled } from "@mui/system";

export const WrapperDiv = styled('div')(({theme}) => ({
    margin: 'auto',
    padding: '20px 20px',
    width: '100%',
    minWidth: '280px',
    maxWidth: '1440px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // overflow: 'hidden',
    // overflowY: 'auto',
    
    [theme.breakpoints.up('tablet')]: {
        padding: '32px 32px',
    }
}));