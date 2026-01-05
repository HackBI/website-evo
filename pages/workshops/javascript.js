import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const JavaScript = () => {
    return (
        <Layout title="WebDev - JavaScript">
            <Container>
                <Title>
                    WebDev - JavaScript <Badge>Mirabelle Brantley | Virginia Cheatham</Badge>
                </Title>

                <Paragraph>
                    JavaScript is a high-level programming language implemented primarily to add complexity on web pages. JavaScript allows web developers to
                    make content updates, interactive features, scrollable functions, and animated graphics, immersing Internet visitors. JavaScript is the top
                    layer of the three-language website development technology (alongside HTML and CSS), meshing style and functionality to create an optimal
                    website experience. JavaScript is also used in server-side operations, handling real-time applications and backend servers and databases. With
                    JavaScript's usability in full-stack development and a large community of programmers using JavaScript daily, it is one of the most important
                    languages to learn in the computer science and web development fields.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Text Editor (e.g., VSCode, NeoVim)</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default JavaScript;