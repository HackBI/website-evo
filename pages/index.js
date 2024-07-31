import {
    Container,
    Box,
    Center,
    VStack,
    HStack,
    SimpleGrid,
    Button,
    Heading,
    Text,
    Image,
    Link,
    List,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { PiXLogo } from 'react-icons/pi'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { AboutCardText, AboutCardImage } from '../components/about-card'
import AnimatedBox from '../components/animated-box'
import Paragraph from '../components/paragraph'
import Sponsor from '../components/sponsor'

const Page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout>
            <Container maxW="container.lg">
                <Container>
                    <AnimatedBox delay={0.1}>
                        <Box
                            borderRadius="lg"
                            mb={6}
                            p={3}
                            textAlign="center"
                            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        >
                            <Box pb='1'>
                                <Text as='b'>January 18-19, 2025</Text>
                            </Box>

                            <Button onClick={onOpen} colorScheme='cyan'>Rain Date</Button>

                            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>HackBI Rain Date</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        In case of any inclement weather, HackBI will occur on <b>January 25-26, 2025</b>.
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </AnimatedBox>

                    <AnimatedBox delay={0.15}>
                        <Box mb={4}>
                            <Box flexGrow={1}>
                                <Center>
                                    <Button
                                        as={NextLink}
                                        href="/register"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme='cyan'
                                        size='lg'
                                    >Register Now</Button>
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
                            been run by the students of Bishop Ireton High School for 8 consecutive years.
                            At HackBI, you will learn new things and collaborate with others to make your
                            ideas come to life. Check out our{' '}
                            <Link as={NextLink} href="/faq" passHref scroll={false}>
                                faq
                            </Link>
                            {' '}if you have any questions.
                        </Paragraph>
                    </Box>

                    <VStack>
                        <HStack>
                            <AboutCardText text="Learn" src="images/about/learn.jpg" />
                            <AboutCardText text="Collaborate" src="images/about/collaborate.jpg" />
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
                            <Link href="https://x.com/hackbiofficial" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<PiXLogo />}
                                >
                                    @hackbiofficial
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
                    <Heading as="h3" variant="section-title">Sponsors</Heading>
                    <Box textAlign="center">
                        Interested in being a sponsor?{' '}
                        <Link as={NextLink} href="/contact" passHref scroll={false}>
                            Contact us!
                        </Link>
                    </Box>

                    <SimpleGrid columns={[2, 3, 4]} gap={6}>
                        <Sponsor
                            href="https://bishopireton.org"
                            title="Bishop Ireton High School"
                            thumbnail="images/sponsors/bishopireton.png"
                        />
                        <Sponsor
                            href="https://girlswhocode.com/"
                            title="Girls Who Code"
                            thumbnail="images/sponsors/girlswhocode.png"
                        />
                        <Sponsor
                            href="https://sagcorp.com"
                            title="SAG Corporation"
                            thumbnail="images/sponsors/sag.png"
                        />
                        <Sponsor
                            href="https://mydoctor.kaiserpermanente.org/mas/home/"
                            title="Mid Atlantic Permanente Medical Group"
                            thumbnail="images/sponsors/permanente.png"
                        />
                        <Sponsor
                            href="https://rqs.umd.edu/"
                            title="UMD NSF Institute for Robust Quantum Simulation"
                            thumbnail="images/sponsors/nsfrqs.png"
                        />
                        <Sponsor
                            href="https://jqi.umd.edu/"
                            title="UMD Joint Quantum Institute"
                            thumbnail="images/sponsors/jqi.png"
                        />
                        <Sponsor
                            href="https://the-cs.org/"
                            title="The Coding School"
                            thumbnail="images/sponsors/tcs.png"
                        />
                        <Sponsor
                            href="https://www.jimmyjohns.com/"
                            title="Jimmy John's"
                            thumbnail="images/sponsors/jj.png"
                        />
                        <Sponsor
                            href="https://tealtech.com/"
                            title="Teal"
                            thumbnail="images/sponsors/teal.png"
                        />
                        <Sponsor
                            href="https://mlh.io/"
                            title="MLH"
                            thumbnail="images/sponsors/mlh.png"
                        />
                        <Sponsor
                            href="http://hackp.ac/mlh-StandOutStickers-hackathons"
                            title="StandOut Stickers"
                            thumbnail="images/sponsors/standoutstickers.png"
                        />
                        <Sponsor
                            href="https://www.echo3d.com/"
                            title="echo3D"
                            thumbnail="images/sponsors/e3d.png"
                        />
                        <Sponsor
                            href="https://www.thinkfun.com/"
                            title="ThinkFun"
                            thumbnail="images/sponsors/thinkfun.png"
                        />
                        <Sponsor
                            href="https://www.4imprint.com/"
                            title="4imprint"
                            thumbnail="images/sponsors/4imprint.png"
                        />
                        <Sponsor
                            href="https://www.dominos.com/en/"
                            title="Domino's Pizza"
                            thumbnail="images/sponsors/dominos.png"
                        />
                        <Sponsor
                            href="https://gen.xyz/"
                            title="XYZ"
                            thumbnail="images/sponsors/xyz.png"
                        />
                    </SimpleGrid>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Page