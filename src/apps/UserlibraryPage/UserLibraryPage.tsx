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
    ContainerForm,
    ContainerBooks,
    FormHeader
} from "./styled";
import { Filter } from "../../components/filter/Filter";
import { store } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksGetRecommended, booksGetUserBooks } from "../../redux/books/operations";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { 
    selectBooksError, 
    selectBooksIsError, 
    selectRecommendedBooks, 
    // selectRecommendedBooksIDsArr, 
    selectUserBooks, 
    selectUserBooksIDsArr
} from "../../redux/books/selectors";
import { BookCard } from "../../components/bookCard/BookCard";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/icon/Icon";
import { ErrorModal } from "../../components/errorModal/ErrorModal";
import { SelectForm } from "../../components/materialUI/SelectForm";
import { RecommendedBooks } from "../../components/recommendedBooks/RecommendedBooks";
import { Form } from "../../components/form/Form";
import * as Yup from 'yup';
import { theme } from "../../styles/themes";
import { Dashboard } from "../../components/dashboard/Dashboard";

const schema = Yup.object().shape({
    title: Yup
        .string()
        .min(1, 'Book title must be at least 3 characters')
        .max(32, 'Book title must be less than 65 characters'),
    author: Yup
        .string()
        .min(1, 'Author must be at least 7 characters')
        .max(32, 'Author must be less than 65 characters'),
    pages: Yup
        .string()
        .min(1, 'Author must be at least 7 characters')
        .max(32, 'Author must be less than 65 characters')
});

const inputsDataArr = [
    { type: 'text', name: 'title', placeholder: 'Book title:'},
    { type: 'text', name: 'author', placeholder: 'The author:'},
    { type: 'text', name: 'pages', placeholder: 'Number of pages:'}
]

const initialValues = {
    title: '',
    author: '',
    pages: ''
}

type AppDispatch = typeof store.dispatch;

interface Request {
    page: number,
    // title?: string,
    // author?: string,
    limit?: number
}

interface SubmitValues {
    title: string,
    author: string,
    pages: number
}

