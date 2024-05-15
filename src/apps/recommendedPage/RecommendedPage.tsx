import { IconButton, List, ListItem } from "@mui/material"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { Filter } from "../../components/filter/Filter"
import { Container, DescripotionList, IconWrapper, LinkButton, ListHeader, ListItemText, NumberDiv, Section, Span } from "./styled"
import { Icon } from "../../components/icon/Icon"
import { RecommendedBooks } from "../../components/recommendedBooks/RecommendedBooks"
import { useNavigate } from "react-router-dom"

export const RecommendedPage = () => {
    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('/library');
    }

    return (
        <Container>
            <Section>
                <Filter/>
                <DescripotionList>
                    <ListItem>
                        <ListHeader>
                            Start your workout
                        </ListHeader>
                    </ListItem>
                    <ListItem>
                        <NumberDiv><p>1</p></NumberDiv>
                        <ListItemText>
                            Create a personal library: <Span>add the books you intend to read to it.</Span>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <NumberDiv><p>2</p></NumberDiv>
                        <ListItemText>
                            Create your first workout: <Span>define a goal, choose a period, start training.</Span>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <LinkButton onClick={handleLinkClick}>My library</LinkButton>
                        <IconWrapper onClick={handleLinkClick} size="small" sx={{padding: '0'}}>
                            <Icon iconName={'#icon-arrow-right'} sx={{width: '24px', height: '24px'}}/>
                        </IconWrapper>
                    </ListItem>
                </DescripotionList>
            </Section>
            
            <Section>
                <RecommendedBooks/>
            </Section>
        </Container>
    )
}