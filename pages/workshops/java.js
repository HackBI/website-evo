import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const Java = () => {
    return (
        <Layout title="Java">
            <Container>
                <Title>
                    Java <Badge>Daniel Santillian | Ethan Miller</Badge>
                </Title>

                <Paragraph>
                    Java is a versatile and widely-used programming language renowned for its portability, scalability,
                    and ease of use. Built on the principle of "write once, run anywhere," Java's platform independence
                    allows developers to create applications that run seamlessly across various operating systems. Its
                    object-oriented design promotes code reuse and organization, while its robust standard library provides
                    a wealth of tools for everything from web development to enterprise solutions. With a strong ecosystem,
                    extensive documentation, and a vibrant community, Java remains a cornerstone of the programming world,
                    powering everything from mobile apps to large-scale enterprise systems.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Java JDK</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Java;