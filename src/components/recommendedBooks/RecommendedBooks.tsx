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
            return
        }
        if(window.innerWidth < 1024) {
            req.limit = 8;
            return
        }
        if(window.innerWidth >= 1024) {
            req.limit = 10;
            return
        }
    }

    useEffect(()=>{
        if(!booksObj) {
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
            // dispatch(userRefreshToken());
        }
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mjk2NzI3NTkxNDk2NGI0YTdhNTk3YyIsImlhdCI6MTcxNTI3ODUzMCwiZXhwIjoxNzE1MjgyMTMwfQ.EUs2HDRh5sXiIya7nwVlZkNNX3UVWEZutuc7T202Kr0"
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mjk2NzI3NTkxNDk2NGI0YTdhNTk3YyIsImlhdCI6MTcxNTI3ODUzMCwiZXhwIjoxNzE1ODgzMzMwfQ.ksX-ACEQE3uV2j2ra4ekmFA-w-pt3m0d036_T3yayLA"
        return
    }

    const handlePreviousPageClick = () => {
        if(booksObj){
            if (req.page === 1) return;
            req.page -= 1 ;
            handlePageLimit();
            dispatch(booksGetRecommended(req));
        }
        return
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
        return 'hello'
    }

    return <>
        <HeaderContainer>
            <Header>Recommended</Header>
            <Box sx={{display: 'flex', gap: '8px'}}>
                <IconWrapper size="small" onClick={() => handlePreviousPageClick()}>
                    <Icon iconName={'#icon-chevron-left'} sx={{
                        width: '12px', 
                        height: '12px', 
                        stroke: handleIconPreviousColor(),
                        position: 'absolute',
                        left: '9px'
                        // color: '#fff'
                    }}
                    ></Icon>
                </IconWrapper>
                <IconWrapper size="small" onClick={() => handleNextPageClick()}>
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
                    pages={book.totalPages}
                    handleClick={handleCardBackdrop}
                />
            })}
        </CardsContainer>
    </>
}