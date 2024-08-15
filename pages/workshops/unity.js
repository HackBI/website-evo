import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const Unity = () => {
    return (
        <Layout title="Unity">
            <Container>
                <Title>
                    Unity <Badge>Patrick Kessmeier| David De Costa</Badge>
                </Title>

                <Paragraph>
                    Unity is a powerful and flexible game development engine renowned for its user-friendly interface and robust feature set. It empowers
                    developers to create immersive 2D and 3D experiences, from mobile games to virtual reality applications. Unity's intuitive editor,
                    extensive asset store, and support for multiple platforms make it a go-to choice for both indie developers and large studios. With a
                    strong community and a wealth of resources, Unity provides the tools needed to bring creative visions to life and streamline the development
                    process, making it an excellent choice for building engaging and high-quality interactive experiences.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Unity Hub and Unity Editor</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Unity;