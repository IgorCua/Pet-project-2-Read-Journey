import { IconButton, List, ListItem } from "@mui/material"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { Filter } from "../../components/filter/Filter"
import { Container, DescripotionList, LinkButton, ListHeader, ListItemHeader, NumberDiv, Section, Span } from "./styled"
import { Icon } from "../../components/icon/Icon"

export const RecommendedPage = () => {
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
                        <ListItemHeader>
                            Create a personal library: <Span>add the books you intend to read to it.</Span>
                        </ListItemHeader>
                    </ListItem>
                    <ListItem>
                        <NumberDiv><p>2</p></NumberDiv>
                        <ListItemHeader>
                            Create your first workout: <Span>define a goal, choose a period, start training.</Span>
                        </ListItemHeader>
                    </ListItem>
                    <ListItem>
                        <LinkButton>My library</LinkButton>
                        <IconButton size="small" sx={{padding: '0'}}>
                            <Icon iconName={'#icon-arrow-right'} sx={{width: '24px', height: '24px'}}/>
                        </IconButton>
                    </ListItem>
                </DescripotionList>
            </Section>
            <Section>
            </Section>
        </Container>
    )
}