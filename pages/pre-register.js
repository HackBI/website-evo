import {
    Container,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Text,
    VStack,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    useToast,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import AnimatedBox from "../components/animated-box";
import Paragraph from "../components/paragraph";
require('dotenv').config()

const PreRegister = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiURL = process.env.NEXT_PUBLIC_PICKET_API_URL
        const apiKey = process.env.NEXT_PUBLIC_PICKET_API_KEY

        const payload = {
            api_key: apiKey,
            name,
            email,
            grade_level: parseInt(gradeLevel, 10)
        };

        try {
            const response = await fetch(`${apiURL}/pre-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            toast({
                title: "Success!",
                description: "Your registration was submitted.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "An error occurred.",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Container>
            <AnimatedBox delay={0.1}>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                    <Box pb='1'>
                        <Text as='b'>January 18-19, 2025</Text>
                    </Box>

                    <Button onClick={onOpen} colorScheme='cyan'>Rain Date</Button>

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
            </AnimatedBox>

            <Box pb={4}>
                <Heading as="h3" variant="section-title">Get Notified</Heading>
                <Paragraph>
                    Enter your name, email address, and current grade level to be added to
                    our email list to be ontified when registration is open
                </Paragraph>
            </Box>

            <AnimatedBox delay={0.15}>
                <Box maxW="md" mx="auto" pb={6}>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Grade Level</FormLabel>
                                <Input
                                    type="number"
                                    value={gradeLevel}
                                    onChange={(e) => setGradeLevel(e.target.value)}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" width="full">
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </AnimatedBox>
        </Container>
    )
}

export default PreRegister