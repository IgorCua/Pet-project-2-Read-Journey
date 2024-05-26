import { useSelector } from "react-redux"
import { 
    AddToLibraryBtn, 
    Author, 
    BackdropCardContainer, 
    BackdropContainer, 
    BackdropDescrContainer, 
    Container, 
    DescriptionContainer, 
    Header, 
    Image, 
    Pages, 
    StartReadingBtn,
    TitleContainer
} from "./styled";
import { selectRecommendedBooks } from "../../redux/books/selectors";
import { Icon } from "../icon/Icon";
import React, { useState } from "react";
import { Backdrop, Box, IconButton } from "@mui/material";
import { theme } from "../../styles/themes";
import { store } from "../../redux/store";
import { useDispatch } from "react-redux";
import { userAddBookByID } from "../../redux/auth/operations";
import { CustomBackdrop } from "../Backdrop/CustomBackdrop";

type Props = {
    id: string,
    cardType: 'recommended' | 'myReading' | 'library',
    url: string,
    title: string,
    author: string,
    pages?: number,
    sx?: {}
    // handleClick?: (title: any) => void
}

type BackdropProps = {
    url: string,
    title: string,
    author: string,
    pages?: number,
}

type AppDispatch = typeof store.dispatch;

export const BookCard = ({id, cardType, url, title, author, pages, sx}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isReading, setIsReading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleModal = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget)setIsModalOpen(!isModalOpen);
    }

    const handleAddToLibrary = () => {
        console.log('click');
        console.log(id);
        dispatch(userAddBookByID(id));
    }

    const handleStartReading = () => {
        console.log('Start reading click');
    }
    // const recommendedBooks = useSelector(selectRecommendedBooks);
    // console.log(cardType)
    return <>
        <Container onClick={() => {setIsModalOpen(true)}} sx={sx}>
            <Image src={url}/>
            <DescriptionContainer>
                <TitleContainer>
                    <Header variant="h3" noWrap>{title}</Header>
                    <Author noWrap>{author}</Author>
                </TitleContainer>
                {cardType === 'library' && 
                    <Icon 
                        iconName={'#icon-trash-bin-red'} 
                        sx={{
                            padding: '5px 4px',
                            marginLeft: '14px',
                            width: '28px',
                            height: '28px',
                            display: 'flex',
                            alignSelf: 'center',

                            backgroundColor: 'rgba(232, 80, 80, 0.1)',
                            border: '1px solid rgba(232, 80, 80, 0.2)',
                            borderRadius: '50%'
                        }}
                    />
                }
            </DescriptionContainer>
            {/* {cardType === 'library' && 
                <Icon 
                    iconName={'#icont-trash-bin-red'} 
                    sx={{
                        padding: '7px 7px',
                        marginLeft: '14px',
                        width: '28px',
                        height: '28px'
                    }}
                />
            } */}
        </Container>
        
        {isModalOpen && <CustomBackdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <BackdropContainer>
                <BackdropCardContainer>
                    <Image src={url} sx={{ 
                        marginBottom: '16px',
                        width: '100%',
                        height: '208px',
                        // maxHeight: '208px'
                        borderRadius: '8px',
                        cursor: 'auto'
                    }}/>
                    <BackdropDescrContainer>
                        <Header variant="h3" noWrap sx={{
                            marginBottom: '2px',
                            width: '100%',
                        }}>{title}</Header>
                        <Author noWrap sx={{
                            marginBottom: '4px',
                        }}>{author}</Author>
                        <Pages>{pages} pages</Pages>
                    </BackdropDescrContainer>
                </BackdropCardContainer>

                { cardType === 'recommended' && 
                    <AddToLibraryBtn onClick={handleAddToLibrary}>Add to library</AddToLibraryBtn>
                }
                { cardType === 'library' && 
                    <StartReadingBtn onClick={handleStartReading}>Start reading</StartReadingBtn>
                }
                {/* { (cardType === 'myReading' && !isReading) ? 
                    <Icon iconName={'#'}/>
                    : <Icon iconName={'#'}/>
                } */}

            </BackdropContainer>
        </CustomBackdrop>}
    </>
}