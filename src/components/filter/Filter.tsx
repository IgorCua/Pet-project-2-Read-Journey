import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { FormTextField } from "../materialUI/FormTextField"
import { Form, FormHeader, InputAuthor, InputTitle, Submit } from "./styled"
import React, { useRef } from "react";
import { booksGetRecommended } from "../../redux/books/operations";

type AppDispatch = typeof store.dispatch;
// type RefType = <null | React.ReactHTMLElement>
type Request = {
    title?: string,
    author?: string,
    page?: string | number,
    limit?: string | number
}

type FilterProps = {
    numOfInputs?: number
}

export const Filter = ({numOfInputs}: FilterProps) => {
    // const inputTitleRef = useRef<null | HTMLInputElement>(null);
    // const inputAuthorRef = useRef<null | HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (event: any) => {
        let req: Request = {};

        event.preventDefault();
        const title = event.target.elements[0].value;
        const author = event.target.elements[2].value;

        if(title) req.title = title;
        if(author) req.author = author;

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

    return <Form onSubmit={handleSubmit}>
        <FormHeader>Filters:</FormHeader>
        <InputTitle type="text" name="title"/>
        <InputAuthor type="text" name="author"/>
        <Submit type="submit">To Apply</Submit>
    </Form>
}