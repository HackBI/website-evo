import {
    Container,
    Box,
    Center,
    Heading,
    Text,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import GoldenBanner from '../components/golden-banner'
import TiltedCard from '../components/workshop-card'

const HOF = () => {
    return (
        <Layout title="Hall of Fame">
            <GoldenBanner />
            <Container maxW="container.lg">
                <Box>

                </Box>

                <TiltedCard
                    imageSrc="images/icon.jpeg"
                    altText="Test"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            Test
                        </p>
                    }
                />
            </Container>
        </Layout>
    )
}

export default HOF