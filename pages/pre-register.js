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
import Layout from '../components/layouts/article';
import AnimatedBox from "../components/animated-box";
import Paragraph from "../components/paragraph";
import CryptoJS from 'crypto-js';
require('dotenv').config();

const PreRegister = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const toast = useToast();

    const computeSecret = (apiKey, hashKey, timestamp, iterations, firstSubIndex, secondSubIndex, splitIndex) => {
        const time1 = timestamp.substring(0, splitIndex);
        const time2 = timestamp.substring(splitIndex);

        let secret = apiKey.substring(0, firstSubIndex) + time1 + apiKey.substring(firstSubIndex, secondSubIndex) + time2 + apiKey.substring(secondSubIndex);

        let secretBytes = CryptoJS.enc.Utf8.parse(secret);

        for (let i = 0; i < iterations; i++) {
            let hmac = CryptoJS.HmacSHA256(secretBytes, hashKey);
            secretBytes = hmac;
        }

        return secretBytes.toString(CryptoJS.enc.Hex);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiURL = process.env.NEXT_PUBLIC_PICKET_API_URL;
        const apiKey = process.env.NEXT_PUBLIC_PICKET_API_KEY;
        const hashKey = process.env.NEXT_PUBLIC_PICKET_HASH_KEY;
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const iterations = process.env.NEXT_PUBLIC_PICKET_HASH_ITERATIONS;
        const firstSubIndex = process.env.NEXT_PUBLIC_PICKET_FIRST_SUB_INDEX;
        const secondSubIndex = process.env.NEXT_PUBLIC_PICKET_SECOND_SUB_INDEX;
        const splitIndex = process.env.NEXT_PUBLIC_PICKET_SPLIT_INDEX;

        const secret = computeSecret(
            apiKey.toString(),
            hashKey.toString(),
            timestamp.toString(),
            parseInt(iterations, 10),
            parseInt(firstSubIndex, 10),
            parseInt(secondSubIndex, 10),
            parseInt(splitIndex, 10)
        );


        const gradeLevelInt = parseInt(gradeLevel, 10);
        if (isNaN(gradeLevelInt) || gradeLevelInt <= 0) {
            toast({
                title: "Invalid Grade Level",
                description: "Please enter a positive integer for the grade level.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        const payload = {
            first_name: firstName,
            last_name: lastName,
            email,
            grade_level: gradeLevelInt,
        };

        try {
            const response = await fetch(`${apiURL}/pre-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-request-timestamp': timestamp,
                    'x-request-secret': secret,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
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
                title: "An error occurred while processing, try again later",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Layout title="Pre-Register">
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
                        our email list to be notified when registration is open.
                    </Paragraph>
                </Box>

                <AnimatedBox delay={0.15}>
                    <Box maxW="md" mx="auto" pb={6}>
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
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
                                <Button type="submit" colorScheme="cyan" width="full">
                                    Submit
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </AnimatedBox>
            </Container>
        </Layout>
    );
};

export default PreRegister;
