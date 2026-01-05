import {
    Container,
    Badge,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const EngineeringCircuits = () => {
    return (
        <Layout title="Engineering Circuits">
            <Container>
                <Title>
                    Engineering Circuits <Badge>Daniel Santillian | Dallas Dsouza</Badge>
                </Title>

                <Paragraph>
                    Engineering Circuits is a fascinating field that explores the fundamental principles of electrical and electronic circuits. This
                    area of study involves designing, analyzing, and constructing circuits to understand how electrical systems operate and interact.
                    From basic components like resistors and capacitors to complex integrated circuits, learning about circuits provides essential
                    knowledge for developing a wide range of technologies. Whether you're working on creating innovative electronic devices or
                    solving real-world engineering problems, mastering circuit design and analysis is crucial. With hands-on experience in circuit
                    building and simulation tools, you'll gain valuable skills that are applicable in various industries, from consumer
                    electronics to industrial automation.
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default EngineeringCircuits;
