import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const JavaSwingGraphics = () => {
    return (
        <Layout title="Java Swing Graphics">
            <Container>
                <Title>
                    Java Swing Graphics <Badge>Patrick Costello | Dallas Dsouza</Badge>
                </Title>

                <Paragraph>
                    Java Swing is a versatile toolkit for building graphical user interfaces (GUIs) in Java. Its rich set of components and robust
                    architecture make it an ideal choice for developing visually appealing and interactive desktop applications. With Swing, developers
                    can create everything from simple windows to complex layouts with sophisticated controls and custom graphics. Swing's flexible
                    design and integration with Java's event handling system enable the creation of responsive and dynamic user interfaces.
                    Whether you're building a utility tool or a full-featured application, Java Swing provides the tools needed to craft engaging
                    and user-friendly graphical interfaces.
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

export default JavaSwingGraphics;
