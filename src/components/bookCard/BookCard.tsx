import { useSelector } from "react-redux"
import { AddToLibraryBtn, Author, BackdropAuthor, BackdropCardContainer, BackdropContainer, BackdropDescrContainer, BackdropHeader, BackdropImage, Container, DescriptionContainer, Header, Image, Pages } from "./styled"
import { selectRecommendedBooks } from "../../redux/books/selectors"
import { Icon } from "../icon/Icon"
import React, { useState } from "react"
import { Backdrop, Box, IconButton } from "@mui/material";
import { theme } from "../../styles/themes"

type Props = {
    cardType: 'recommended' | 'modal' | 'library',
    url: string,
    title: string,
    author: string,
    pages?: number,
    handleClick: (title: any) => void
}

type BackdropProps = {
    url: string,
    title: string,
    author: string,
    pages?: number,
}

export const BookCard = ({cardType, url, title, author, pages, handleClick}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModal = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget)setIsModalOpen(!isModalOpen);
    }

    const handleAddToLibrary = () => {
        console.log('click')
    }
    // const recommendedBooks = useSelector(selectRecommendedBooks);
    // console.log(cardType)
    return <>
        <Container>
            {cardType !== 'modal' ? 
                <Image src={url} onClick={() => setIsModalOpen(true)}/>
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
        {isModalOpen && <Backdrop open={isModalOpen} onClick={handleModal}>
            <BackdropContainer>
                <IconButton
                    size="small"
                    aria-label="close book modal"
                    aria-controls="book-modal"
                    // aria-haspopup="true"
                    onClick={() => setIsModalOpen(false)}
                    color='inherit'
                    sx={{
                        // width: '22px', 
                        // height: '22px', 
                        position: 'absolute',
                        right: '16px',
                        top: '16px',
                        color: theme.palette.custom.textMain
                    }} 
                    >
                        <Icon 
                            iconName='#icon-close' 
                            sx={{width: '22px', height: '22px',
                                
                            }} 
                        />
                </IconButton>
                <BackdropCardContainer>
                    <BackdropImage src={url}/>
                    <BackdropDescrContainer>
                        <BackdropHeader noWrap>{title}</BackdropHeader>
                        <BackdropAuthor noWrap>{author}</BackdropAuthor>
                        <Pages>{pages} pages</Pages>
                    </BackdropDescrContainer>
                </BackdropCardContainer>

                <AddToLibraryBtn onClick={handleAddToLibrary}>Add to library</AddToLibraryBtn>
            </BackdropContainer>
        </Backdrop>}
    </>
}