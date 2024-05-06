import { Box, IconButton } from "@mui/material"
import { Header, HeaderContainer, IconWrapper } from "./styled"
import { Icon } from "../icon/Icon"

export const RecommendedBooks = () => {
    return <HeaderContainer>
        <Header>Recommended</Header>
        <Box sx={{display: 'flex', gap: '8px'}}>
            <IconWrapper size="small">
                <Icon iconName={'#icon-chevron-left'} sx={{
                    width: '12px', 
                    height: '12px', 
                    stroke: '#fff',
                    position: 'absolute',
                    left: '9px'
                    // color: '#fff'
                }}></Icon>
            </IconWrapper>
            <IconWrapper size="small">
                <Icon iconName={'#icon-chevron-right'} sx={{
                    width: '12px', 
                    height: '12px', 
                    stroke: '#fff',
                    position: 'absolute',
                    left: '10px'
                }}></Icon>
            </IconWrapper>
        </Box>

        
    </HeaderContainer>
}