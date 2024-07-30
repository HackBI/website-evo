import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Banner from '../components/banner'

const NotFound = () => {
    return (
        <Layout>
            <Banner />

            <Container>
                <Heading as="h1">Not found</Heading>
                <Text>This is not the page you are looking for.</Text>
                <Divider my={6} />
                <Box my={6} align="center">
                    <Button as={NextLink} href="/" colorScheme="teal">
                        Return to home
                    </Button>
                </Box>
            </Container>
        </Layout>
    )
}

export default NotFound