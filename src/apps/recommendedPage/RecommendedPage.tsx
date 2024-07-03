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
    // Section, 
    Span,
    CardsContainer,
    HeaderContainer,
    Header,
    MenuIconWrapper,
    ContainerForm,
    FormHeader
} from "./styled";
import { Icon } from "../../components/icon/Icon";
import { RecommendedBooks } from "../../components/recommendedBooks/RecommendedBooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooksError, selectRecommendedBooks } from "../../redux/books/selectors";
import { useEffect, useState } from "react";
import { ErrorModal } from "../../components/errorModal/ErrorModal";
import * as Yup from 'yup';
import { Form } from "../../components/form/Form";
import { theme } from "../../styles/themes";
import { Box } from "@mui/system";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksGetRecommended } from "../../redux/books/operations";
import { Dashboard } from "../../components/dashboard/Dashboard";

const schema = Yup.object().shape({
    title: Yup
        .string()
        .min(1, 'Book title must be at least 3 characters')
        .max(32, 'Book title must be less than 65 characters'),
    author: Yup
        .string()
        .min(1, 'Author must be at least 7 characters')
        .max(32, 'Author must be less than 65 characters')
});

const inputsDataArr = [
    { type: 'text', name: 'title', placeholder: 'Book title:'},
    { type: 'text', name: 'author', placeholder: 'The author:'}
]

const initialValues = {
    // name: '',
    title: '',
    author: ''
}
interface Request {
    page: number,
    title?: string,
    author?: string,
    limit?: number | null
}

type FormValues = {
    title: number,
    author: number,
}

export const RecommendedPage = () => {
    // const booksError = useSelector(selectBooksError);
    // const booksObj = useSelector(selectRecommendedBooks);
    const booksError = useSelector(selectBooksError);
    const navigate = useNavigate();
    const [isErrorModal, setIsErrorModal] = useState(false);
    const [isRecommendedLoading, setIsRecommendedLoading] = useState(true);
    const handleLinkClick = () => {
        navigate('/library');
    }
    const booksObj = useSelector(selectRecommendedBooks);
    const dispatch = useDispatch<AppDispatch>();
    let req: Request = {
        page: booksObj ? booksObj.page : 1,
        // limit: booksLimit ? booksLimit : 0
        limit: null
    }
    const handleBooksLimit = () => {
        if(window.innerWidth < 768) {
            req.limit = 2;
            // return 2;
        }
        if(window.innerWidth < 1024) {
            req.limit = 8;
            // return 8;
        }
        // if(window.innerWidth <= 1024) {
        //     req.limit = 10;
        //     // return 10;
        // }
        if(window.innerWidth >= 1280) {
            req.limit = 12;
            // return 12;
        }
    }
  
    const handleErrorMessage = () => {
        if(booksError && booksError.response?.status >= 500){
            return 'Server error, please try to reload page.';
        }

        return booksError.response?.data.message;
    }

    const handleNextPageClick = () => {
        if(booksObj){
            if (req.page === booksObj.totalPages) return;
            req.page += 1;
            handleBooksLimit();
            dispatch(booksGetRecommended(req));
        }
        return;
    }

    const handlePreviousPageClick = () => {
        if(booksObj){
            if (req.page === 1) return;
            req.page -= 1 ;
            handleBooksLimit();
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

    const handleSubmit = ( values: FormValues) => {
        // console.log('recommended form', values);
        dispatch(booksGetRecommended(values));
    }

    return (
        <Container>
            {booksError && booksError.response.status !== 401 && <ErrorModal 
                type='booksError'
                isModalOpen={isErrorModal}
                setIsModalOpen={setIsErrorModal}
                erorrCode={booksError.response?.status}
                errorMessage={handleErrorMessage()}

            />}
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
                            },
                            [theme.breakpoints.up('tablet')]: {
                                minWidth: '46%'
                            },
                            [theme.breakpoints.up('desktop')]: {
                                minWidth: '100%'
                            }
                        }}
                    />
                </ContainerForm>

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
                </>
            </Dashboard>
            
            <CardsContainer>
                <HeaderContainer>
                    <Header>Recommended</Header>
                    <Box sx={{display: 'flex', gap: '8px'}}>
                        <MenuIconWrapper size="small" onClick={() => handlePreviousPageClick()}>
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
                        </MenuIconWrapper>
                        <MenuIconWrapper size="small" onClick={() => handleNextPageClick()}>
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
                        </MenuIconWrapper>
                    </Box>
                </HeaderContainer>
                <RecommendedBooks 
                    booksLimit={req.limit} 
                    isLoading={isRecommendedLoading} 
                    setIsLoading={setIsRecommendedLoading}
                />
            </CardsContainer>
        </Container>
    )
}