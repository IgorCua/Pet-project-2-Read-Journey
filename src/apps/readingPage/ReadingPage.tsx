import { useState } from "react"
import { Dashboard } from "../../components/dashboard/Dashboard"
import { FormTextField } from "../../components/materialUI/FormTextField"
import { Container, ContainerNoStats, ContainerStats, Form, FormHeader, Header, Input, Submit, Text } from "./styled"
import { Box, TextFieldProps } from "@mui/material"
import { theme } from "../../styles/themes"
import { borderRadius } from "@mui/system"

export const ReadingPage = () => {
    const [isReading, setIsReading] = useState(false);

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
        <Dashboard>
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
                        <Header>Progress</Header>
                        {/* <ImageContainer> */}
                    {/* <Image 
                        🌟
                    /> */}
                {/* </ImageContainer> */}
                <Text component='p'>
                    Here you will see when and how much you read. To record, click on the red button above.
                </Text>
                <Box component={'div'} sx={{
                    padding: '24px',
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
            </>
        </Dashboard>
    </Container>
}