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
    CustomInput, 
    MyReadingContainer, 
    MyReadingHeader, 
    Submit, 
    Text 
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
    // const isBooksError = useSelector(selectBooksIsError);
    const [isErrorModal, setIsErrorModal] = useState(false);

    // const handleSubmit = (event: React.FormEvent<any>) => {
    const handleSubmit = (values: FormValues, {resetForm}: any) => {
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
            console.log('useEffect bookInfo');
            // console.log(bookInfo.progress[bookInfo.progress.length - 1].status);
            if (progressLastData && progressLastData.status === 'active'){
                console.log('active');
                setIsReading(true);
            }
        }
    }, [bookInfo]);

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
        <Container component='section'>
            <Dashboard sx={{gap: '40px'}}>
                <>
                    {!isReading && <Form
                        initialValues={initialValuesStart}
                        validationSchema={schemaStart}
                        handleSubmit={handleSubmit}
                        inputsDataArr={pageStartData}
                        submitName={'Start'}
                        sx={{
                            gap: '20px'
                        }}
                    />}

                    {isReading && <Form
                        initialValues={initialValuesEnd}
                        validationSchema={schemaEnd}
                        handleSubmit={handleSubmit}
                        inputsDataArr={pageEndData}
                        submitName={'Stop'}
                        sx={{
                            gap: '20px'
                        }}
                    />}
                    
                    {bookInfo?.progress.length !== 0 && <Progress/>}

                    {bookInfo?.progress.length === 0 && <ContainerStats component={'section'}>
                        <ContainerNoStats>
                            <Header variant="h2">Progress</Header>
                            {/* <ImageContainer> */}
                            {/* <Image 
                                🌟
                            /> */}
                            {/* </ImageContainer> */}
                            <Text component='p' sx={{
                                marginBottom: '20px'
                            }}>
                                Here you will see when and how much you read. To record, click on the red button above.
                            </Text>
                            <Box component={'div'} sx={{
                                padding: '22px 24px',
                                width: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',

                                backgroundColor: theme.palette.custom.bg2,

                                borderRadius: '50%'
                            }}>
                                <Text component={'p'} sx={{
                                    fontSize: '34px',
                                    lineHeight: '34px',
                                }}>🌟</Text>
                            </Box>
                        </ContainerNoStats>
                    </ContainerStats>}
                </>
            </Dashboard>
            
            <MyReadingContainer>
                <MyReadingHeader>My reading</MyReadingHeader>
                
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
                        '& img':{
                            cursor: 'auto',
                        },
                        '& h3': {
                            textWrap: 'wrap'
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
                            borderRadius: '3px'
                        }}/>
                    }
                </CircleOutside>
            </MyReadingContainer>
        </Container>
    </>
}