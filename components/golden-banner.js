import { Box, Center } from '@chakra-ui/react'
import Liquid from './liquid'

const GoldenBanner = () => {
    return (
        <Box
            position="relative"
            mb="6"
            h="80"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box position="absolute" w="full" h="full" overflow="hidden" borderRadius='md'>
                <Liquid
                    baseColor={[0.38, 0.32, 0.1]}
                    speed={0.3}
                    amplitude={0.51}
                    interactive={false}
                />
            </Box>
            <Box zIndex="2" w="full">
                <Center>
                    <svg id="brand" viewBox="0 0 550.56 104.82" height="100" xmlns="http://www.w3.org/2000/svg">
                        <title>HackBI</title>
                        <g id="Text">
                            <path d="M154,14.63h14.61V87.37H154V57H127V87.37H112.41V14.63H127V42.48h27Z" transform="translate(-5.23 -5.58)" fill="#f0a822"></path>
                            <polygon points="206.62 9.16 197.58 9.16 167.03 82.04 182.7 82.04 201.6 39.8 219.01 82.04 234.77 82.04 206.62 9.16" fill="#f0a822"></polygon>
                            <path d="M286.39,32.07C272.2,23,250.8,31.45,250.8,50.86c0,20.34,22.65,28.5,36.42,18.17l9.39,10.64a38.22,38.22,0,0,1-24.21,8.67,37.75,37.75,0,0,1-37.88-37.48c0-20.65,17-37.47,37.88-37.47a38.4,38.4,0,0,1,23.38,8Z" transform="translate(-5.23 -5.58)" fill="#f0a822"></path>
                            <path d="M321.39,54l-5.63,5.71V87.27H301.15V14.53h14.61V38l21.39-23.48h19.72L331.3,43l26.2,44.27H340.07Z" transform="translate(-5.23 -5.58)" fill="#f0a822"></path>
                            <path d="M388.67,14.63a21.38,21.38,0,0,1,21.4,21.31,20.61,20.61,0,0,1-3.76,12,22,22,0,0,1-13.46,39.48H368.74V14.63Zm-.62,28.79A8.53,8.53,0,0,0,396.5,35a8.34,8.34,0,0,0-8.45-8.21h-6.37V43.42ZM392.64,75a8.78,8.78,0,1,0,0-17.56H382V75Z" transform="translate(-5.23 -5.58)" fill="#f0a822"></path>
                            <path d="M441,29.08V72.82h7.72V87.37H418.52V72.82h7.83V29.08h-7.83V14.53h30.16V29.08Z" transform="translate(-5.23 -5.58)" fill="#f0a822"></path>
                        </g>
                    </svg>
                </Center>
            </Box>
        </Box>
    )
}

export default GoldenBanner