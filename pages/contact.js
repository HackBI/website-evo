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

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:hackbi@bishopireton.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage: ${message}`)}`;

        window.location.href = mailtoLink;
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
                                <Button type="submit" bg="cardinal" width="full">
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
    );
};

export default Contact;
