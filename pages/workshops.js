import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import AnimatedBox from '../components/animated-box'
import { WorkshopGridItem } from '../components/grid-item'

const Workshops = () => {
    return (
        <Layout title="Workshops">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Workshops
                </Heading>

                <SimpleGrid columns={[1, 2, 3]} gap={6}>
                    <AnimatedBox delay={0.1}>
                        <WorkshopGridItem
                            title="Rust"
                            id="rust"
                            src="images/workshops/rust.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.1}>
                        <WorkshopGridItem
                            title="Java"
                            id="java"
                            src="images/workshops/java.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.1}>
                        <WorkshopGridItem
                            title="HTML"
                            id="html"
                            src="images/workshops/html.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.15}>
                        <WorkshopGridItem
                            title="AI / ML"
                            id="aiml"
                            src="images/workshops/aiml.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.15}>
                        <WorkshopGridItem
                            title="Python"
                            id="python"
                            src="images/workshops/python.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.15}>
                        <WorkshopGridItem
                            title="Unity"
                            id="unity"
                            src="images/workshops/unity.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.2}>
                        <WorkshopGridItem
                            title="Cybersecurity"
                            id="cybersec"
                            src="images/workshops/cybersec.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.2}>
                        <WorkshopGridItem
                            title="Java Graphics"
                            id="graphics"
                            src="images/workshops/graphics.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.2}>
                        <WorkshopGridItem
                            title="Video Editing"
                            id="video"
                            src="images/workshops/video.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.25}>
                        <WorkshopGridItem
                            title="Image Editing"
                            id="image"
                            src="images/workshops/image.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.25}>
                        <WorkshopGridItem
                            title="Finch Robots"
                            id="finch"
                            src="images/workshops/finch.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.25}>
                        <WorkshopGridItem
                            title="Hardware"
                            id="hardware"
                            src="images/workshops/hardware.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.3}>
                        <WorkshopGridItem
                            title="Engineering - Circuits"
                            id="circuits"
                            src="images/workshops/circuits.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.3}>
                        <WorkshopGridItem
                            title="Engineering - Robots"
                            id="robots"
                            src="images/workshops/robots.png"
                        />
                    </AnimatedBox>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Workshops
export { getServerSideProps } from '../components/chakra'