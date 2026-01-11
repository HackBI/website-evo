import {
    Container,
    Box,
    Center,
    VStack,
    HStack,
    Button,
    Heading,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { AboutCardText, AboutCardImage } from '../components/about-card'
import AnimatedBox from '../components/animated-box'
import Paragraph from '../components/paragraph'
import SponsorBlock from '../components/sponsor-block'
import Date from '../components/date'

const Index = () => {
    return (
        <Layout>
            <Container maxW="container.lg">
                <Container>
                    <AnimatedBox delay={0.1}>
                        <Date date={"January 17-18, 2026"} raindate={"January 24-25, 2026"} />
                    </AnimatedBox>

                    <AnimatedBox delay={0.15}>
                        <Box mb={4}>
                            <Box flexGrow={1}>
                                <Center>
                                    <Button
                                        as={NextLink}
                                        href="/register"
                                        rightIcon={<ChevronRightIcon />}
                                        bg='cardinal'
                                        size='lg'
                                    >
                                        Register Now - Deadline End of Day Sunday!
                                    </Button>
                                </Center>
                            </Box>
                            <Box
                                flexShrink={0}
                                mt={{ base: 4, md: 0 }}
                                ml={{ md: 6 }}
                                textAlign="center"
                            >
                            </Box>
                        </Box>
                    </AnimatedBox>
                </Container>

                <AnimatedBox delay={0.2}>
                    <Heading as="h3" variant="section-title">About</Heading>
                    <Box pb={2}>
                        <Paragraph>
                            HackBI is an annual hackathon for middle and high school students that has
                            been run by the students of Bishop Ireton High School for 9 consecutive years.
                            At HackBI, you will learn new things and collaborate with others to make your
                            ideas come to life. Check out our{' '}
                            <Link as={NextLink} href="/FAQ" scroll={false}>
                                faq
                            </Link>
                            {' '}if you have any questions.
                        </Paragraph>
                    </Box>

                    <VStack>
                        <HStack>
                            <AboutCardText text="Learn" src="images/about/learn.jpg" />
                            <AboutCardText text="Unite" src="images/about/collaborate.jpg" />
                        </HStack>

                        <HStack>
                            <AboutCardImage text="Pitch" src="images/about/pitch.jpg" />
                            <AboutCardImage text="Celebrate" src="images/about/celebrate.jpg" />
                        </HStack>
                    </VStack>
                </AnimatedBox>

                <AnimatedBox delay={0.25}>
                    <Heading as="h3" variant="section-title">On the web</Heading>

                    <List>
                        <ListItem>
                            <Link href="https://github.com/hackbi" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @hackbi
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://instagram.com/hackbiofficial" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoInstagram />}
                                >
                                    @hackbiofficial
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </AnimatedBox>

                <AnimatedBox delay={0.3}>
                    <SponsorBlock />
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Index