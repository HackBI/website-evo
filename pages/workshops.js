import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"

const Workshops = () => {
    return (
        <Layout title="Workshops">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Workshops
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Workshops