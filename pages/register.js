import {
    Container,
    Flex,
    Spacer,
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import AnimatedBox from "../components/animated-box"
import StudentRegistration from "../components/student-registration"
import AdultRegistration from "../components/adult-registration"

const Register = () => {
    return (
        <Layout title="Register">
            <Container maxW="container.md">
                <AnimatedBox delay={0.1}>
                    <Date date={"January 17-18, 2026"} raindate={"January 24-25, 2026"} />
                </AnimatedBox>

                <AnimatedBox delay={0.15}>
                    <Flex>
                        <StudentRegistration />

                        <Spacer />

                        <AdultRegistration />
                    </Flex>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Register