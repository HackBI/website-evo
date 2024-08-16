import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const WorkshopGridItem = ({
    category = 'workshops',
    id,
    title,
    src
}) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/${category}/${id}`}
            cursor="pointer"
        >
            <Image
                src={src}
                alt={title}
                className="grid-item-thumbnail"
                width="full"
                height="full"
            />
            <LinkOverlay as="div" href={`/${category}/${id}`}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)