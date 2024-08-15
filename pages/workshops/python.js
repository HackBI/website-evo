import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const Python = () => {
    return (
        <Layout title="Python">
            <Container>
                <Title>
                    Python <Badge>Jake Clark | Virginia Cheatham</Badge>
                </Title>

                <Paragraph>
                    Python is a widely-used programming language known for its simplicity and ease of learning. While its straightforward syntax makes it
                    a good choice for beginners and rapid development, Python's performance can be a drawback for more computationally intensive tasks.
                    It's often criticized for being slower than compiled languages like C++ or Java, which can be a limiting factor for applications requiring
                    high performance. Nonetheless, Python's extensive libraries and frameworks offer significant support for tasks in web development,
                    data analysis, and automation. Its versatility ensures that it remains a popular, though sometimes less efficient, choice for a variety of programming needs.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Python Interpreter</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Python;