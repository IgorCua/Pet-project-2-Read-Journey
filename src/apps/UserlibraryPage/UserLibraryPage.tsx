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
    LibrarySelect,
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
import { 
    FormControl, 
    MenuItem, 
    Select, 
    SelectChangeEvent 
} from "@mui/material";
import { theme } from "../../styles/themes";
import { ExpandMore } from "@mui/icons-material";
import { ErrorModal } from "../../components/errorModal/ErrorModal";

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
    const [selectedBooks, setSelectedBooks] = useState('');
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

    const RecommendedMemo = useMemo(() => {
        return recommendedBooks ? recommendedBooks : null;
    }, [recommendedBooks]);

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
        
    }, [filterData, booksError, request, recommendedBooks, dispatch]);

    const handleLinkClick = () => {
        navigate('/recommended');
    }

    const handleSelect = (event: SelectChangeEvent) => {
        setSelectedBooks(event.target.value);
        if(!event.target.value) dispatch(booksGetUserBooks(null));
        if(event.target.value) {
            dispatch(booksGetUserBooks({status: event.target.value}));
        };
    }

    // const CardsComponent = memo(() => {
    //     return <ContainerFilterCards>
    //         {recommendedBooks && recommendedBooks.results.map((book, i) => {
    //             return <BookCard 
    //                 key={i}
    //                 id={book._id}
    //                 cardType="recommended"
    //                 title={book.title}
    //                 author={book.author}
    //                 pages={book.totalPages}
    //                 url={book.imageUrl}
    //                 sx={{
    //                     width: '71px',
    //                     '& img': {
    //                         height: '107px'
    //                     },
    //                     '& h3': {
    //                         fontSize: '10px',
    //                         lineHeight: '12px',
    //                     },
    //                     // '& p': {
    //                     //     fontSize: '10px',
    //                     //     lineHeight: '12px',
    //                     // }
    //                 }}
    //             />
    //         })}
    //     </ContainerFilterCards>
    // })
    console.log('booksError', booksError);
    console.log('filterData', filterData);
    return <Container>
        {booksError && <ErrorModal 
            type='booksError'
            isModalOpen={isErrorModal}
            setIsModalOpen={setIsErrorModal}
            erorrCode={booksError && booksError.response?.status}
            errorMessage={booksError && booksError.response?.data.message}
        />}
        <ContainerFilter>
            <Filter numOfInputs={3} requestLimit={3} setFilterData={setFilterData}/>
            <ContainerRecommended>
                <Header>Recommended books</Header>
                {/* <CardsComponent/> */}
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
                <FormControl sx={{ 
                    minWidth: 120,
                    width: '120px',
                    
                }}>
                    <Select
                        value={selectedBooks}
                        onChange={handleSelect}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            padding: '0px',
                            // backgroundColor: theme.palette.custom.bg4,
                            backgroundColor: 'transparent',
                            border: `1px solid ${theme.palette.custom.authInputBorder}`,
                            '.MuiSelect-select': {
                                padding: '12px 0px 12px 14px'
                            },
                            '.MuiSelect-outlined': {

                            },
                            '.MuiSelect-icon':{
                                color: theme.palette.custom.textMain
                            },
                        }}
                        IconComponent={ExpandMore}
                        MenuProps={{
                            PaperProps: {
                              sx: {
                                marginTop: '4px',
                                minHeight: '122px',
                                // overflowx: 'hidden'
                                backgroundColor: theme.palette.custom.bg2,

                                borderRadius: '12px',
                              }
                            },
                            MenuListProps:{
                                sx: {
                                    padding:'14px 0px',
                                    width: '100%',
                                    // paddingTop: '12px',
                                    color: theme.palette.custom.textSecondary,
                                    // overflowx: 'hidden'
                                    
                                    '& li': {
                                        padding: '0px 14px',
                                        // paddingLeft: '5px',
                                        minHeight:'10px',
                                        width: '100%',

                                        fontSize: '12px',
                                        lineHeight: '18px'
                                    },
                                    '& li.Mui-selected': {
                                        color: theme.palette.custom.textMain,
                                        backgroundColor: 'none'
                                    },
                                    '& li:not(:last-child)':{
                                        marginBottom: '7px'
                                    }
                                }
                            },
                            
                        }}
                    >
                        {/* <MenuItem value="">All books</MenuItem> */}
                        <MenuItem value={'unread'}>Unread</MenuItem>
                        <MenuItem value={'in-progress'}>In progress</MenuItem>
                        <MenuItem value={'done'}>Done</MenuItem>
                        <MenuItem value={''}>All books</MenuItem>
                        {/* <MenuItem value={'All books'}sx={{minHeight: '20px'}}>All Books</MenuItem> */}
                    </Select>
                </FormControl>
            </LibraryHeaderContainer>

            {userBooks && userBooks.length !== 0 && <ContainerBooks>
                {userBooks.map((book, i) => {
                    const {title, author, totalPages} = filterData;
                    
                    const regexFn = (inputVal: any): any => {
                        return new RegExp(inputVal, 'i');
                    }
                    
                    if(!title && !author && !totalPages){
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

                    type Key = 'title' | 'author' | 'totalPages';
                    let key: Key;

                    // for(key in filterData){
                        // if(filterData.key !== null) console.log('key', key)
                        // if(filterData[key] && book[key].search(regexFn(title)) !== -1){
                        //     console.log('filter data',filterData[key]);
                        //     // break;
                        //     if(key === 'totalPages'){
                        //         console.log('pass')
                        //     }
                        // }
                    // }

                    // switch (filterData) {
                    //     case !filterData.title:
                    //         console.log('title', title);
                    //         break;
                    //     case filterData.author:
                    //         console.log('author', author);
                    //         break;
                    //     case filterData.totalPages:
                    //         console.log('totalPages', totalPages);
                    //         break;
                    //     default: 
                    //         console.log('default');    
                    // }

                    // if(totalPages && book.totalPages.search(regexFn(`${totalPages}`)) !== -1){
                    //     // console.log(book.title.search(regexFn(title)));
                    //     console.log('filter check data', filterData);
                    //     // console.log('filter check book', book);
                    // }

                    if(totalPages) {
                        console.log(filterData.totalPages.includes(totalPages))
                    }

                    // {
                    //     title: null,
                    //     author: null,
                    //     totalPages: null
                    // }
                    // if(filterData.title !== null){
                    //     console.log('card by title');
                    // }
                    // if(!title && !author && !totalPages){
                    //     return <BookCard
                    //         key={book._id}
                    //         cardType="library"
                    //         id={book._id}
                    //         url={book.imageUrl}
                    //         title={book.title}
                    //         author={book.author}
                    //         pages={book.totalPages}
                    //         sx={{width: '137px'}}
                    //     />
                    // }
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