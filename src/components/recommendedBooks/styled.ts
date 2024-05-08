import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderContainer = styled('div')(({theme}) => ({
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',

    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',

    color: theme.palette.custom.textMain
}));

export const Header = styled('h3')(({theme}) => ({

}));

export const IconWrapper = styled(IconButton)(({theme}) => ({
    padding: '0',
    width: '32px',
    height: '32px',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: theme.palette.custom.bg1,

    border: `1px solid ${theme.palette.custom.buttonBorderGrey}`
})) as typeof IconButton;

export const CardsContainer = styled('div')({
    display: 'flex',
    gap: '20px',
    justifyContent: 'center'
});
