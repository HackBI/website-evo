import {
    Container,
    Box,
    Center,
    Heading,
    Text,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import AnimatedBox from '../components/animated-box'
import Liquid from '../components/liquid'
import SpecialText from '../components/SpecialText'

const HOF = () => {
    return (
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
                            borderRadius="md"
                        >
                            <Center>
                                <SpecialText speed={3}>
                                    <Text
                                        fontSize="7xl"
                                        fontWeight="bold"
                                    >
                                        HackBI{'\n'}HALL OF FAME
                                    </Text>
                                </SpecialText>
                            </Center>
                        </Box>
                    </Liquid>
                </Box>
            </Container>
    )
}

export default HOF