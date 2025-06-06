import {
    Container,
    Box,
    Center,
    Text,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import AnimatedBox from '../components/animated-box'
import Liquid from '../components/liquid'

const HOF = () => {
    return (
        <Layout title="Hall of Fame">
            <Container maxW="container.lg">
                <Box>
                    <Liquid
                        baseColor={[0.38, 0.32, 0.1]}
                        speed={0.3}
                        amplitude={0.51}
                        interactive={false}
                    >
                        <Box
                            m={6}
                            p={2}
                            bg="rgba(0, 0, 0, 0.3)"
                            borderRadius="md"
                        >
                            <Text>
                                
                            </Text>
                        </Box>
                    </Liquid>
                </Box>
            </Container>
        </Layout>
    )
}

export default HOF