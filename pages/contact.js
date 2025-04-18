import {
    Container,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
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

    const handleMessageChange = (e) => {
        setMessage(e.target.value);

        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !subject || !message) {
            toast({
                title: "Missing Fields",
                description: "Please fill out all fields before submitting.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        const formData = new FormData();
        formData.append("access_key", "dd1048b5-3b25-46a5-8f6c-e0af175fd446");
        formData.append("from_name", `${firstName} ${lastName}`);
        formData.append("subject", subject);
        formData.append("email", email);
        formData.append("message", message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Message Sent!",
                    description: "We have received your message and will get back to you soon.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                // Reset form
                setFirstName('');
                setLastName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                throw new Error(result.message || "Something went wrong.");
            }
        } catch (error) {
            toast({
                title: "Submission Failed",
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
                                        name="email"
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Subject</FormLabel>
                                    <Input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        name="subject"
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Enter your message here"
                                        resize="none"
                                        minHeight="150px"
                                        style={{ overflow: 'hidden' }}
                                        name="message"
                                    />
                                </FormControl>
                                <Button type="submit" bg="cardinal" color="white" width="full">
                                    Submit
                                </Button>
                                <Text fontSize="sm" color="gray.500" align="center">
                                    You can also email us at{' '}
                                    <Link href="mailto:hackbi@bishopireton.org" color="cyan.600">
                                        hackbi@bishopireton.org
                                    </Link>
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