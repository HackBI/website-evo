import {
    Container,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react'
import Banner from '../components/banner'
import Layout from '../components/layouts/article'

const Page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout>
            <Banner />

            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                    <b>January 18-19, 2025</b>

                    <br></br>
                    <Button onClick={onOpen}>Rain Date</Button>

                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>HackBI Rain Date</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                In case of any inclement weather, HackBI will occur on <b>January 25-26, 2025</b>.
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Container>
        </Layout>
    )
}

export default Page
