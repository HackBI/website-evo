import {
    Container,
    Badge,
} from '@chakra-ui/react'
import Layout from "../../components/layouts/article";
import { Title } from '../../components/workshop'
import Paragraph from '../../components/paragraph';

const DevEnvironment = () => {
    return (
        <Layout title="Creating a Dev Environment">
            <Container>
                <Title>
                    Creating a Dev Environment <Badge>Bernadette Phan | Astrid Urman</Badge>
                </Title>

                <Paragraph>
                    A very crucial yet sometimes overlooked aspect of coding and software development is the developer's
                    environment itself. A dev environment is the workspace containing anything developers need to write, test,
                    and debug code. Many programming languages have specialized software, or integrated development environments
                    (IDEs) that facilitate the programming experience for users. Having an organized dev environment, including
                    proper file locations, applications, and add-ons, will make coding easier and more fun. Beginner hackers
                    should attend this workshop to properly download software necessary for further workshops if they have not
                    done so yet.
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default DevEnvironment;
