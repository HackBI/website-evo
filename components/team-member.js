import {
    Box,
    Stack,
    Image,
    Heading,
    Container,
    useBreakpoint,
} from '@chakra-ui/react'
import Paragraph from './paragraph'

const TeamMember = ({ src, name, role, bio }) => {
    const isVerticalLayout = useBreakpoint({ base: true, md: false });

    return (
        <Box borderWidth={1} borderRadius={4} p={2}>
            <Container maxW="container.lg">
                <Stack
                    direction={isVerticalLayout ? 'column' : 'row'}
                    spacing={4}
                    align="center"
                >
                    <Image
                        src={src}
                        alt={name}
                        width="200px"
                        height="200px"
                        borderRadius="full"
                    />
                    <Stack
                        spacing={2}
                        align={isVerticalLayout ? 'center' : 'start'}
                    >
                        <Box>
                            <Heading size="lg">
                                {name}
                            </Heading>
                            <Heading size="sm" color="gray.600">
                                {role}
                            </Heading>
                        </Box>
                        <Paragraph>
                            {bio}
                        </Paragraph>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default TeamMember
