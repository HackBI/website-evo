import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import Banner from '../banner'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <title>HackBI</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.lg" pt={14}>
                <Banner />

                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main