export const UserLibraryPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recommendedBooks = useSelector(selectRecommendedBooks);
    const userBooks = useSelector(selectUserBooks);
    const userBooksIdArr = useSelector(selectUserBooksIDsArr);
    const isBooksError = useSelector(selectBooksIsError);
    const booksError: any = useSelector(selectBooksError);
    // const recommendedBooksIDs = useSelector(selectRecommendedBooksIDsArr)
    // const booksErrorURL = booksError ? booksError.config.url : null;
    // const booksErrorCode = booksError ? booksError.response.status : null;
    // const booksErrorMessage = booksError ? booksError.response.data.message : null;
    const [isRecommendedLoading, setIsRecommendedLoading] = useState(true);
    const navigate = useNavigate();
    const [filterData, setFilterData] = useState<any>({
        title: '',
        author: '',
        totalPages: ''
    });
    const [isErrorModal, setIsErrorModal] = useState(false);
    
    let request: Request = {
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

    const isBooksErrorMemo = useMemo(() => {
        return isBooksError;
    }, [userBooksIdArr]);

    useEffect(()=>{
        if (!isErrorModal){}
        if(!booksError && (!recommendedBooks || recommendedBooks.results.length !== 3)) {
            const randomPage = Math.floor(Math.random() * 9);
            request.page = randomPage;
            dispatch(booksGetRecommended(request)).then((res:any) => {
                if(res.meta.requestStatus === 'fulfilled') setIsRecommendedLoading(false);
            });
        };
        
        if(!booksError && userBooks === null && userBooksMemo === null){
            setTimeout(() => {
                console.log('useEffect books', userBooks);
                console.log('useEffect memo', userBooksMemo);
                dispatch(booksGetUserBooks(null));
            }, 1000);
        };
        
        if(booksError) {
            // if( booksErrorCode === 500
            //     && booksErrorURL === "/books/6550a7da6a35493225696509"
            //     && booksErrorMessage === "Cannot read properties of undefined (reading 'toString')"
            // ) {
            //     setIsErrorModal(true);
            // }
            console.log('isErrorMemo', isBooksErrorMemo)
            setIsErrorModal(true)
        }

    }, [filterData, booksError, request, recommendedBooks, dispatch, isBooksErrorMemo]);

    const handleLinkClick = () => {
        navigate('/recommended');
    }

    const shouldCardRender = (book: any) => {
        const {title, author, pages} = filterData;
        const regexFn = (inputVal: any): any => {
            return new RegExp(inputVal, 'i');
        }

        if(!title && !author && !pages){
            return true;
        }

        if(title.length !== 0 && book.title.search(regexFn(`${title}`)) === -1){
            return false;
        }
        if (author.length !== 0 && book.author.search(regexFn(`${author}`)) === -1){
            return false;
        }
        if (pages.length !== 0 && `${book.totalPages.trim()}`.search(regexFn(`${pages}`)) === -1){
            return false;
        }
        
        return true;
        // if(totalPages) {
        //     console.log(`${book.totalPages}`.includes(totalPages))
        // }
    }
    
    // const handleErrorMessage = () => {
    //     if(booksError && booksError.response?.status >= 500
    //     ){
    //         // console.log('500 error', booksErrorMessage)
    //         if(booksErrorURL.includes('/books/')
    //             && booksErrorMessage === "Cannot read properties of undefined (reading 'toString')"
    //         ) {
    //             console.log('500 undefined');
    //             return 'Book is not in your library.';
    //         }
    //         return 'Server error, please try to reload page.';
    //     }

    //     return booksError.response?.data.message;
    // }
    
    const handleErrorMessage = () => {
        if(booksError && booksError.response?.status >= 500){
            return 'Server error, please try to reload page.';
        }

        return booksError.response?.data.message;
    }

    const handleSubmit = (values: SubmitValues, {resetForm}: any) => {
        setFilterData(values);
        resetForm();
    }

    return <Container>
        {booksError && booksError.response.status !== 401 && <ErrorModal 
            type='booksError'
            isModalOpen={isErrorModal}
            setIsModalOpen={setIsErrorModal}
            erorrCode={booksError.response?.status}
            errorMessage={handleErrorMessage()}
        />}
        <Suspense>
        <Dashboard>
            <>
                <ContainerForm>
                    <FormHeader>Filter:</FormHeader>
                    <Form
                        initialValues={initialValues}
                        validationSchema={schema}
                        inputsDataArr={inputsDataArr}
                        handleSubmit={handleSubmit}
                        submitName="Apply"
                        sx={{
                            '& .MuiBox-root:last-of-type': {
                                marginTop: '20px',
                                
                                [theme.breakpoints.up('tablet')]:{
                                    marginTop: '38px',
                                },
                                [theme.breakpoints.up('desktop')]:{
                                    marginTop: '20px',
                                },
                            },
                        }}
                    />
                </ContainerForm>

                <ContainerRecommended sx={{}}>
                    <Header variant="h2">Recommended books</Header>
                    <ContainerFilterCards>
                        {!isRecommendedLoading && <RecommendedBooks 
                            booksLimit={3} 
                            isLoading={isRecommendedLoading}
                            setIsLoading={setIsRecommendedLoading}
                            sx={{
                            '&':{
                                gap: '20px',
                            },
                            '& .MuiBox-root':{
                                width: '71px',
                                '& img': {
                                    height: '107px'
                                },
                                '& h3': {
                                    fontSize: '10px',
                                    lineHeight: '12px',
                                },
                            }
                        }}/>}
                    </ContainerFilterCards>
                    <ContainerLinks>
                        <LinkButton onClick={handleLinkClick}>Home</LinkButton>
                        <IconWrapper onClick={handleLinkClick} >
                            <Icon iconName={'#icon-arrow-right'} sx={{width: '24px', height: '24px'}}/>
                        </IconWrapper>
                    </ContainerLinks>
                </ContainerRecommended>
            </>
        </Dashboard>
        </Suspense>
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