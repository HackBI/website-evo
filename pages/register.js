import {
    Container,
    Flex,
    Spacer,
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import AnimatedBox from "../components/animated-box"
import Date from "../components/date"
import StudentRegistration from "../components/student-registration"
import AdultRegistration from "../components/adult-registration"

const Register = () => {
    return (
        <Layout title="Register">
            <Container maxW="container.md">
                <AnimatedBox delay={0.1}>
                    <Date date={"January 16-17, 2027"} raindate={"January 23-24, 2027"} />
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