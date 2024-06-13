// import styled from "@emotion/styled";
// import { Container, styled } from "@mui/material";
// import Button from '@mui/material/Button';
import { PhoneImg } from "../../components/PhoneImg/PhoneImg";
import { Icon } from "../../components/icon/Icon";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { 
    Section, 
    Figure, 
    DecorationContainer,
    Header,
    IconContainer,
    IconHeader,
    Span,
    LinkButton
} from "./styled";
import { store } from "../../redux/store";
import * as Yup from 'yup';
import { Form } from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignup } from "../../redux/auth/operations";
import { theme } from "../../styles/themes";
import { color, fontWeight } from "@mui/system";

interface InitialValuesInterface {
    name: string,
    email: string,
    password: string
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(64, 'Name must be less than 65 characters')
        .required('Name is a required field'),
    email: Yup
        .string()
        .min(3, 'Email must be at least 3 characters')
        .max(64, 'Email must be less than 65 characters')
        .required('Email is a required field')
        .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
            'Email is invalid'
        ),
    password: Yup
        .string()
        .min(7, 'Password must be at least 7 characters')
        .max(64, 'Password must be less than 65 characters')
        .required('Password is a required field')
});


const initialValues: InitialValuesInterface = {
    name: '',
    email: '',
    password: ''
}

const inputsDataArr = [
    {type: 'text', name: 'name', placeholder: 'Name:'},
    {type: 'email', name: 'email', placeholder: 'Email:'},
    {type: 'password', name: 'password', placeholder: 'Password:'},
]

type FormValues = {
    name: string,
    email: string,
    password: string
}

export type AppDispatch = typeof store.dispatch;

export const RegisterPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    // const { handleChange, handleReset, submitForm, touched, errors, values } = useFormikContext() ?? {};

    const handleSubmit = ( values: FormValues, {resetForm}: any) => {
        
        dispatch(userSignup(values)).then((res) => {
            if(res.meta.requestStatus === 'fulfilled') resetForm();
        });
        // resetForm();
    }

    const handleLinkButton = () => {
        navigate('/login', {replace: true});
    }

    return (
        <PageWrapper>
            <DecorationContainer>
            <Section>
                <IconContainer>
                    <Icon iconName='#icon-logo' sx={{width: '42px', height: '17px'}}/>
                    <IconHeader>Reading Journey</IconHeader>
                </IconContainer>
                <Header>Expand your mind, reading <Span>a book</Span></Header>

                <Form
                    initialValues={initialValues}
                    validationSchema={schema}
                    inputsDataArr={inputsDataArr}
                    handleSubmit={handleSubmit}
                    submitName="Registration"
                    sx={{
                        '& .MuiBox-root:last-of-type': {
                            marginTop: '20px',
                            gap: '14px',
                            [theme.breakpoints.up('tablet')]: {
                                marginTop: '82px',
                            }
                        },

                        '& button:nth-of-type(1)':{
                            // marginRight: '14px',
                            fontWeight: '700',

                            color: theme.palette.custom.textBlack,
                            backgroundColor: theme.palette.custom.bgWhite,

                            '&:hover':{
                                color: theme.palette.custom.textMain,
                                backgroundColor: theme.palette.custom.bg2
                            }
                        }
                    }}
                >
                    <LinkButton onClick={handleLinkButton}>Already have an account?</LinkButton>
                </Form>
            </Section>
            <Figure>
                <PhoneImg/>
            </Figure>
            </DecorationContainer>
        </PageWrapper>
    )
}