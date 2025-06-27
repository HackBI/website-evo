import {
    Container,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Heading,
    VStack,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../components/layouts/article';
import Date from '../components/date';
import AnimatedBox from "../components/animated-box";
import Paragraph from "../components/paragraph";
import CountrySelector from '../components/country-selector';

const MLHPreRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [school, setSchool] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const [study, setStudy] = useState('');
    const [country, setCountry] = useState('');

    const [mlh1, setMLH1] = useState('');
    const [mlh2, setMLH2] = useState('');
    const [mlh3, setMLH3] = useState('');

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
        formData.append("age", age);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("school", school)
        formData.append("grade_level", gradeLevel);
        formData.append("study", study);
        formData.append("country", country);

        formData.append("MLH_COC", mlh1);
        formData.append("MLH_Terms_Privacy", mlh2);
        formData.append("MLH_Messages", mlh3);

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
                setAge('');
                setEmail('');
                setPhone('');
                setSchool('');
                setGradeLevel('');
                setStudy('');
                
                setMLH1('');
                setMLH2('');
                setMLH3('');
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
                                    <FormLabel>Age</FormLabel>
                                    <Input
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        name="age"
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
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        name="phone"
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>School</FormLabel>
                                    <Input
                                        type="text"
                                        value={school}
                                        onChange={(e) => setSchool(e.target.value)}
                                        name="school"
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
                                <FormControl isRequired>
                                    <FormLabel>Current Level of Study</FormLabel>
                                    <Select
                                        placeholder="Level of Study"
                                        value={study}
                                        onChange={(e) => setStudy(e.target.value)}
                                        name="study"
                                    >
                                        <option value="Middle School">Middle School</option>
                                        <option value="High School">High School</option>
                                    </Select>
                                </FormControl>
                                <CountrySelector
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    name="country"
                                />

                                <FormControl isRequired>
                                    <FormLabel>
                                        I have read and agree to the{' '}<Link href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank">MLH Code of Conduct</Link>
                                    </FormLabel>
                                    <Select
                                        placeholder="Select"
                                        value={mlh1}
                                        onChange={(e) => setMLH1(e.target.value)}
                                        name="MLH_COC"
                                    >
                                        <option value="Agree">I Agree</option>
                                        <option value="Disagree">I Disagree</option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>
                                        I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, 
                                        and MLH administration in-line with the MLH Privacy Policy. I further agree to the terms of both the MLH Contest Terms and Conditions
                                    </FormLabel>
                                    <Select
                                        placeholder="Select"
                                        value={mlh2}
                                        onChange={(e) => setMLH2(e.target.value)}
                                        name="MLH_Terms_Privacy"
                                    >
                                        <option value="Agree">I Agree</option>
                                        <option value="Disagree">I Disagree</option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements</FormLabel>
                                    <Select
                                        placeholder="Select"
                                        value={mlh3}
                                        onChange={(e) => setMLH3(e.target.value)}
                                        name="MLH_Messages"
                                    >
                                        <option value="Agree">I Agree</option>
                                        <option value="Disagree">I Disagree</option>
                                    </Select>
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

export default MLHPreRegister