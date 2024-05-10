import { useSelector } from "react-redux"
import { Author, BackdropContainer, Container, DescriptionContainer, Header, Image, Pages } from "./styled"
import { selectRecommendedBooks } from "../../redux/books/selectors"
import { Icon } from "../icon/Icon"
import React, { useState } from "react"
import { Backdrop, Box } from "@mui/material";

type Props = {
    cardType: 'recommended' | 'modal' | 'library',
    url: string,
    title: string,
    author: string,
    pages?: string,
    handleClick: (title: any) => void
}

type BackdropProps = {
    url: string,
    title: string,
    author: string,
    pages: string,
}

export const BookCard = ({cardType, url, title, author, pages, handleClick}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCardBackdrop = ({url, title, author, pages}: BackdropProps) => {
        console.log('bookBackdrop', title);
        
        const handleModal = (event: React.MouseEvent<HTMLElement>) => {
            if(event.target === event.currentTarget)setIsModalOpen(!isModalOpen);
        }
    
        return <Backdrop open={isModalOpen} onClick={handleModal}>
            <BackdropContainer>
    
            </BackdropContainer>
        </Backdrop>
    }
    // const recommendedBooks = useSelector(selectRecommendedBooks);
    console.log(cardType)
    return <>
        <Container>
            {cardType !== 'modal' ? 
                <Image src={url} onClick={() => handleCardBackdrop}/>
                : 'modal' && <Image src={url}/>}
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
    </>
}