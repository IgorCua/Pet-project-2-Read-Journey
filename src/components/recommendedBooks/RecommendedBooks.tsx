import { Typography } from "@mui/material";
import { Suspense, lazy, useEffect } from "react";
import { CardsContainer } from "./styled";
import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../redux/books/selectors";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { booksGetRecommended } from "../../redux/books/operations";

const BookCard: React.FC<any> = lazy((): any => 
    import('../bookCard/BookCard')
    .then((module) => ({default: module.BookCard}))
);

type AppDispatch = typeof store.dispatch;

interface Request {
    page: number,
    title?: string,
    author?: string,
    limit?: number
}

type Props = {
    booksLimit?: number | null,
    title?: string,
    isLoading?: boolean,
    setIsLoading?: any
    sx?: {}
}

export const RecommendedBooks = ({booksLimit, isLoading, setIsLoading, sx}: Props) => {
    const booksObj = useSelector(selectRecommendedBooks);
    const dispatch = useDispatch<AppDispatch>();
    // const recommendedIsLoading = useSelector(selectRecommendedIsLoading);

    let req: Request = {
        page: booksObj ? booksObj.page : 1,
        limit: 2
    }

    const handlePageLimit = () => {
        if(window.innerWidth < 768) {
            req.limit = 2;
            return 2;
        }
        if(window.innerWidth < 1024) {
            req.limit = 8;
            return 8;
        }
        if(window.innerWidth <= 1024) {
            req.limit = 10;
            return 10;
        }
        if(window.innerWidth >= 1280) {
            req.limit = 12;
            return 12;
        }
    }

    req.limit = booksLimit ? booksLimit : handlePageLimit();

    useEffect(()=>{
        if(!booksObj && !booksLimit) {
            handlePageLimit();
            dispatch(booksGetRecommended(req)).then((res:any) => {
                if(res.meta.requestStatus === 'fulfilled') setIsLoading(false);
            });
        }

        if((booksObj && booksObj.results.length === 3) && !booksLimit) {
            req.page = 1;
            handlePageLimit();
            dispatch(booksGetRecommended(req)).then((res:any) => {
                if(res.meta.requestStatus === 'fulfilled') setIsLoading(false);
            });
        }
    });

    return <Suspense fallback={<Typography sx={{fontSize: '60px', color: 'white'}}>Loading...</Typography>}>
        {!isLoading && <CardsContainer sx={sx}>
        {/* <CardsContainer sx={sx}> */}
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
                    />
                }
                return <BookCard
                    key={i}
                    id={book._id}
                    cardType="recommended"
                    url={book.imageUrl}
                    title={book.title}
                    author={book.author}
                    pages={book.totalPages}
                />
            })}
        </CardsContainer>}
    </Suspense>

}