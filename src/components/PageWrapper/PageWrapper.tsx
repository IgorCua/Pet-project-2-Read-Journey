import React from "react";
import { WrapperDiv } from "./styled";

type Props = {
    sx?: Object,
    children?: React.ReactNode
}

export const PageWrapper = ({sx, children}: Props) => {
    return <WrapperDiv style={sx}>
        {children}
    </WrapperDiv>
}