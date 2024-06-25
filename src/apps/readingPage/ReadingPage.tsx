import { useEffect, useState } from "react"
import { Dashboard } from "../../components/dashboard/Dashboard"
import { FormTextField } from "../../components/materialUI/FormTextField"
import { 
    CircleInside, 
    CircleOutside, 
    Container, 
    ContainerNoStats, 
    ContainerStats, 
    // Form, 
    FormHeader, 
    Header, 
    MyReadingContainer, 
    MyReadingHeader, 
    Text, 
    MyReadingHeaderContainer,
    MyReadingTimeLeft,
    FormContainer
} from "./styled";
import { Box, Input, InputAdornment, InputBase, TextField, TextFieldProps } from "@mui/material"
import { theme } from "../../styles/themes"
// import { borderRadius, display, maxWidth, textAlign } from "@mui/system"
import { BookCard } from "../../components/bookCard/BookCard"
import { useSelector } from "react-redux"
import { selectBookInfo, selectBooksError, selectBooksIsError } from "../../redux/books/selectors"
import { useDispatch } from "react-redux"
import { booksSaveEndOfReading, booksSaveReadingStart } from "../../redux/books/operations"
import { store } from "../../redux/store"
import { ErrorModal } from "../../components/errorModal/ErrorModal"
import { Icon } from "../../components/icon/Icon";
import { Form } from "../../components/form/Form";
import * as Yup from 'yup';
import { Progress } from "../../components/progress/Progress";

const schemaStart = Yup.object().shape({
    pageStart: Yup
        .number()
        .min(1, 'Page number must be at least 1 character')
        .max(1000, 'Page number must be less than 6 characters')
        .required('Page number is a required field'),
});

const schemaEnd = Yup.object().shape({
    pageEnd: Yup
        .number()
        .min(1, 'Page number must be at least 1 character')
        .max(1000, 'Page must be less than 5 characters')
        .required('Page is a required field'),
});

const initialValuesStart = {
    pageStart: '',
}

const initialValuesEnd = {
    pageEnd: ''
}

const pageStartData = [
    {type: 'text', name: 'pageStart', placeholder: 'Page number:'},
]

const pageEndData = [{
    type: 'text',
    name: 'pageEnd',
    placeholder: 'Page number:',
}];

type FormValues = {
    pageStart?: number,
    pageEnd?: number
}

type AppDispatch = typeof store.dispatch;

