import {
    Box,
    Button,
    Center,
    Heading,
    Divider,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { SiEventbrite } from "react-icons/si"

const StudentRegistration = () => {
    return (
        <Box p={6} width="29ch" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
            <Center>
                <Heading as="h3" variant="section-title">Student Registration - Closed</Heading>
            </Center>

            {/** 
            <Center>
                <Button
                    as={NextLink}
                    href="https://www.eventbrite.com/e/hackbi-ix-tickets-1435832576889"
                    bg='cardinal'
                    target="_blank"
                    leftIcon={<SiEventbrite />}
                >Register</Button>
            </Center>

            <Center>
                <Heading as="h3" variant="section-title">6th and 7th Grade Student Waitlist</Heading>
            </Center>

            <Center>
                <Button
                    as={NextLink}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeO7pBmJVPgsEmmXLYN-Yk2XFCRJE7Oz5uNTV8v0yEVxSEsqw/viewform"
                    bg='cardinal'
                    target="_blank"
                >Register</Button>
            </Center>
            */}

            <Heading as="h3" variant="section-title">Forms</Heading>
            Non-Ireton students must print, fill out, and bring
            the forms to the hackathon
            <Divider my={6} />

            <Center>
                <Box>
                    <Box>
                        <Link href="/forms/guest_permission_form.pdf" target="_blank" download="HackBI Guest Permission Form">
                            Guest Permission Form
                        </Link>
                    </Box>
                </Box>
            </Center>
            <Center>
                <Box>
                    <Link href="/forms/emergency_care_form.pdf" target="_blank" download="HackBI Emergency Care Form">
                        Emergency Care Form
                    </Link>
                </Box>
            </Center>
        </Box>
    )
}

export default StudentRegistration