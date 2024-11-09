import {
    Container,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Text,
    VStack,
    useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../components/layouts/article';
import AnimatedBox from "../components/animated-box";
import CryptoJS from 'crypto-js';
require('dotenv').config()

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
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

        const apiURL = String(process.env.NEXT_PUBLIC_PICKET_API_URL);
        const apiKey = String(process.env.NEXT_PUBLIC_PICKET_API_KEY);
        const hashKey = String(process.env.NEXT_PUBLIC_PICKET_HASH_KEY);
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const iterations = String(process.env.NEXT_PUBLIC_PICKET_HASH_ITERATIONS);
        const firstSubIndex = String(process.env.NEXT_PUBLIC_PICKET_FIRST_SUB_INDEX);
        const secondSubIndex = String(process.env.NEXT_PUBLIC_PICKET_SECOND_SUB_INDEX);
        const splitIndex = String(process.env.NEXT_PUBLIC_PICKET_SPLIT_INDEX);

        console.log("URL: " + process.env.NEXT_PUBLIC_PICKET_API_KEY);

        const secret = computeSecret(
            apiKey,
            hashKey,
            timestamp,
            parseInt(iterations, 10),
            parseInt(firstSubIndex, 10),
            parseInt(secondSubIndex, 10),
            parseInt(splitIndex, 10)
        );

        const payload = {
            first_name: firstName,
            last_name: lastName,
            email,
            subject,
            message,
        };

        try {
            const response = await fetch(`${apiURL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-request-timestamp': timestamp,
                    'x-request-secret': secret,
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorMsg = await response.text()
                throw new Error(`${errorMsg}`);
            }

            toast({
                title: "Success!",
                description: "Your message was submitted.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "An error occurred while processing:",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Layout title="Contact">
            <Container>
                <AnimatedBox delay={0.1}>
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
                                    <FormLabel>Subject</FormLabel>
                                    <Input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Message</FormLabel>
                                    <Input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </FormControl>
                                <Button type="submit" colorScheme="cyan" width="full">
                                    Submit
                                </Button>
                                <Text fontSize="sm" color="gray.500" align="center">
                                    You can also email us at <Link href="mailto:hackbi@bishopireton.org">hackbi@bishopireton.org</Link>
                                </Text>
                            </VStack>
                        </form>
                    </Box>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Contact
