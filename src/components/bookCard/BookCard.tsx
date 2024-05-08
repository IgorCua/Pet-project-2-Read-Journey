import { useSelector } from "react-redux"
import { Author, Container, DescriptionContainer, Header, Image, Pages } from "./styled"
import { selectRecommendedBooks } from "../../redux/books/selectors"
import { Icon } from "../icon/Icon"

type Props = {
    cardType: 'recommended' | 'modal' | 'library',
    url: string,
    title: string,
    author: string,
    pages?: string
}

export const BookCard = ({cardType, url, title, author, pages}: Props) => {
    // const recommendedBooks = useSelector(selectRecommendedBooks);
    return <Container>
        <Image src={url}/>
        <DescriptionContainer>
            <Header noWrap>{title}</Header>
            <Author noWrap>{author}</Author>
            {cardType === 'modal' && <Pages>{pages}</Pages>}
        </DescriptionContainer>
        {cardType === 'library' && 
            <Icon 
                iconName={'#icont-rash-bin-red'} 
                sx={{
                    padding: '7px 7px',
                    marginLeft: '14px',
                    width: '28px',
                    height: '28px'
                }}
            />
        }
    </Container>
}