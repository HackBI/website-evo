import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
require('dotenv').config()

const PreRegister = () => {
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
        <Box maxW="md" mx="auto" mt="10">
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
    )
}

export default PreRegister