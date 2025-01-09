import {
    Box,
    LinkBox,
    LinkOverlay,
    Image,
    Center,
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const Sponsor = ({ href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Center>
                <Image
                    src={thumbnail}
                    width="100"
                    height="100"
                    alt={title}
                    className="sponsor-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
            </Center>
            <LinkOverlay href={href} target="_blank">
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const SponsorXL = ({ href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Center>
                <Image
                    src={thumbnail}
                    width="200"
                    height="200"
                    alt={title}
                    className="sponsor-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                    objectFit="contain"
                />
            </Center>
            <LinkOverlay href={href} target="_blank"></LinkOverlay>
        </LinkBox>
    </Box>
)

export const SponsorStyle = () => (
    <Global
        styles={`
        .sponsor-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)

export default Sponsor
