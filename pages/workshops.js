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
        { id: 1, time: "1100-1200", room103: "", room105: "", room107: "", room111: "Creating a Dev Environment", room113: "Keynote", engineering: "" },
        { id: 2, time: "1300-1400", room103: "", room105: "", room107: "Unity", room111: "Python", room113: "", engineering: "Circuits" },
        { id: 3, time: "1415-1515", room103: "", room105: "", room107: "Java Graphics", room111: "HTML/CSS", room113: "AI/ML", engineering: "Robots" },
        { id: 4, time: "1700-1800", room103: "", room105: "", room107: "JavaScript", room111: "Java", room113: "MLH Mini-Session", engineering: "Finch Robots" },
        { id: 5, time: "1900-2000", room103: "", room105: "", room107: "AWS", room111: "", room113: "MLH GitHub/Copilot", engineering: "Hardware"}
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

                <br/>

                <SimpleGrid columns={[1, 2, 3]} gap={6}>
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
                            title="Java Graphics"
                            id="graphics"
                            src="images/workshops/graphics.png"
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
                    </AnimatedBox><AnimatedBox delay={0.3}>
                        <WorkshopGridItem
                            title="Dev Environment"
                            id="devenvironment"
                            src="images/workshops/devenv.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.3}>
                        <WorkshopGridItem
                            title="JavaScript"
                            id="javascript"
                            src="images/workshops/javascript.png"
                        />
                    </AnimatedBox>
                    <AnimatedBox delay={0.3}>
                        <WorkshopGridItem
                            title="AWS"
                            id="aws"
                            src="images/workshops/aws.png"
                        />
                    </AnimatedBox>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Workshops
