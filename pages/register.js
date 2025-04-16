import {
    Container,
    Box,
    Flex,
    Spacer,
    Button,
    Text,
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
import Layout from "../components/layouts/article"
import AnimatedBox from "../components/animated-box"
import StudentRegistration from "../components/student-registration"
import AdultRegistration from "../components/adult-registration"

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

                        <AdultRegistration />
                    </Flex>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Register