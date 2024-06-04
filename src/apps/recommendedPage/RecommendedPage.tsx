import { IconButton, List, ListItem } from "@mui/material";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Filter } from "../../components/filter/Filter";
import { 
    Container, 
    DescripotionList, 
    Figure, 
    Img, 
    FigureSpan, 
    FigureText, 
    IconWrapper, 
    LinkButton, 
    ListHeader, 
    ListItemText, 
    NumberDiv, 
    Section, 
    Span,
    CardsContainer
} from "./styled";
import { Icon } from "../../components/icon/Icon";
import { RecommendedBooks } from "../../components/recommendedBooks/RecommendedBooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooksError, selectRecommendedBooks } from "../../redux/books/selectors";

export const RecommendedPage = () => {
    // const booksError = useSelector(selectBooksError);
    // const booksObj = useSelector(selectRecommendedBooks);
    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('/library');
    }

    const handleBooksLimit = () => {
        if(window.innerWidth < 768) {
            // req.limit = 2;
            return 2;
        }
        if(window.innerWidth < 1024) {
            // req.limit = 8;
            return 8;
        }
        if(window.innerWidth >= 1024) {
            // req.limit = 10;
            return 10;
        }
        if(window.innerWidth > 1280) {
            // req.limit = 12;
            return 12;
        }
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
            
            <CardsContainer>
                <RecommendedBooks booksLimit={handleBooksLimit()}/>
            </CardsContainer>
        </Container>
    )
}