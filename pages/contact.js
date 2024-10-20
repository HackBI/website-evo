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
require('dotenv').config()

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiURL = process.env.NEXT_PUBLIC_PICKET_API_URL
        const apiKey = process.env.NEXT_PUBLIC_PICKET_API_KEY

        const payload = {
            firstName,
            lastName,
            email,
            subject,
            message,
        };

        try {
            const response = await fetch(`${apiURL}/`, {
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
