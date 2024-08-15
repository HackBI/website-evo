import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title, Meta } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const VideoEditing = () => {
    return (
        <Layout title="Video Editing">
            <Container>
                <Title>
                    Video Editing <Badge>Emmanuel Ehumah | Nick Danshaw</Badge>
                </Title>

                <Paragraph>
                    Video editing is a dynamic and creative field that involves assembling and manipulating video footage to produce polished
                    and engaging content. Using powerful editing software, editors can enhance visual and audio elements, apply effects, and
                    craft seamless narratives that captivate audiences. This process includes tasks such as cutting and splicing clips, color
                    correction, sound design, and adding transitions. Video editing is essential in various industries, from filmmaking and
                    television to marketing and social media. With tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve,
                    video editing provides the flexibility to transform raw footage into compelling stories and visual experiences.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Required Software</Meta>
                        <span>Adobe Premiere Pro</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default VideoEditing;