import { Box, IconButton } from "@mui/material"
import { CardsContainer, Header, HeaderContainer, IconWrapper } from "./styled"
import { Icon } from "../icon/Icon"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectRecommendedBooks } from "../../redux/books/selectors"
import { useDispatch } from "react-redux"
import { store } from "../../redux/store"
import { booksGetRecommended } from "../../redux/books/operations"
import { BookCard } from "../bookCard/BookCard"
import { theme } from "../../styles/themes"

type AppDispatch = typeof store.dispatch;

type Request = {
    title?: string,
    author?: string,
    page?: string | number,
    limit?: string | number
}

export const RecommendedBooks = () => {
    const booksObj = useSelector(selectRecommendedBooks);
    const dispatch = useDispatch<AppDispatch>();
    let req: Request = {}

    useEffect(()=>{
        if(!booksObj) {
            if(window.innerWidth < 768) {
                req.limit = 2;
                dispatch(booksGetRecommended(req));
                // event.target.reset();
                return
            }
            if(window.innerWidth < 1024) {
                req.limit = 8;
                dispatch(booksGetRecommended(req));
                // event.target.reset();
                return
            }
            if(window.innerWidth >= 1024) {
                req.limit = 10;
                dispatch(booksGetRecommended(req));
                // event.target.reset();
                return
            }
        }
    });

    const handleNextPageClick = () => {

    }

    const handlePreviousPageClick = () => {

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
    return <>
        <HeaderContainer>
            <Header>Recommended</Header>
            <Box sx={{display: 'flex', gap: '8px'}}>
                <IconWrapper size="small" onClick={handlePreviousPageClick}>
                    <Icon iconName={'#icon-chevron-left'} sx={{
                        width: '12px', 
                        height: '12px', 
                        stroke: handleIconPreviousColor(),
                        position: 'absolute',
                        left: '9px'
                        // color: '#fff'
                    }}></Icon>
                </IconWrapper>
                <IconWrapper size="small" onClick={handleNextPageClick}>
                    <Icon iconName={'#icon-chevron-right'} sx={{
                        width: '12px', 
                        height: '12px', 
                        stroke: handleIconNextColor(),
                        position: 'absolute',
                        left: '10px'
                    }}></Icon>
                </IconWrapper>
            </Box>
        </HeaderContainer>
        <CardsContainer>
            {booksObj && booksObj.results.map((book, i)=>{
                return <BookCard 
                    key={i}
                    cardType="recommended" 
                    url={book.imageUrl}
                    title={book.title}
                    author={book.author}
                />
            })}
        </CardsContainer>
    </>
}