import { TextField, InputAdornment, ButtonBase } from '@mui/material';
import { ErrorMessage, Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { EmailField, NameField, PasswordField, RegForm, SubmitButton } from './styled';
import { Icon } from '../icon/Icon';
import React, { useState } from 'react';

interface ValuesInterface {
    name: string,
    email: string,
    password: string
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(64, 'Name must be less than or equal to 64 characters')
        .required('Name is a required field'),
    email: Yup
        .string()
        .min(3, 'Email must be at least 3 characters')
        .max(64, 'Email must be less than or equal to 64 characters')
        .required('Email is a required field')
        .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
            'Email is invalid'
        ),
    password: Yup
        .string()
        .min(7, 'Password must be at least 7 characters')
        .max(64, 'Password must be less than or equal to 64 characters')
        .required('Password is a required field')
});

const initialValues: ValuesInterface = {
    name: '',
    email: '',
    password: ''
}

type RenderEyeIconProps = {
    value: string;
    onClick: (value: string) => void;
  }

export const RegisterForm: React.FC = () => {
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

    const handleSubmit = ( values: any, {resetForm}: any) => {
        resetForm();

        console.log('registerForm submit', values);
    }

    const renderEyeIcon = () => {
        // event?: React.MouseEvent<HTMLOrSVGElement>
        return (isEyeOpen 
            ?   <InputAdornment position='end' onClick={() => setIsEyeOpen(false)}>
                    <Icon 
                        iconName={'#icon-eye-opened'} 
                        sx={{width: '15px', height: '15px', cursor: 'pointer'}}
                        aria-label="toggle password visibility"
                        onClick={() => {console.log('click'); setIsEyeOpen(false)}}
                    />
                </InputAdornment>
            :   <InputAdornment position='end' onClick={() => setIsEyeOpen(true)}>
                    <Icon 
                        iconName={'#icon-eye-closed'} 
                        sx={{width: '15px', height: '15px', cursor: 'pointer'}}
                        aria-label="toggle password visibility"
                        onClick={() => {console.log('click'); setIsEyeOpen(true)}}
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
            <RegForm>
                <div>
                    <NameField 
                        // InputLabelProps={{ shrink: true }}
                        type='text' name='name'
                    />    
                    <ErrorMessage name='name'></ErrorMessage>
                </div>
                <div>
                    <EmailField type='email' name='email'/>
                    <ErrorMessage name='email'></ErrorMessage>
                </div>
                <div>
                    <PasswordField 
                        type={isEyeOpen ? 'text' : 'password'}
                        name='password' 
                        InputProps={{ endAdornment: (
                            renderEyeIcon()
                        )}}
                    />
                    <ErrorMessage name='password'></ErrorMessage>
                </div>
                <div>
                    {/* <SubmitButton type="submit">Register</SubmitButton> */}
                    <button type="submit">Register</button>
                    {/* <ButtonBase>Already have an account?</ButtonBase> */}
                </div>
            </RegForm>
        </Formik>
    </>
}
