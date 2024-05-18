import styled from "@emotion/styled";

const StyledP = styled('p')`
    color: red;
    &:hover {
        background-color: grey;
    }
`

export const UserLibraryPage = () => {
    return (
        <div>
            <p>Library Page</p>
            <StyledP>Hello</StyledP>
        </div>
    )
}