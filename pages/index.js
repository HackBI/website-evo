import {
    Container,
    Box,
    VStack,
    HStack,
    Button,
    Heading,
    Text,
    Image,
    Link,
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
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Banner from '../components/banner'
import { AboutCardText, AboutCardImage } from '../components/about-card'
import AnimatedBox from '../components/animated-box'
import Paragraph from '../components/paragraph'

const Page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout>
            <Banner />

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

                        <Button onClick={onOpen} colorScheme='teal'>Rain Date</Button>

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

                <AnimatedBox delay={0.2}>
                    <Box display={{ md: 'flex' }} mb={4}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                HackBI
                            </Heading>
                            <p>A 24-hour Hackathon by students, for students</p>
                            <Button
                                as={NextLink}
                                href="/register"
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >Register Now</Button>
                        </Box>
                        <Box
                            flexShrink={0}
                            mt={{ base: 4, md: 0 }}
                            ml={{ md: 6 }}
                            textAlign="center"
                        >
                            <Box
                                borderColor="whiteAlpha.800"
                                borderWidth={2}
                                borderStyle="solid"
                                w="100px"
                                h="100px"
                                display="inline-block"
                                borderRadius="full"
                                overflow="hidden"
                            >
                                <Image
                                    src="images/logo.png"
                                    alt="HackBI logo"
                                    width="100"
                                    height="100"
                                />
                            </Box>
                        </Box>
                    </Box>
                </AnimatedBox>

                <AnimatedBox delay={0.3}>
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
            </Container>
        </Layout>
    )
}

export default Page