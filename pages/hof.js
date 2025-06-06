import {
    Container,
    Box,
    Center,
    Heading,
    Text,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import GoldenBanner from '../components/golden-banner'
import AnimatedBox from '../components/animated-box'
import Liquid from '../components/liquid'
import SpecialText from '../components/SpecialText'

const HOF = () => {
    return (
        <Layout title="Hall of Fame">
            <GoldenBanner />
            <Container maxW="container.lg">
                <Box>
                    
                </Box>
            </Container>
        </Layout>
    )
}

export default HOF