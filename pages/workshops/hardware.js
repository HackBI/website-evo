import {
    Container,
    Badge,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const ComputerHardware = () => {
    return (
        <Layout title="Computer Hardware">
            <Container>
                <Title>
                    Computer Hardware <Badge>Nate DeGrandi | Matthias Borges</Badge>
                </Title>

                <Paragraph>
                    Computer hardware is the physical foundation of computing systems, encompassing everything from the central processing unit (CPU)
                    and memory to storage devices and peripherals. Understanding hardware is crucial for anyone involved in technology, as it involves
                    not only assembling and troubleshooting components but also optimizing performance and ensuring compatibility. This field covers
                    a wide range of topics, including motherboard architecture, data storage solutions, and input/output devices. Hands-on experience
                    with hardware allows individuals to gain insights into how computers operate, diagnose issues, and upgrade systems. With rapidly
                    evolving technology, staying current with hardware advancements is essential for maximizing efficiency and performance in any
                    computing environment.
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default ComputerHardware;
