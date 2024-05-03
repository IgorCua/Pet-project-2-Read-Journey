import { FormTextField } from "../materialUI/FormTextField"
import { Form, FormHeader, InputAuthor, InputTitle, Submit } from "./styled"

export const Filter = () => {
    return <Form>
            <FormHeader>Filters:</FormHeader>
            <InputTitle type="text" name="title"/>
            <InputAuthor type="text" name="author"/>
            <Submit>To Apply</Submit>
        </Form>
}