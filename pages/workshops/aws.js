import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const AWS= () => {
    return (
        <Layout title="AWS">
            <Container>
                <Title>
                    AWS <Badge>Jouhn Borja (AWS) | Bernadette Phan</Badge>
                </Title>

                <Paragraph>
                    Cloud computing is one of the most popular forms of computing in recent years. With organizations of every industry and type requiring
                    large computing resources, cloud providers offer pay-as-you-go servers with efficient IT resources. Today, cloud providers like Amazon
                    Web Services and Cloudflare power most of the Internet's web pages and servers. Cloud computing's agility, elasticity, and global proximity
                    allow for faster innovation and data backup for the world's most important services, such as healthcare, software development, and email.
                    This workshop is led by Jouhn Borja, a principal Enterprise Account Engineer at Amazon Web Services. 
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Web Browser</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default AWS;