import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(64, 'Name must be less than or equal to 64 characters')
        .defined('Name is a required field'),
    email: Yup
        .string()
        .min(3, 'Email must be at least 3 characters')
        .max(64, 'Email must be less than or equal to 64 characters')
        .defined('Email is a required field')
        .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
            'Email is invalid'
        ),
    password: Yup
        .string()
        .min(7, 'Password must be at least 7 characters')
        .max(64, 'Password must be less than or equal to 64 characters')
        .defined('Password is a required field')
});

const initialValues = {
    name: '',
    email: '',
    password: ''
}

interface ValuesInterface {
    name: string,
    email: string,
    password: string
}

export const RegisterForm = () => {
    const handleSubmit = (values: ValuesInterface, {resetForm}: any) => {
        console.log('registerForm submit', values);
        
    }

    return <>
        <Formik 
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form>
                
            </Form>
        </Formik>
    </>
}
