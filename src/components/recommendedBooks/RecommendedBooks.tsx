import { Box, IconButton } from "@mui/material"
import { CardsContainer, CardsDecorationContainer, Container, Header, HeaderContainer, IconWrapper } from "./styled"
import { Icon } from "../icon/Icon"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectRecommendedBooks } from "../../redux/books/selectors"
import { useDispatch } from "react-redux"
import { store } from "../../redux/store"
import { booksGetRecommended } from "../../redux/books/operations"
import { BookCard } from "../bookCard/BookCard"
import { theme } from "../../styles/themes"
import { userRefreshToken } from "../../redux/auth/operations"

type AppDispatch = typeof store.dispatch;

interface Request {
    page: number,
    title?: string,
    author?: string,
    limit?: number
}

export const RecommendedBooks = () => {
    const booksObj = useSelector(selectRecommendedBooks);
    const dispatch = useDispatch<AppDispatch>();
    let req: Request = {
        page: booksObj ? booksObj.page : 1
    }

    const handlePageLimit = () => {
        if(window.innerWidth < 768) {
            req.limit = 2;
            return;
        }
        if(window.innerWidth < 1024) {
            req.limit = 8;
            return;
        }
        if(window.innerWidth >= 1024) {
            req.limit = 10;
            return;
        }
        if(window.innerWidth > 1280) {
            req.limit = 12;
            return;
        }
    }

    useEffect(()=>{
        // if(!booksObj || booksObj.results.length !== 2) {
        if(!booksObj || booksObj.results.length !== 2) {
            handlePageLimit();
            dispatch(booksGetRecommended(req));
        }
    });

    const handleNextPageClick = () => {
        if(booksObj){
            if (req.page === booksObj.totalPages) return;
            req.page += 1;
            handlePageLimit();
            dispatch(booksGetRecommended(req));
        }
        return;
    }

    const handlePreviousPageClick = () => {
        if(booksObj){
            if (req.page === 1) return;
            req.page -= 1 ;
            handlePageLimit();
            dispatch(booksGetRecommended(req));
        }
        return;
    }

    const handleIconPreviousColor = () => {
        if(booksObj){
            return booksObj.page === 1 
            ? theme.palette.custom.buttonBorderGrey
            : theme.palette.custom.textMain;
        }
        return theme.palette.custom.buttonBorderGrey;
    }

    const handleIconNextColor = () => {
        if(booksObj){
            return booksObj.page === booksObj.totalPages 
            ? theme.palette.custom.buttonBorderGrey
            : theme.palette.custom.textMain;
        }
        return theme.palette.custom.textMain
    }

    const handleCardBackdrop = (title: any) => {
        console.log('bookBackdrop');
        return 'hello';
    }

    return <Container>
        <HeaderContainer>
            <Header>Recommended</Header>
            <Box sx={{display: 'flex', gap: '8px'}}>
                <IconWrapper size="small" onClick={() => handlePreviousPageClick()}>
                    <Icon iconName={'#icon-chevron-left'} sx={{
                        width: '12px',
                        height: '12px',
                        stroke: handleIconPreviousColor(),
                        position: 'absolute',
                        left: '9px',
                        [theme.breakpoints.up('tablet')]: {
                            width: '20px',
                            height: '20px',
                        }
                    }}
                    ></Icon>
                </IconWrapper>
                <IconWrapper size="small" onClick={() => handleNextPageClick()}>
                    <Icon iconName={'#icon-chevron-right'} sx={{
                        width: '12px',
                        height: '12px',
                        stroke: handleIconNextColor(),
                        position: 'absolute',
                        left: '10px',
                        [theme.breakpoints.up('tablet')]: {
                            width: '20px',
                            height: '20px',
                        }
                    }}></Icon>
                </IconWrapper>
            </Box>
        </HeaderContainer>
        <CardsContainer>
            {booksObj && booksObj.results.map((book, i)=>{
                if(window.innerWidth < 768 && i < 2){
                    return <BookCard
                        key={i}
                        id={book._id}
                        cardType="recommended"
                        url={book.imageUrl}
                        title={book.title}
                        author={book.author}
                        pages={book.totalPages}
                        // handleClick={handleCardBackdrop}
                    />
                }
            })}
        </CardsContainer>
    </Container>
}