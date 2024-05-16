import { IconButton, List, ListItem } from "@mui/material"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { Filter } from "../../components/filter/Filter"
import { Container, DescripotionList, Figure, Img, FigureSpan, FigureText, IconWrapper, LinkButton, ListHeader, ListItemText, NumberDiv, Section, Span } from "./styled"
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
                {window.innerWidth >= 1280 && <Figure>
                    <Img
                        alt="phone image" 
                        src={require('../../assets/images/books-1x.png')} 
                        srcSet={`
                            ${require("../../assets/images/books-1x.png")} 1x, 
                            ${require("../../assets/images/books-2x.png")} 2x
                        `}
                    />
                    <FigureText>
                        "Books are <FigureSpan>windows</FigureSpan> to the world, and reading is a journey into the unknown."
                    </FigureText>
                </Figure>}
            </Section>
            
            <Section>
                <RecommendedBooks/>
            </Section>
        </Container>
    )
}