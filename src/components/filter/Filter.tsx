import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { FormTextField } from "../materialUI/FormTextField"
import { Form, FormHeader, InputAuthor, InputTitle, NumOfPages, Submit } from "./styled"
import React, { useRef } from "react";
import { booksGetRecommended } from "../../redux/books/operations";

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
    setFilterData?: any
}

export const Filter = ({numOfInputs, requestLimit, setFilterData}: Props) => {
    // const inputTitleRef = useRef<null | HTMLInputElement>(null);
    // const inputAuthorRef = useRef<null | HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let req: Request = {};

        const title = event.target.elements[0].value;
        const author = event.target.elements[2].value;

        if(title) req.title = title;
        if(author) req.author = author;
        // if(reqestLimit) req.totalPages = reqestLimit;

        if(requestLimit === 3){
            console.log('filter limit', 3);
        } 

        if(numOfInputs === 3){
            const totalPages = event.target.elements[4].value;
            console.log('filter', title, author, totalPages);

            // setFilterData({
            //     title: title,
            //     author: author,
            //     totalPages: totalPages
            // });
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

    return <Form onSubmit={handleSubmit}>
        <FormHeader>Filters:</FormHeader>
        <InputTitle type="text" name="title"/>
        <InputAuthor type="text" name="author"/>
        {numOfInputs === 3 && 
            <NumOfPages type="text" name="numberOfPages"/>
        }
        <Submit type="submit">Apply</Submit>
    </Form>
}