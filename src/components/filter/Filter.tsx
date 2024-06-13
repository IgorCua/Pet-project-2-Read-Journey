import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { FormTextField } from "../materialUI/FormTextField"
import { 
    // Form, 
    FormHeader, 
    InputAuthor, 
    InputTitle, 
    InputNumOfPages, 
    Submit 
} from "./styled";
import React, { useEffect, useRef } from "react";
import { booksGetRecommended } from "../../redux/books/operations";
import { Form } from "../form/Form";
import * as Yup from 'yup';
import { theme } from "../../styles/themes";

const schemaRecommended = Yup.object().shape({
    // name: Yup
    //     .string()
    //     .min(3, 'Name must be at least 3 characters')
    //     .max(64, 'Name must be less than 65 characters')
    //     .required('Name is a required field'),
    title: Yup
        .string()
        .min(1, 'Email must be at least 3 characters')
        .max(64, 'Email must be less than 65 characters')
        .required('Email is a required field')
        .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
            'Email is invalid'
        ),
    author: Yup
        .string()
        .min(1, 'Password must be at least 7 characters')
        .max(64, 'Password must be less than 65 characters')
        .required('Password is a required field')
});

const schemaLibrary = Yup.object().shape({
    // name: Yup
    //     .string()
    //     .min(3, 'Name must be at least 3 characters')
    //     .max(64, 'Name must be less than 65 characters')
    //     .required('Name is a required field'),
    title: Yup
        .string()
        .min(1, 'Email must be at least 3 characters')
        .max(64, 'Email must be less than 65 characters')
        .required('Email is a required field')
        .matches(
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
            'Email is invalid'
        ),
    author: Yup
        .string()
        .min(1, 'Password must be at least 7 characters')
        .max(64, 'Password must be less than 65 characters')
        .required('Password is a required field'),
    pages: Yup
        .string()
        .min(1, 'Password must be at least 7 characters')
        .max(64, 'Password must be less than 65 characters')
        .required('Password is a required field')
});

const inputsDataArrRecommended = [
    {type: 'text', name: 'title', placeholder: 'Book title:'},
    {type: 'text', name: 'author', placeholder: 'The author:'},
];

const inputsDataArrLibrary = [
    {type: 'text', name: 'title', placeholder: 'Book title:'},
    {type: 'text', name: 'author', placeholder: 'The author:'},
    {type: 'text', name: 'pages', placeholder: 'Number of pages:'},
];

const initialValRecommended = {
    title: '',
    author: ''
};

const initialValLibrary = {
    title: '',
    author: '',
    pages: ''
};

type AppDispatch = typeof store.dispatch;
// type RefType = <null | React.ReactHTMLElement>
type Request = {
    title?: string,
    author?: string,
    page?: string | number,
    limit?: string | number,
    totalPages?: number
}

type FilterDataState = {
    // title: null | string, //doesnt work
    // author: null | string,
    // totalPages: null| string
    title: any,
    author: any,
    totalPages: any
}

type Props = {
    numOfInputs?: 2 | 3,
    requestLimit?: number,
    // setFilterData?: React.Dispatch<React.SetStateAction<FilterDataState>>
    setFilterData?: any,
    sx?: {}
}

interface FormElements extends HTMLFormControlsCollection {
    yourInputName: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
   readonly elements: FormElements
}

export const Filter = ({numOfInputs, requestLimit, setFilterData, sx}: Props) => {
    // const inputTitleRef = useRef<null | HTMLInputElement>(null);
    // const inputAuthorRef = useRef<null | HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();
    // event: React.FormEvent<HTMLInputElement>
    const handleSubmit = (event: any) => {
        event.preventDefault();
        let req: Request = {};
        
        const title = event.target.elements[0].value;
        const author = event.target.elements[2].value;
        // const title = event.target.elements[2].value;
        // const author = event.target.elements[2].value;

        if(title) req.title = title;
        if(author) req.author = author;
        // if(reqestLimit) req.totalPages = reqestLimit;

        if(requestLimit === 3){
            // console.log('filter limit', 3);
        } 

        if(numOfInputs === 3){
            const totalPages = event.target.elements[4].value;
            console.log('filter', title, author, totalPages);

            setFilterData({
                title: title,
                author: author,
                totalPages: totalPages
            });
        } 

        if(!requestLimit){
            if(window.innerWidth < 768) {
                req.limit = 2;
                dispatch(booksGetRecommended(req));
                // event.target.reset();
                return
            }
            if(window.innerWidth < 1024) {
                req.limit = 8;
                dispatch(booksGetRecommended(req));
                // event.target.reset();
                return
            }
            if(window.innerWidth >= 1024) {
                req.limit = 10;
                dispatch(booksGetRecommended(req));
                // event.target.reset();
                return
            }
        }
    }

    useEffect(()=>{

    }, [])

    // return <Form onSubmit={handleSubmit} style={sx}>
    //     <FormHeader>Filters:</FormHeader>
    //     <InputTitle type="text" name="title"/>
    //     <InputAuthor type="text" name="author"/>
    //     {numOfInputs === 3 && 
    //         <InputNumOfPages type="text" name="numberOfPages"/>
    //     }
    //     <Submit type="submit">Apply</Submit>
    // </Form>
    return <Form
        initialValues={requestLimit === 3 ? initialValLibrary : initialValRecommended}
        validationSchema={requestLimit === 3 ? schemaLibrary : schemaRecommended}
        handleSubmit={handleSubmit}
        submitName="Apply"
        inputsDataArr={requestLimit === 3 ? inputsDataArrLibrary : inputsDataArrRecommended}
        sx={{
            '& .MuiBox-root:last-of-type': {
                marginTop: '20px',
            },
        }}
    />
}