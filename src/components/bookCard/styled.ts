import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    width: '137px',
    display: 'flex',
    flexWrap: 'wrap'
}));

export const Image = styled('img')(({theme}) => ({
    width: '100%',
    height: 'auto'
}));

export const DescriptionContainer = styled('div')({
});

export const Header = styled(Typography)(({theme}) => ({
    textOverflow: 'ellipsis'
})) as typeof Typography;

export const Author = styled(Typography)(({theme}) => ({
    textOverflow: 'ellipsis'
})) as typeof Typography;

export const Pages = styled(Typography)(({theme}) => ({
    // textOverflow: 'ellipsis'
})) as typeof Typography;