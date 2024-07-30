import {
    HStack,
    Box,
    Center,
    Image,
} from '@chakra-ui/react'

export const AboutCardText = ({ text, src }) => {
    return (
        <Box>
            <HStack spacing={0}>
                <Box width="40%">
                    <Center>{text}</Center>    
                </Box>
                <Box width="60%">
                    <Image src={src} borderRadius={4} />
                </Box>
            </HStack>
        </Box>
    )
}

export const AboutCardImage = ({ text, src }) => {
    return (
        <Box>
            <HStack spacing={0}>
                <Box width="60%">
                    <Image src={src} borderRadius={4} />
                </Box>
                <Box width="40%">
                    <Center>{text}</Center>    
                </Box>
            </HStack>
        </Box>
    )
}
