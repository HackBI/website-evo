import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const Rust = () => {
    return (
        <Layout title="Rust">
            <Container>
                <Title>
                    Rust <Badge>Michael Bobrowski | Ethan Miller</Badge>
                </Title>

                <Paragraph>
                    Rust is a modern programming language designed with a focus on safety, speed, and concurrency.
                    Its standout feature is its ownership model, which enforces strict rules about how memory is managed,
                    helping developers avoid common bugs like null pointer dereferences and data races without sacrificing
                    performance. Rust's syntax is expressive and powerful, making it ideal for writing fast and reliable systems
                    software, from web servers to operating systems. With a growing ecosystem and strong community support, Rust
                    is rapidly gaining popularity among developers who seek a blend of performance and safety in their applications.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>rustup (cargo, rustc)</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Rust;
