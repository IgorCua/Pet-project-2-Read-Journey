import { useState } from "react"
import { Dashboard } from "../../components/dashboard/Dashboard"
import { FormTextField } from "../../components/materialUI/FormTextField"
import { CircleInside, CircleOutside, Container, ContainerNoStats, ContainerStats, Form, FormHeader, Header, Input, MyReadingContainer, MyReadingHeader, Submit, Text } from "./styled"
import { Box, TextFieldProps } from "@mui/material"
import { theme } from "../../styles/themes"
import { borderRadius } from "@mui/system"
import { BookCard } from "../../components/bookCard/BookCard"
import { useSelector } from "react-redux"
import { selectBookInfo } from "../../redux/books/selectors"
import { Icon } from "../../components/icon/Icon"

export const ReadingPage = () => {
    const [isReading, setIsReading] = useState(false);
    const bookInfo = useSelector(selectBookInfo);

    const handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
        console.log(event.currentTarget.elements[0].value)
        // console.log(event.target.elements[0].value as HTMLInputElement)
        // const inputValue = (event!.target.elements[0] as HTMLInputElement)!.value;
        // console.log(inputValue)
        // console.log(event!.currentTarget!.elements[0].value as HTMLInputElement)
        setIsReading(!isReading);
        // event.target.reset();
    }
    return <Container component='section'>
        <Dashboard sx={{gap: '40px'}}>
            <>
                <Form action="" onSubmit={handleSubmit}>
                    <FormHeader>Stop page:</FormHeader>
                    <Input/>
                    <Submit type="submit">
                        {!isReading ? 'Start' : 'Stop'}
                    </Submit>
                </Form>

                <ContainerStats component={'section'}>
                    <ContainerNoStats>
                        <Header variant="h2">Progress</Header>
                        {/* <ImageContainer> */}
                        {/* <Image 
                            🌟
                        /> */}
                        {/* </ImageContainer> */}
                        <Text component='p' sx={{
                            marginBottom: '20px'
                        }}>
                            Here you will see when and how much you read. To record, click on the red button above.
                        </Text>
                        <Box component={'div'} sx={{
                            padding: '22px 24px',
                            width: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',

                            backgroundColor: theme.palette.custom.bg2,

                            borderRadius: '50%'
                        }}>
                            <Text component={'p'} sx={{
                                fontSize: '34px',
                                lineHeight: '34px',
                            }}>🌟</Text>
                        </Box>
                    </ContainerNoStats>
                </ContainerStats>

                <MyReadingContainer>
                    <MyReadingHeader>My reading</MyReadingHeader>
                    
                    {bookInfo && <BookCard
                        cardType="recommended"
                        id={bookInfo._id}
                        url={bookInfo.imageUrl}
                        title={bookInfo.title}
                        author={bookInfo.author}
                        isModal={false}
                        sx={{
                            marginBottom: '20px'
                        }}
                    />}

                    {/* <Icon iconName={}/> */}
                    
                    <CircleOutside>
                        {!isReading  
                            ? <CircleInside/>
                            : <CircleInside sx={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '3px'
                            }}/>
                        }
                    </CircleOutside>
                </MyReadingContainer>
            </>
        </Dashboard>
    </Container>
}