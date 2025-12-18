import {
    Container,
    Box,
    Center,
    Heading,
    SimpleGrid,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import AnimatedBox from '../components/animated-box'
import { WorkshopGridItem } from '../components/grid-item'

// SCHEDULE NEEDS A FIX
const Workshops = () => {
    const items = [
        { id: 1, time: "1100-1200", room103: "Python", room105: "Java", room107: "HTML", room111: "", room113: "Keynote", engineering: "" },
        { id: 2, time: "1300-1400", room103: "Rust", room105: "MLH Mini-Event", room107: "Cybersecurity", room111: "", room113: "AI Innovation Speaker", engineering: "Circuits" },
        { id: 3, time: "1415-1515", room103: "Video Editing", room105: "Unity", room107: "Java Graphics", room111: "AI/ML", room113: "Quiet Hacking", engineering: "Robots" },
        { id: 4, time: "1700-1800", room103: "JMU Overview", room105: "Hardware", room107: "Finch Robots", room111: "How To Run A Hackathon", room113: "Photo Editing", engineering: "" },
    ]

    return (
        <Layout title="Workshops">
            <Container maxW="container.lg">
                <Heading as="h3" fontSize={20} mb={4}>
                    Workshop Schedule
                </Heading>

                <Box padding={5} overflowX={{base: "auto", lg: "unset"}}>
                    <Center>
                        <Table size="sm" variant="striped">
                            <Thead>
                                <Tr>
                                    <Th>Time</Th>
                                    <Th>Room 103</Th>
                                    <Th>Room 105</Th>
                                    <Th>Room 107</Th>
                                    <Th>Room 111</Th>
                                    <Th>Room 113</Th>
                                    <Th>Engineering Room</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {items.map((item) => (
                                    <Tr key={item.id}>
                                        <Td>{item.time}</Td>
                                        <Td>{item.room103}</Td>
                                        <Td>{item.room105}</Td>
                                        <Td>{item.room107}</Td>
                                        <Td>{item.room111}</Td>
                                        <Td>{item.room113}</Td>
                                        <Td>{item.engineering}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Center>
                </Box>

                <Heading as="h3" fontSize={20} mb={4}>
                    Workshop Pages Coming Soon
                </Heading>

                {/** USE THIS
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
                */}
            </Container>
        </Layout>
    )
}

export default Workshops
