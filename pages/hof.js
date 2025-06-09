import {
    Container,
    Box,
    Flex,
    Text,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import GoldenBanner from '../components/golden-banner'
import TiltedCard from '../components/workshop-card'
import PixelCard from '../components/pixel-card'

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
            <PixelCard variant="red">
                <Flex w="100%" h="100%" position="absolute" justifyContent="center" alignItems="center">
                    <Text fontSize="3rem" userSelect="none" fontWeight={900} mixBlendMode="difference" color="#a6a6a6" zIndex="500">
                        hover me.
                    </Text>
                </Flex>
            </PixelCard>
        </Layout>
    )
}

export default HOF