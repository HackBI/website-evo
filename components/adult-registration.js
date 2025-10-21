import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    Divider,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaRegLightbulb } from "react-icons/fa6"

const AdultRegistration = () => {
    return (
        <Box p={6} width="29ch" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
            <Center>
                <Heading as="h3" variant="section-title">Adult Registration</Heading>
            </Center>
            Sign-up to be an adult volunteer, mentor, or judge!
            <Divider my={6} />

            <Heading as="h3" variant="section-title">Adult Volunteers</Heading>
            <Text fontSize="xs">
                Supervise and monitor students
            </Text>
            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-59112269-hack#/" target="_blank">
                <Button
                    variant="ghost"
                    color={useColorModeValue('#f0a822', '#f0a822')}
                    leftIcon={<FaRegLightbulb />}
                >
                    Sign Up!
                </Button>
            </Link>

            <Heading as="h3" variant="section-title">Mentors</Heading>
            <Text fontSize="xs">
                Offer technical advice and guidance to hackers
            </Text>
            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-59112364-hack#/" target="_blank">
                <Button
                    variant="ghost"
                    color={useColorModeValue('#f0a822', '#f0a822')}
                    leftIcon={<FaRegLightbulb />}
                >
                    Sign Up!
                </Button>
            </Link>

            <Heading as="h3" variant="section-title">Judges</Heading>
            <Text fontSize="xs">
                Attend student presentations and choose the best projects to receive prizes - SIGN UP COMING SOON!
            </Text>

            {/* USE THIS FOR LATER....
            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-59112268-hack#/" target="_blank">
                <Button
                    variant="ghost"
                    color={useColorModeValue('#f0a822', '#f0a822')}
                    leftIcon={<FaRegLightbulb />}
                >
                    Sign Up!
                </Button>
            </Link>
            */}

        </Box>
    )
}

export default AdultRegistration