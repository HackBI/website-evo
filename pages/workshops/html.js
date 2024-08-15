import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const HTML = () => {
    return (
        <Layout title="HTML">
            <Container>
                <Title>
                    HTML <Badge>Karissa Dinh | Chloe Jackson | Sariel Angelo Cruz</Badge>
                </Title>

                <Paragraph>
                    HTML (HyperText Markup Language) is the foundational language of the web, used for structuring and presenting content
                    on the internet. It provides the basic building blocks for web pages, allowing developers to create everything from
                    simple text documents to complex interactive sites. HTML's tag-based syntax makes it easy to understand and use, while
                    its integration with CSS and JavaScript enables the creation of rich, styled, and dynamic web experiences. As the core
                    technology behind web development, a solid grasp of HTML is essential for anyone looking to build and design web content.
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

export default HTML;
