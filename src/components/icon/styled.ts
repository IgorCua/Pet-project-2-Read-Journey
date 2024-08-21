import { SvgIcon } from "@mui/material";
import { styled } from "@mui/system";

export const CustomIcon = styled(SvgIcon)(({theme}) => ({
    padding: '0',
    height:'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
