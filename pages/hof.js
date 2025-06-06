import {
    Container,
    Box,
    Center,
    Text,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import AnimatedBox from '../components/animated-box'
import Liquid from '../components/liquid'

const HOF = () => {
    return (
        <Layout title="Hall of Fame">
            <Container maxW="container.lg">
                <Box>
                    <Liquid
                        baseColor={[0.38, 0.32, 0.1]}
                        speed={0.3}
                        amplitude={0.51}
                        interactive={false}
                    >
                        <Box
                            m={6}
                            p={2}
                            bg="rgba(0, 0, 0, 0.3)"
                            borderRadius="md"
                        >
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim ex, sagittis in condimentum nec, tempor feugiat justo. Ut lacus ante, faucibus a luctus eu, placerat in ex. In non leo eget urna posuere suscipit at at diam. Sed a ligula elit. Curabitur commodo augue eget nisi elementum, sed porta arcu maximus. In dictum justo nec facilisis vulputate. Sed at risus ipsum. Etiam lobortis vulputate leo ut posuere. Nulla non posuere sapien. In venenatis eleifend faucibus. Proin eu aliquet sem, a aliquam ex. Nunc in tristique sapien, eu blandit nulla. Aliquam eu pellentesque nibh.

                                Curabitur viverra ullamcorper fermentum. Suspendisse efficitur id erat ut ultrices. Ut ornare, justo non pharetra blandit, augue neque ornare lectus, eu porta massa nunc quis nisl. Integer at aliquam tortor. Donec dictum arcu ut cursus aliquam. Phasellus mollis arcu ut tortor congue vulputate. Nunc elementum nibh non urna laoreet, at bibendum metus commodo. Curabitur nec arcu quis elit pulvinar pretium. Sed id placerat sapien. Suspendisse pretium convallis libero, vel dapibus ante auctor id. Suspendisse a semper elit. Morbi eu leo at elit egestas pharetra.

                                Nulla facilisi. Sed tellus nibh, tempor at mi nec, dapibus lacinia lectus. Curabitur elit turpis, porta quis enim at, dapibus auctor tortor. Duis auctor, enim at posuere ultricies, dolor neque tincidunt urna, vitae mollis magna purus vitae mi. Sed sit amet dui ut lorem eleifend ornare. Aenean in eros rutrum, iaculis neque quis, bibendum metus. Curabitur rutrum odio a orci vulputate sodales. Morbi posuere dolor lectus, nec facilisis purus dapibus ut. Donec non massa purus. Donec nisi sapien, facilisis et efficitur nec, aliquam sit amet leo.

                                Proin ligula metus, porta vel magna vitae, pulvinar tincidunt lorem. Aenean luctus ultricies mi, sed posuere nisi faucibus non. In lobortis urna libero, non eleifend sem consequat in. Praesent vitae libero at dui luctus pretium eget bibendum est. Curabitur laoreet metus sit amet elit feugiat tempus. Morbi rhoncus dolor ut purus sodales pretium. Nunc est dolor, consectetur eget dictum eget, accumsan at libero. Donec viverra hendrerit justo ut eleifend. Vivamus dictum neque sit amet tincidunt tempus. Integer quis consectetur lectus.

                                Quisque iaculis justo purus, et malesuada justo bibendum quis. Aenean tellus est, posuere at tincidunt eu, molestie eget turpis. Integer venenatis dictum nulla non rutrum. Proin ac auctor lectus, id consequat massa. Maecenas vulputate pellentesque augue eget posuere. Pellentesque iaculis aliquam ligula, eget commodo nulla tristique nec. Proin vitae est in lorem ultricies mollis ut ut tellus. Mauris pharetra mauris nec neque maximus luctus. Quisque sit amet ultrices neque.
                            </Text>
                        </Box>
                    </Liquid>
                </Box>
            </Container>
        </Layout>
    )
}

export default HOF