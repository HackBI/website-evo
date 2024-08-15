import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, WorkImage, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const ImageEditing = () => {
    return (
        <Layout title="Image Editing">
            <Container>
                <Title>
                    Image Editing <Badge>Emmanuel Ehumah | Jake Clark</Badge>
                </Title>

                <Paragraph>
                    Image editing is an essential skill for creating visually compelling and polished graphics. It involves adjusting
                    and enhancing images to improve their quality, correct imperfections, and achieve artistic effects. Using advanced
                    software, editors can manipulate colors, remove unwanted elements, apply filters, and combine multiple images into
                    cohesive designs. This process is crucial for a range of applications, from professional photography and graphic
                    design to marketing materials and social media content. Tools like Adobe Photoshop and GIMP offer a wide array
                    of features to refine and perfect images, making image editing a key component of visual communication and design.
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

export default ImageEditing;
