import {
    Box,
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

const Date = ({date, raindate}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
            <Box pb='1'>
                <Text as='b' fontSize='xl'>{date}</Text>
            </Box>

            <Button onClick={onOpen} bg='cardinal'>Rain Date</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>HackBI Rain Date</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        In case of any inclement weather, HackBI will occur on <b>{raindate}</b>.
                    </ModalBody>

                    <ModalFooter>
                        <Button bg='cardinal' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Date