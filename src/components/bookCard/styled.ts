import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')(({theme}) => ({
    // minWidth:'112px',
    // maxWidth: '137px',
    width: '137px',
    display: 'flex',
    flexWrap: 'wrap'
}));

export const Image = styled('img')(({theme}) => ({
    marginBottom: '8px',
    width: '100%',
    height: '208px',
    // maxHeight: '208px'

    borderRadius: '8px'
}));

export const DescriptionContainer = styled('div')({
    overflow:'hidden',
    textOverflow: 'ellipsis'
});

export const Header = styled(Typography)(({theme}) => ({
    // overflow:'hidden',
    // textOverflow: 'ellipsis'
    marginBottom: '2px',

    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '700',
    color: theme.palette.custom.textMain
})) as typeof Typography;

export const Author = styled(Typography)(({theme}) => ({
    // textOverflow: 'ellipsis'
    fontSize: '10px',
    lineHeight: '12px',
    fontWeight: '500',
    color: theme.palette.custom.textSecondary
})) as typeof Typography;

export const Pages = styled(Typography)(({theme}) => ({
    // textOverflow: 'ellipsis'
})) as typeof Typography;