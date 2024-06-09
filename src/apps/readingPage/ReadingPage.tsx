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
import { borderRadius, display, maxWidth, textAlign } from "@mui/system"
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

type AppDispatch = typeof store.dispatch;

const schemaStart = Yup.object().shape({
    pageStart: Yup
        .number()
        .min(1, 'Page number must be at least 1 character')
        .max(5, 'Page number must be less than 6 characters')
        .required('Page number is a required field'),
});

const schemaEnd = Yup.object().shape({
    pageEnd: Yup
        .number()
        .min(1, 'Page number must be at least 1 character')
        .max(64, 'Page must be less than 5 characters')
        .required('Page is a required field'),
});

const initialValuesStart = {
    pageStart: '',
    password: ''
}

const initialValuesEnd = {
    pageEnd: ''
}

export const ReadingPage = () => {
    const [isReading, setIsReading] = useState(false);
    const bookInfo = useSelector(selectBookInfo);
    const progressLastData = bookInfo && bookInfo.progress[bookInfo.progress.length - 1];
    const dispatch = useDispatch<AppDispatch>();

    const booksError = useSelector(selectBooksError);
    const isBooksError = useSelector(selectBooksIsError);
    const [isErrorModal, setIsErrorModal] = useState(false);
    const [isEyeOpen, setIsEyeOpen] = useState(false);

    const pageStartData = [{
        type: 'text',
        name: 'pageStart',
        placeholder: 'Page number:',
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password:',
    },
    ]
    const pageEndData = [{
        type: 'text',
        name: 'pageEnd',
        placeholder: 'Page number:',
    }]

    const handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
        const inputValue = event.currentTarget.elements[0].value;
        
        console.log(event.currentTarget.elements[0].value);

        if(inputValue >= 0 && isReading === false){
            if(bookInfo){
                dispatch(booksSaveReadingStart({
                    id: bookInfo?._id,
                    page: inputValue
                }));
            }
        }
        if(inputValue >= 0 && isReading === true){
            if(bookInfo){
                dispatch(booksSaveEndOfReading({
                    id: bookInfo?._id,
                    page: inputValue
                }));
            }
        }
        // console.log(event.target.elements[0].value as HTMLInputElement)
        // const inputValue = (event!.target.elements[0] as HTMLInputElement)!.value;
        // console.log(inputValue)
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
                    <Form
                        initialValues={initialValuesStart}
                        validationSchema={schemaStart}
                        handleSubmit={handleSubmit}
                        inputsDataArr={pageStartData}
                        submitName={'Start'}
                        sx={{
                            gap: '20px'
                        }}
                    />
                    {/* <Form action="" onSubmit={handleSubmit}>
                        <FormHeader>Stop page:</FormHeader>
                            <TextField
                                // error
                                id="outlined-error"
                                // label="Error"
                                variant="outlined"
                                InputProps={{
                                    startAdornment:
                                    <InputAdornment 
                                        position="start"
                                    >Page number:</InputAdornment>,
                                
                                    endAdornment: renderEyeIcon()
                                }}
                            />
                           
                        <Submit type="submit">
                            {!isReading ? 'Start' : 'Stop'}
                        </Submit>
                    </Form> */}
                    {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl> */}
                    <ContainerStats component={'section'}>
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
                    </ContainerStats>
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