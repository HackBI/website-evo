import {
    Container,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    VStack,
    useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../components/layouts/article';
import Date from '../components/date';
import AnimatedBox from "../components/animated-box";
import Paragraph from "../components/paragraph";

const PreRegister = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !gradeLevel) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        const formData = new FormData();
        formData.append("access_key", "dd1048b5-3b25-46a5-8f6c-e0af175fd446");
        formData.append("subject", "New HackBI Pre-Registration Submission");
        formData.append("from_name", "HackBI Pre-Register");
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("grade_level", gradeLevel);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await res.json();

            if (result.success) {
                toast({
                    title: "Success!",
                    description: "Your pre-registration has been recorded.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });

                setFirstName('');
                setLastName('');
                setEmail('');
                setGradeLevel('');
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
        <Layout title="Pre-Register">
            <Container>
                <AnimatedBox delay={0.1}>
                    <Date date={"January 17-18, 2026"} raindate={"January 24-25, 2026"} />
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
                                        name="first_name"
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        name="last_name"
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
                                    <FormLabel>Grade Level</FormLabel>
                                    <Input
                                        type="number"
                                        value={gradeLevel}
                                        onChange={(e) => setGradeLevel(e.target.value)}
                                        name="grade_level"
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