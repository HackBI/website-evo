import {
    HStack,
    Box,
    Text,
    Center,
    Image,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react'
import PixelCard from './pixel-card'

export const AboutCardText = ({ text, src }) => {
    return (
        <Box
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            borderRadius={4}
        >
            <HStack spacing={0}>
                <Box width="40%">
                    <PixelCard variant="red">
                        <Flex w="100%" h="100%" position="absolute" justifyContent="center" alignItems="center">
                            <Text fontSize="calc(10px + 1vw)" userSelect="none">
                                {text}
                            </Text>
                        </Flex>
                    </PixelCard>
                </Box>
                <Box width="60%">
                    <Image src={src} alt={text} borderRadius={4} />
                </Box>
            </HStack>
        </Box>
    )
}

export const AboutCardImage = ({ text, src }) => {
    return (
        <Box
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            borderRadius={4}
        >
            <HStack spacing={0}>
                <Box width="60%">
                    <Image src={src} alt={text} borderRadius={4} />
                </Box>
                <Box width="40%">
                    <PixelCard variant="red">
                        <Flex w="100%" h="100%" position="absolute" justifyContent="center" alignItems="center">
                            <Text fontSize="calc(10px + 1vw)" userSelect="none">
                                {text}
                            </Text>
                        </Flex>
                    </PixelCard>
                </Box>
            </HStack>
        </Box>
    )
}