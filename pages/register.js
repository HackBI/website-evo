import {
    Container,
    Box,
    Flex,
    Spacer,
    Divider,
    Button,
    Center,
    Heading,
    Text,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react"
import { FaRegLightbulb } from "react-icons/fa6"
import NextLink from "next/link"
import Layout from "../components/layouts/article"
import AnimatedBox from "../components/animated-box"
import StudentRegistration from "../components/student-registration"

const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout title="Register">
            <Container maxW="container.md">
                <AnimatedBox delay={0.1}>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        <Box pb='1'>
                            <Text as='b' fontSize='xl'>January 17-18, 2026</Text>
                        </Box>

                        <Button onClick={onOpen} bg='cardinal'>Rain Date</Button>

                        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>HackBI Rain Date</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    In case of any inclement weather, HackBI will occur on <b>January 24-25, 2026</b>.
                                </ModalBody>

                                <ModalFooter>
                                    <Button bg='cardinal' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </AnimatedBox>

                <AnimatedBox delay={0.15}>
                    <Flex>
                        <StudentRegistration />

                        <Spacer />

                        <Box p={6} width="29ch" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
                            <Center>
                                <Heading as="h3" variant="section-title">Adult Registration</Heading>
                            </Center>
                            Sign-up to be an adult volunteer, mentor, or judge!
                            <Divider my={6} />

                            <Heading as="h3" variant="section-title">Adult Volunteers</Heading>
                            <Text fontSize="xs">
                                Supervise and monitor students
                            </Text>
                            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-52416101-hack" target="_blank">
                                <Button
                                    variant="ghost"
                                    color={useColorModeValue('#f0a822', '#f0a822')}
                                    leftIcon={<FaRegLightbulb />}
                                >
                                    Sign Up!
                                </Button>
                            </Link>

                            <Heading as="h3" variant="section-title">Mentors</Heading>
                            <Text fontSize="xs">
                                Offer technical advice and guidance to hackers
                            </Text>
                            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-52416199-hack" target="_blank">
                                <Button
                                    variant="ghost"
                                    color={useColorModeValue('#f0a822', '#f0a822')}
                                    leftIcon={<FaRegLightbulb />}
                                >
                                    Sign Up!
                                </Button>
                            </Link>

                            <Heading as="h3" variant="section-title">Judges</Heading>
                            <Text fontSize="xs">
                                Attend student presentations and choose the best projects to receive prizes
                            </Text>
                            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-52416142-hack" target="_blank">
                                <Button
                                    variant="ghost"
                                    color={useColorModeValue('#f0a822', '#f0a822')}
                                    leftIcon={<FaRegLightbulb />}
                                >
                                    Sign Up!
                                </Button>
                            </Link>
                        </Box>
                    </Flex>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Register