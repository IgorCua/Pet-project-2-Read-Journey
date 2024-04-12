// import styled from "@emotion/styled";
import { styled } from "@mui/material";
import Button from '@mui/material/Button';

export const RegisterPage = () => {
    
    const StyledP = styled('p')`
        color: red;
        &:hover {
            background-color: grey;
        }
    `
    const ThemedP = styled('p')(({ theme }) => ({
        color: 'black',
        textTransform: 'none',
        // backgroundColor: 'grey',
        '&:hover': {
            // backgroundColor: 'yellow'
            backgroundColor: theme.palette.custom.utilGreen
        }
    }));

    const CustomButton = styled(Button)(({ theme }) => ({
        color: 'black',
        textTransform: 'none',
        // backgroundColor: 'grey',
        '&:hover': {
            // backgroundColor: 'yellow'
            backgroundColor: theme.palette.custom.utilBlue
        }
    })) as typeof Button;

    return (
        <div>
            <p>Register Page</p>
            <StyledP>StyledP</StyledP>
            <ThemedP>Themed text</ThemedP>
            <Button>Registration</Button>
            <p>👍</p>
            <CustomButton disableElevation={true}>CustomButton</CustomButton>
        </div>
    )
}