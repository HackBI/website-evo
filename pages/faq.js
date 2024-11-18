import {
    Container,
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"

const FAQ = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.700')
    const headingColor = useColorModeValue('#b02010', '#b02010')

    return (
        <Layout title="FAQ">
            <Container maxW="container.md" py={8}>
                <Accordion allowToggle>
                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    What is HackBI?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            HackBI is a student-run hackathon at Bishop Ireton High School. You'll have 24 hours to
                            learn a variety of new things through our workshops, collaborate, and create a project!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    What is a hackathon?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            Hackathons are fun events in which teams and individuals create their own custom programming
                            projects to showcase and potentially win prizes for!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    Why should I come to HackBI?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            Whether you've never programmed before or have been doing it for a few years, HackBI will
                            be a great place to better your skills, learn new things, and meet new people - all while
                            having a lot of fun doing so! Plus, we'll have games, raffles, free food and more!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    Do I need any programming experience to come?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            No! HackBI is the perfect place to learn! We'll have workshops throughout the event to teach you new things.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    Who can attend HackBI?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            HackBI is open to all high schoolers, who will do a full 24 hours of hacking, and middle schoolers, who hack for a day.
                            <br /><br />
                            If you're an adult and would like to come, consider <a href="/pre-register" style={{ textDecoration: 'underline' }}>volunteering</a>!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    How much does HackBI cost?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            HackBI is completely free!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    Are there prizes?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            Of course! There will be prizes for each category given to each individual in a team (4 people max).
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    What should I bring?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            A computer and charger.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <Heading as="h3">
                            <AccordionButton _expanded={{ bg: headingColor, color: 'white' }}>
                                <Box flex="1" textAlign="left">
                                    Do I need to come with a team?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4} bg={bgColor} rounded="md">
                            You can come with a pre-determined team if you want. If you're coming individually, there will
                            be an opportunity at the beginning to join a team if you'd like.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Layout>
    )
}

export default FAQ
