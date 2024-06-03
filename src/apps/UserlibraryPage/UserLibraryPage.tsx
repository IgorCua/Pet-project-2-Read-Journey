import { 
    Container, 
    ContainerFilterCards, 
    ContainerRecommended, 
    ContainerLinks, 
    Header, 
    IconWrapper, 
    LinkButton,
    ContainerMyLibrary,
    ImageContainer,
    Image,
    ImageText,
    ImageSpan,
    ContainerEmptyLibrary,
    LibraryHeaderContainer,
    LibraryHeader,
    // LibrarySelect,
    ContainerFilter,
    ContainerBooks
} from "./styled";
import { Filter } from "../../components/filter/Filter";
import { store } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksGetRecommended, booksGetUserBooks } from "../../redux/books/operations";
import { memo, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { 
    selectBooksError, 
    selectBooksIsError, 
    selectRecommendedBooks, 
    selectRecommendedBooksIDsArr, 
    selectUserBooks 
} from "../../redux/books/selectors";
import { BookCard } from "../../components/bookCard/BookCard";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/icon/Icon";
import { ErrorModal } from "../../components/errorModal/ErrorModal";
import { SelectForm } from "../../components/materialUI/SelectForm";
import { theme } from "../../styles/themes";

type AppDispatch = typeof store.dispatch;

interface Request {
    page: number,
    // title?: string,
    // author?: string,
    limit?: number
}

export const UserLibraryPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recommendedBooks = useSelector(selectRecommendedBooks);
    const userBooks = useSelector(selectUserBooks);
    const isBooksError = useSelector(selectBooksIsError);
    const booksError: any = useSelector(selectBooksError);
    const recommendedBooksIDs = useSelector(selectRecommendedBooksIDsArr)
    
    const navigate = useNavigate();
    const [filterData, setFilterData] = useState<any>({
        title: null,
        author: null,
        totalPages: null
    });
    const [isErrorModal, setIsErrorModal] = useState(false);
    
    let request = {
        limit: 3,
        page: 1
    }
    
    const userBooksMemo = useMemo(() => {
        const result = userBooks;
        if(userBooks){
            return result;
        }
        return null;
    }, [userBooks]);

    // const RecommendedMemo = useMemo(() => {
    //     return recommendedBooks ? recommendedBooks : null;
    // }, [recommendedBooks]);

    useEffect(()=>{
        if(!booksError && (!recommendedBooks || recommendedBooks.results.length !== 3)) {
            const randomPage = Math.floor(Math.random() * 9);
            request.page = randomPage;
            dispatch(booksGetRecommended(request));
        };
        
        if(!booksError && userBooks === null && userBooksMemo === null){
            setTimeout(() => {
                console.log('useEffect books', userBooks);
                console.log('useEffect memo', userBooksMemo);
                dispatch(booksGetUserBooks(null));
            }, 1000);
        };
        
        if(booksError) {
            setIsErrorModal(true);
        }

    }, [filterData, booksError, request, recommendedBooks, dispatch]);

    const handleLinkClick = () => {
        navigate('/recommended');
    }

    console.log('booksError', booksError);
    console.log('filterData', filterData);

    const shouldCardRender = (book: any) => {
        const {title, author, totalPages} = filterData;
                    
        const regexFn = (inputVal: any): any => {
            return new RegExp(inputVal, 'i');
        }

        if(!title && !author && !totalPages){
            return true;
        }

        if(title.length !== 0 && book.title.search(regexFn(`${title}`)) === -1){
            return false;
        }
        if (author.length !== 0 && book.author.search(regexFn(`${author}`)) === -1){
            return false;
        }
        if (totalPages.length !== 0 && `${book.totalPages}`.search(regexFn(`${totalPages}`)) === -1){
            return false;
        }
        return true;
        // if(totalPages) {
        //     console.log(`${book.totalPages}`.includes(totalPages))
        // }
    }
    
    const handleErrorMessage = () => {
        if(booksError && booksError.response?.status === 500){
            return 'Server error, please try to reload page.';
        }

        return booksError.response?.data.message;
    }
    
    return <Container>
        {booksError && <ErrorModal 
            type='booksError'
            isModalOpen={isErrorModal}
            setIsModalOpen={setIsErrorModal}
            erorrCode={booksError.response?.status}
            errorMessage={handleErrorMessage()}
        />}
        <ContainerFilter>
            <Filter 
                numOfInputs={3} 
                requestLimit={3} 
                setFilterData={setFilterData}
                sx={{
                    width: '100%'
                }}
            />
            <ContainerRecommended>
                <Header variant="h2">Recommended books</Header>
                <ContainerFilterCards>
                    {recommendedBooks && recommendedBooks.results.map((book, i) => {
                        return <BookCard 
                            key={i}
                            id={book._id}
                            cardType="recommended"
                            title={book.title}
                            author={book.author}
                            pages={book.totalPages}
                            url={book.imageUrl}
                            sx={{
                                width: '71px',
                                '& img': {
                                    height: '107px'
                                },
                                '& h3': {
                                    fontSize: '10px',
                                    lineHeight: '12px',
                                },
                                // '& p': {
                                //     fontSize: '10px',
                                //     lineHeight: '12px',
                                // }
                            }}
                        />
                    })}
                </ContainerFilterCards>
                <ContainerLinks>
                    <LinkButton onClick={handleLinkClick}>Home</LinkButton>
                    <IconWrapper onClick={handleLinkClick} >
                        <Icon iconName={'#icon-arrow-right'} sx={{width: '24px', height: '24px'}}/>
                    </IconWrapper>
                </ContainerLinks>
            </ContainerRecommended>
        </ContainerFilter>

        <ContainerMyLibrary>
            <LibraryHeaderContainer>
                <LibraryHeader>My Library</LibraryHeader>
                <SelectForm/>
            </LibraryHeaderContainer>

            {userBooks && userBooks.length !== 0 && <ContainerBooks>
                {userBooks.map((book, i) => {

                    if(shouldCardRender(book)){
                        return <BookCard
                            key={book._id}
                            cardType="library"
                            id={book._id}
                            url={book.imageUrl}
                            title={book.title}
                            author={book.author}
                            pages={book.totalPages}
                            sx={{width: '137px'}}
                        />
                    }

                })}
            </ContainerBooks>}

            {userBooks && userBooks.length === 0 && <ContainerEmptyLibrary>
                <ImageContainer>
                    <Image 
                        alt="books image"
                        src={`${require('../../assets/images/books-1x.png')}`}
                        srcSet={`
                            ${require("../../assets/images/books-1x.png")} 1x,
                            ${require("../../assets/images/books-2x.png")} 2x
                        `}
                    />
                </ImageContainer>
                <ImageText>
                    To start training, add <ImageSpan>some of your books</ImageSpan> or from the recommended ones.
                </ImageText>
            </ContainerEmptyLibrary>}
        </ContainerMyLibrary>
    </Container>
}