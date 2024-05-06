import { InputAdornment } from '@mui/material';
import { Field, Formik} from 'formik';
import * as Yup from 'yup';
import { 
    EmailField, 
    PasswordField, 
    LoginFormContainer, 
    SubmitButton,
    CustomErrorMessage,
    LinkButton,
    List
} from './styled';
import { Icon } from '../icon/Icon';
import React, { useState } from 'react';
import { theme } from '../../styles/themes';
import { useDispatch } from 'react-redux';
import { userSignin } from '../../redux/auth/operations';
import { store } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

interface InitialValuesInterface {
    // name: string,
    email: string,
    password: string
}

const schema = Yup.object().shape({
    // name: Yup
    //     .string()
    //     .min(3, 'Name must be at least 3 characters')
    //     .max(64, 'Name must be less than 65 characters')
    //     .required('Name is a required field'),
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
    // name: '',
    email: '',
    password: ''
}

type FormValues = {
    // name: string,
    email: string,
    password: string
}

export type AppDispatch = typeof store.dispatch;

export const LoginForm: React.FC = () => {
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    // const { handleChange, handleReset, submitForm, touched, errors, values } = useFormikContext() ?? {};

    const handleSubmit = ( values: FormValues, {resetForm}: any) => {
        
        console.log('registerForm submit', values);
        dispatch(userSignin(values)).then((res) => {
            if(res.meta.requestStatus === 'fulfilled') resetForm();
        });
        // resetForm();
    }

    const handleLinkButton = () => {
        navigate('/register', {replace: true});
    }

    const renderEyeIcon = () => {
        // event?: React.MouseEvent<HTMLOrSVGElement>
        return (isEyeOpen 
            ?   <InputAdornment position='end' onClick={() => setIsEyeOpen(false)}>
                    <Icon 
                        iconName={'#icon-eye-opened'} 
                        sx={{
                            width: '15px', 
                            height: '15px', 
                            cursor: 'pointer', 
                            [theme.breakpoints.up('tablet')]:{
                                width: '20px', height: '20px'
                            }}}
                        aria-label="toggle password visibility"
                        onClick={() => setIsEyeOpen(false)}
                    />
                </InputAdornment>
            :   <InputAdornment position='end' onClick={() => setIsEyeOpen(true)}>
                    <Icon 
                        iconName={'#icon-eye-closed'} 
                        sx={{
                            width: '15px', 
                            height: '15px', 
                            cursor: 'pointer', 
                            [theme.breakpoints.up('tablet')]:{
                                width: '20px', height: '20px'
                            }}}
                        aria-label="toggle password visibility"
                        onClick={() => setIsEyeOpen(true)}
                    />
                </InputAdornment>   
            
        )
    }

    return <>
    <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
    >
            {/* <Form onSubmit={formik.handleSubmit}> */}
            <LoginFormContainer>
                <List>
                    <li>
                        <Field type='email' name='email' component={EmailField}/>
                        <CustomErrorMessage name='email' component='p'/>
                    </li>
                    <li>
                        <Field 
                            type={!isEyeOpen ? 'password' : 'text'} 
                            name='password' 
                            component={PasswordField} 
                            InputProps={{ endAdornment: (renderEyeIcon())}}
                    />
                        <CustomErrorMessage name='password' component='p'/>
                    </li>
                    <li>
                        <SubmitButton type="submit">Log in</SubmitButton>
                        <LinkButton onClick={handleLinkButton} type='button'>Dont have an account?</LinkButton>
                    </li>
                </List>
            </LoginFormContainer>
        </Formik>
    </>

}
