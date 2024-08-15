import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const FinchRobots = () => {
    return (
        <Layout title="Finch Robots">
            <Container>
                <Title>
                    Finch Robots <Badge>Nora Hixson | Ethan Miller</Badge>
                </Title>

                <Paragraph>
                    Finch Robots are a fantastic platform for introducing robotics and programming to learners of all ages. These user-friendly
                    robots are designed to be both educational and fun, providing hands-on experience with coding and robotics principles. With
                    a variety of sensors and motors, Finch Robots can perform a range of tasks and follow complex instructions, making them
                    ideal for teaching concepts such as problem-solving, logic, and algorithm development. The intuitive software and supportive
                    community resources make it easy to start building and programming, whether you're a beginner or looking to explore advanced
                    robotics. Finch Robots offer a gateway to understanding the fundamentals of robotics while fostering creativity and technical skills.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Java JDK and Finch API</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default FinchRobots;
