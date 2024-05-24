import { 
    Container, 
    ContainerFilterCards, 
    ContainerRecommended, 
    ContainerLinks, 
    Header, 
    IconWrapper, 
    LinkButton,
    ContainerMyLibrary,
    DecorationContainer,
    ImageContainer,
    Image,
    ImageText,
    ImageSpan,
    ContainerEmptyLibrary,
    LibraryHeaderContainer,
    LibraryHeader,
    LibrarySelect,
    ContainerFilter
} from "./styled";
import { Filter } from "../../components/filter/Filter";
import { store } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksGetRecommended } from "../../redux/books/operations";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../redux/books/selectors";
import { BookCard } from "../../components/bookCard/BookCard";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/icon/Icon";
import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { theme } from "../../styles/themes";

type AppDispatch = typeof store.dispatch;

interface Request {
    page: number,
    // title?: string,
    // author?: string,
    limit?: number
}

export const UserLibraryPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const booksObj = useSelector(selectRecommendedBooks);
    const navigate = useNavigate();
    const [selectedBooks, setSelectedBooks] = useState('');

    let request = {
        limit: 3,
        page: 1
    }
    
    useEffect(()=>{
        if(!booksObj || booksObj.results.length !== 3) {
            // handlePageLimit();
            dispatch(booksGetRecommended(request));
        }
    });

    const handleLinkClick = () => {
        navigate('/recommended');
    }

    const handleSelect = (event: SelectChangeEvent) => {
        console.log(event.target.value);
        setSelectedBooks(event.target.value)
    }

    return <Container>
        <DecorationContainer>
        <ContainerFilter>
            <Filter numOfInputs={3}/>
            <ContainerRecommended>
                <Header>Recommended books</Header>
                <ContainerFilterCards>
                    {booksObj && booksObj.results.map((book, i) => {
                        return <BookCard 
                            key={i}
                            id={book._id}
                            cardType="recommended"
                            title={book.title}
                            author={book.author}
                            pages={book.totalPages}
                            url={book.imageUrl}
                            sx={{
                                width: '71px',
                                '& img': {
                                    height: '107px'
                                },
                                '& h3': {
                                    fontSize: '10px',
                                    lineHeight: '12px',
                                },
                                // '& p': {
                                //     fontSize: '10px',
                                //     lineHeight: '12px',
                                // }
                            }}
                        />
                    })}
                </ContainerFilterCards>
                <ContainerLinks>
                    <LinkButton onClick={handleLinkClick}>Home</LinkButton>
                    <IconWrapper onClick={handleLinkClick} >
                        <Icon iconName={'#icon-arrow-right'} sx={{width: '24px', height: '24px'}}/>
                    </IconWrapper>
                </ContainerLinks>
            </ContainerRecommended>
            </ContainerFilter>
        </DecorationContainer>

        <DecorationContainer>
        <ContainerMyLibrary>
                <LibraryHeaderContainer>
                    <LibraryHeader>My Library</LibraryHeader>
                    <FormControl sx={{ 
                        // padding: '0px 0px',
                        // padding: '12px 14px',
                        // m: 1, 
                        minWidth: 120,
                        width: '120px',
                        
                    }}>
                        <Select
                            value={selectedBooks}
                            onChange={handleSelect}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                padding: '0px',
                                // backgroundColor: theme.palette.custom.bg4,
                                '& MuiSelect-select': {
                                    
                                },
                                '*':{
                                    // padding: '0px'
                                }
                            }}
                            MenuProps={{
                                PaperProps: {
                                  sx: {
                                    marginTop: '4px',
                                    minHeight: '122px',
                                    // overflowx: 'hidden'
                                    backgroundColor: theme.palette.custom.bg2,

                                    borderRadius: '12px',
                                  }
                                },
                                MenuListProps:{
                                    sx: {
                                        padding:'14px 0px',
                                        width: '100%',
                                        // paddingTop: '12px',
                                        color: theme.palette.custom.textSecondary,
                                        // overflowx: 'hidden'
                                        
                                        '& li': {
                                            padding: '0px 14px',
                                            // paddingLeft: '5px',
                                            minHeight:'10px',
                                            width: '100%',

                                            fontSize: '12px',
                                            lineHeight: '18px'
                                        },
                                        '& li.Mui-selected': {
                                            color: theme.palette.custom.textMain,
                                            backgroundColor: 'none'
                                        },
                                        '& li:not(:last-child)':{
                                            marginBottom: '7px'
                                        }
                                    }
                                },
                                
                            }}
                        >
                            {/* <MenuItem value="">All books</MenuItem> */}
                            <MenuItem value={'Unread'}>Unread</MenuItem>
                            <MenuItem value={'In progress'}>In progress</MenuItem>
                            <MenuItem value={'Done'}>Done</MenuItem>
                            <MenuItem value="">All books</MenuItem>
                            {/* <MenuItem value={'All books'}sx={{minHeight: '20px'}}>All Books</MenuItem> */}
                        </Select>
                    </FormControl>
                </LibraryHeaderContainer>
                <ContainerEmptyLibrary>
                    <ImageContainer>
                        <Image 
                            alt="books image"
                            src={`${require('../../assets/images/books-1x.png')}`}
                            srcSet={`
                                ${require("../../assets/images/books-1x.png")} 1x,
                                ${require("../../assets/images/books-2x.png")} 2x
                            `}
                        />
                    </ImageContainer>
                    <ImageText>
                        To start training, add <ImageSpan>some of your books</ImageSpan> or from the recommended ones.
                    </ImageText>
                </ContainerEmptyLibrary>
            
        </ContainerMyLibrary>
        </DecorationContainer>
    </Container>
}