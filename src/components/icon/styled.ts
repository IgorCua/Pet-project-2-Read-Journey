import { SvgIcon } from "@mui/material";
import { styled } from "@mui/system";

export const CustomIcon = styled(SvgIcon)(({theme}) => ({
    padding: '0',
    height:'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
// export const CustomButton = styled(Button)(({ theme }) => ({
//     color: 'black',
//     textTransform: 'none',
//     // backgroundColor: 'grey',
//     '&:hover': {
//         // backgroundColor: 'yellow'
//         backgroundColor: theme.palette.custom.utilBlue
//     }
// })) as typeof Button;