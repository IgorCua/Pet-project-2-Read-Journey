import { TextField, InputAdornment, ButtonBase, TextFieldProps } from '@mui/material';
import { ErrorMessage, Field, FieldProps, Form, Formik, FormikHelpers, FormikProps, FormikValues, getIn, useFormik, useFormikContext, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { EmailField, NameField, PasswordField, RegForm, SubmitButton } from './styled';
import { Icon } from '../icon/Icon';
import React, { memo, useState } from 'react';
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

export const RegisterForm: React.FC = (props) => {
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
    // const { handleChange, handleReset, submitForm, touched, errors, values } = useFormikContext() ?? {};

    const handleSubmit = ( values: FormikValues, {resetForm}: any) => {

        console.log('registerForm submit', values);

        // resetForm();

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
            {/* <Form onSubmit={formik.handleSubmit}> */}
            <RegForm>
                <div>
                    <Field type='name' name='name' component={NameField}/>
                    <ErrorMessage name='name' component='div'></ErrorMessage>
                </div>
                <div>
                    <Field type='email' name='email' component={EmailField}/>
                    <ErrorMessage name='email'></ErrorMessage>
                </div>
                <div>
                    <Field 
                        type={!isEyeOpen ? 'password' : 'text'} 
                        name='password' 
                        component={PasswordField} 
                        InputProps={{ endAdornment: (renderEyeIcon())}}
                    />
                    <ErrorMessage name='password'></ErrorMessage>
                </div>
                <div>
                    <SubmitButton type="submit">Register</SubmitButton>
                    {/* <button type="submit">Register</button> */}
                    {/* <ButtonBase>Already have an account?</ButtonBase> */}
                </div>
            </RegForm>
            
        </Formik>
    </>

    // return <Formik
    //     initialValues={initialValues}
    //     validationSchema={schema}
    //     onSubmit={handleSubmit}
    // >
    //     <Form >
    //         <label htmlFor='nameField'>
    //             <Field
    //                 id="nameField"
    //                 name="name"
    //                 placeholder="Name"
    //                 type="text"
    //                 component={NameField}
    //             />
                
    //             <ErrorMessage name="name" component="span"/>
    //         </label>
    //         <label htmlFor="emailField" >
    //             <Field
    //                 id="emailField"
    //                 name="email"
    //                 placeholder="Email"
    //                 type="email"
    //                 component={EmailField}
    //             />

    //             <ErrorMessage name="email" component="span"/>
    //         </label>
    //         <label htmlFor="passField">

    //             <Field
    //                 id="passField"
    //                 name="password"
    //                 placeholder="Password"
    //                 type='password'
    //                 component={PasswordField}
    //             />

    //             <ErrorMessage name="password" component="span"/>
    //         </label>
    //         <button type="submit"> Register </button>
    //     </Form>
    // </Formik>

}
