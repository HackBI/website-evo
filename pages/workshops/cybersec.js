import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const Cybersecurity = () => {
    return (
        <Layout title="Cybersecurity">
            <Container>
                <Title>
                    Cybersecurity <Badge>Anthony Amedome | Nick Danshaw</Badge>
                </Title>

                <Paragraph>
                    Cybersecurity is a critical field dedicated to protecting systems, networks, and data from digital attacks and breaches. As cyber threats become
                    increasingly sophisticated, mastering cybersecurity practices is essential for safeguarding sensitive information and ensuring the integrity of digital
                    infrastructures. This domain covers a wide range of topics, from ethical hacking and penetration testing to threat detection and incident response. With
                    a focus on practical strategies and cutting-edge technologies, cybersecurity equips professionals to stay ahead of emerging threats and defend against
                    malicious actors, making it a dynamic and ever-evolving field with significant impact.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span></span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Cybersecurity;