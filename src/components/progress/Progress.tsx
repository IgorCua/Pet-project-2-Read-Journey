// interface PropsInterface {
//     startPage: string,
//     startReading: string,
//     finishPage?: number,
//     finishReading?: string,
//     speed?: number,
//     status?: 'active' | 'inactive'
// }

import { useSelector } from "react-redux"
import { selectBookInfo } from "../../redux/books/selectors"
import { Container } from "./styled";

export const Progress = () => {
    const bookInfo = useSelector(selectBookInfo);

    return <Container component={'div'}>
        
    </Container>
}