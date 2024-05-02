import { FormTextField } from "../materialUI/FormTextField"
import { Container, Form, InputAuthor, InputTitle } from "./styled"

export const Filter = () => {
    return <Container>
        <Form>
            <InputTitle type="text" name="title"/>
            <InputAuthor type="text" name="author"/>
        </Form>
    </Container>
}