export const ReadingPage = () => {
    const [isReading, setIsReading] = useState(false);
    const bookInfo = useSelector(selectBookInfo);
    const progressLastData = bookInfo && bookInfo.progress[bookInfo.progress.length - 1];
    const dispatch = useDispatch<AppDispatch>();

    const booksError = useSelector(selectBooksError);
    const isBooksError = useSelector(selectBooksIsError);
    const [isErrorModal, setIsErrorModal] = useState(false);

    // const handleSubmit = (event: React.FormEvent<any>) => {
    const handleSubmit = (values: FormValues) => {
        // event.preventDefault();
        const {pageStart, pageEnd} = values;

        if(pageStart && bookInfo){ 
            if(pageStart >= 0 && isReading === false){
                    dispatch(booksSaveReadingStart({
                    id: bookInfo?._id,
                    page: pageStart
                }));
            }
        }
        if(pageEnd && bookInfo){ 
            if(pageEnd >= 0 && isReading === true){
                    dispatch(booksSaveEndOfReading({
                    id: bookInfo?._id,
                    page: pageEnd
                }));
            }
        }
        
        // console.log(event!.currentTarget!.elements[0].value as HTMLInputElement)
        setIsReading(!isReading);
        // event.target.reset();
    }

    useEffect(()=>{
        if(bookInfo && bookInfo.progress.length > 0){
            // console.log('useEffect bookInfo');
            // console.log(bookInfo.progress[bookInfo.progress.length - 1].status);
            if (progressLastData && progressLastData.status === 'active'){
                // console.log('active');
                setIsReading(true);
            }
        };
        if(isBooksError){
            setIsErrorModal(true);
        }
    }, [bookInfo, isBooksError]);

    const handleErrorMessage = () => {
        if(booksError && booksError.response?.status >= 500){
            return 'Server error, please try to reload page.';
        }

        return booksError.response?.data.message;
    }
    
    return <> 
        {booksError && booksError.response.status !== 401 && <ErrorModal 
            type='booksError'
            isModalOpen={isErrorModal}
            setIsModalOpen={setIsErrorModal}
            erorrCode={booksError.response?.status}
            errorMessage={handleErrorMessage()}
        />}
        <Container component='div'>
            <Dashboard sx={{
                gap: '40px',
                [theme.breakpoints.up('tablet')]: {
                    // padding: '32px 16px 16px 32px'
                    padding: '32px',
                    gap: '40px'
                },
                [theme.breakpoints.up('desktop')]: {
                    padding: '32px 20px 20px 20px',
                    minWidth: '353px',
                    gap: '40px',
                }
            }}>
                <>
                    <FormContainer>
                        <FormHeader>{isReading ? 'Stop page:' : 'Start page:'}</FormHeader>
                        {!isReading && <Form
                            initialValues={initialValuesStart}
                            validationSchema={schemaStart}
                            handleSubmit={handleSubmit}
                            inputsDataArr={pageStartData}
                            submitName={'Start'}
                            sx={{
                                gap: '20px',
                            }}
                        />}

                        {isReading && <Form
                            initialValues={initialValuesEnd}
                            validationSchema={schemaEnd}
                            handleSubmit={handleSubmit}
                            inputsDataArr={pageEndData}
                            submitName={'Stop'}
                            sx={{
                                gap: '20px',
                            }}
                        />}
                    </FormContainer>

                    
                    {bookInfo?.progress.length !== 0 && <Progress/>}

                    {bookInfo?.progress.length === 0 && <ContainerStats component={'section'}>
                        <ContainerNoStats>
                            <Header variant="h2">Progress</Header>
                            <Text component='p' sx={{
                                marginBottom: '20px',
                                [theme.breakpoints.up('tablet')]:{
                                    marginBottom: '50px',
                                },
                                [theme.breakpoints.up('desktop')]:{
                                    marginBottom: '60px',
                                }
                            }}>
                                Here you will see when and how much you read. To record, click on the red button above.
                            </Text>
                            <Box component={'div'} sx={{
                                height: '80px',
                                width: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',

                                backgroundColor: theme.palette.custom.bg2,

                                borderRadius: '50%',
                                [theme.breakpoints.up('tablet')]:{
                                    marginBottom: '60px',
                                    // padding: '22px 24px',
                                    width: '100px',
                                    height: '100px'
                                }
                            }}>
                                <Text component={'p'} sx={{
                                    fontSize: '34px',
                                    lineHeight: '34px',
                                    [theme.breakpoints.up('tablet')]:{
                                        fontSize: '50px',
                                        lineHeight: '70px',
                                    }
                                }}>🌟</Text>
                            </Box>
                        </ContainerNoStats>
                    </ContainerStats>}
                </>
            </Dashboard>
            
            <MyReadingContainer>
                <MyReadingHeaderContainer>
                    <MyReadingHeader>My reading</MyReadingHeader>
                    <MyReadingTimeLeft>
                        {bookInfo?.timeLeftToRead && `${bookInfo?.timeLeftToRead?.hours} hours and 
                            ${bookInfo?.timeLeftToRead?.minutes} minutes left`
                        }
                    </MyReadingTimeLeft>
                </MyReadingHeaderContainer>
                
                {bookInfo && <BookCard
                    cardType="recommended"
                    id={bookInfo._id}
                    url={bookInfo.imageUrl}
                    title={bookInfo.title}
                    author={bookInfo.author}
                    isModal={false}
                    sx={{
                        marginBottom: '20px',
                        textAlign: 'center',
                        justifyContent: 'center',
                        [theme.breakpoints.up('tablet')]: {
                            maxWidth: '320px',
                        },
                        [theme.breakpoints.up('desktop')]: {
                            // maxWidth: '224px',
                        },
                        '& img':{
                            cursor: 'auto',
                            [theme.breakpoints.up('tablet')]: {
                                height: '256px',
                                width: '169px',
                            },
                            [theme.breakpoints.up('desktop')]: {
                                height: '340px',
                                width: '224px',
                            },
                        },
                        '& h3': {
                            textWrap: 'wrap',
                            [theme.breakpoints.up('tablet')]: {
                                marginBottom: '4px',
                                overflow: 'visible',

                                fontSize: '20px',
                                lineHeight: '20px'
                            },
                        },

                        '& p':{
                            [theme.breakpoints.up('tablet')]: {
                                fontSize: '14px',
                                lineHeight: '18px'
                            },
                        },

                        '&:hover':{
                            cursor: 'auto',
                            '& img':{
                                boxShadow: `none`,
                            },
                            '& div':{
                                cursor: 'auto',
                                boxShadow: `none`,
                            }
                        },
                    }}
                />}

                <CircleOutside>
                    {!isReading  
                        ? <CircleInside/>
                        : <CircleInside sx={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '3px',
                            [theme.breakpoints.up('tablet')]: {
                                width: '20px',
                                height: '20px',
                                borderRadius: '3px',
                            },
                        }}/>
                    }
                </CircleOutside>
            </MyReadingContainer>
        </Container>
    </>
}