import {
    Container,
    Badge,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const EngineeringRobots = () => {
    return (
        <Layout title="Engineering Robots">
            <Container>
                <Title>
                    Engineering Robots <Badge>Henry Leopold | Sariel Angelo Cruz</Badge>
                </Title>

                <Paragraph>
                    Engineering Robots combines mechanical design with electronics and programming to create dynamic, wheeled robots.
                    These robots, akin to remote-controlled cars, offer an exciting way to explore robotics and automation. The field
                    involves integrating motors, sensors, and control systems to build robots capable of movement and interaction with
                    their environment. This hands-on experience provides valuable insights into the principles of robotics, including
                    control algorithms and system integration. Whether you're developing autonomous navigation or enhancing robot
                    functionality, engineering robots offers a practical approach to learning about robotics and engineering principles
                    in a fun and engaging way.
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default EngineeringRobots;
