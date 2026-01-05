import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const AIML = () => {
    return (
        <Layout title="AI/ML">
            <Container>
                <Title>
                    AI/ML <Badge>Daniel Santillan | Patrick Christmas</Badge>
                </Title>

                <Paragraph>
                    AI (Artificial Intelligence) and ML (Machine Learning) are revolutionary fields that are reshaping technology and industries. AI refers
                    to the broader concept of creating intelligent systems capable of performing tasks that typically require human intelligence, such as
                    understanding natural language or recognizing patterns. ML, a subset of AI, focuses on developing algorithms that enable systems to learn
                    from and make predictions or decisions based on data. These technologies are driving advancements in areas like autonomous vehicles,
                    personalized recommendations, and predictive analytics. With powerful frameworks and libraries available, such as TensorFlow and PyTorch,
                    AI/ML offers immense potential for innovation and problem-solving.
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

export default AIML;
