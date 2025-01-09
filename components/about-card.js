import {
    HStack,
    Box,
    Text,
    Center,
    Image,
    useColorModeValue,
} from '@chakra-ui/react'

export const AboutCardText = ({ text, src }) => {
    return (
        <Box
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            borderRadius={4}
        >
            <HStack spacing={0}>
                <Box width="40%">
                    <Center>
                        <Text
                            fontSize="calc(10px + 1vw)"
                        >
                            {text}
                        </Text>
                    </Center>
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
                    <Center>
                        <Text
                            fontSize="calc(10px + 1vw)"
                        >
                            {text}
                        </Text>
                    </Center>
                </Box>
            </HStack>
        </Box>
    )
}
