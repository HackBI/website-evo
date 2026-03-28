import {
    Container,
    Box,
    Center,
    VStack,
    HStack,
    Button,
    Link,
    List,
    ListItem,
    Heading,
    SimpleGrid,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
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
import { WorkshopGridItem } from '../components/grid-item'
import FAQ from '../components/faq'

const Index = () => {
    return (
        <Layout>
            <Container maxW="container.lg">
                <Heading as="h3" variant="title">
                    Hack BI IX has officially concluded. Stay tuned for Hack BI X in January 2027!
                </Heading>
                {/*

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
                                        href="/" // Make /register
                                        rightIcon={<ChevronRightIcon />}
                                        bg='cardinal'
                                        size='lg'
                                    >
                                        Registration Closed
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
                */}

                <AnimatedBox delay={0.2}>
                    <Heading as="h3" variant="section-title">What is Hack BI?</Heading>
                    <Box pb={2}>
                        <Paragraph>
                            Hack BI is an annual hackathon for middle and high school students that has
                            been run by the students of Bishop Ireton High School for 9 consecutive years.
                            At HackBI, you will learn new things and collaborate with others to make your
                            ideas come to life. Check out our{' '}
                            <Link as={NextLink} href="/faq" scroll={false}>
                                FAQ
                            </Link>
                            {' '}if you have any questions.
                        </Paragraph>
                    </Box>

                <VStack>
                    <HStack>
                        <a href="#learn">
                            <AboutCardText text="Learn" src="images/about/learn.jpg" />
                        </a>

                        <a href="#unite">
                            <AboutCardText text="Unite" src="images/about/collaborate.jpg" />
                        </a>
                    </HStack>

                    <HStack>
                        <a href="#pitch">
                            <AboutCardImage text="Pitch" src="images/about/pitch.jpg" />
                        </a>

                        <a href="#celebrate">
                            <AboutCardImage text="Celebrate" src="images/about/celebrate.jpg" />
                        </a>
                    </HStack>
                </VStack>
                </AnimatedBox>

                <FAQ />

                <AnimatedBox delay={0.25}>
                    <Heading as="h3" variant="section-title">Stay Connected with Hack BI</Heading>

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

