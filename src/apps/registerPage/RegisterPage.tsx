import styled from "@emotion/styled";
import Button from '@mui/material/Button';

const theme = { 
    color: 'rgb(200,200,150)',
    color2: 'green',
    alert: 'red'
}

export const RegisterPage = () => {
    
    const StyledP = styled('p')`
        color: red;
        &:hover {
            background-color: grey;
        }
    `

    return (
        <div>
            <p>Register Page</p>
            <StyledP>StyledP</StyledP>
            <Button variant="contained">Hello</Button>
            <p>👍</p>

        </div>
    )
}