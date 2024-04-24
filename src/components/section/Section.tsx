import React from "react";
import { StyledSection } from "./styled";

type Props = {
    sx?: Object,
    children?: React.ReactNode
}

export const Section = ({sx, children}: Props) => {
    return <StyledSection style={sx}>
        {children}
    </StyledSection>
}