import {
    Box,
    Center,
    SimpleGrid,
    Grid,
    GridItem,
    Heading,
    Link,
    Divider,
    useColorModeValue,
} from "@chakra-ui/react"
import { NextLink } from "next/link"
import Sponsor from "./sponsor"
import { SponsorXL } from "./sponsor"
import Paragraph from '../components/paragraph'

const SponsorBlock = () => {
    const fourImprintImg = `images/sponsors/4imprint${useColorModeValue('-light', '-dark')}.png`
    const mlhImg = `images/sponsors/mlh${useColorModeValue('-light', '-dark')}.png`
    const vtImg = `images/sponsors/vt${useColorModeValue('-light', '-dark')}.png`
    const hacklImg = `images/sponsors/hackl${useColorModeValue('-light', '-dark')}.png`
    const hallowImg = `images/sponsors/hallow${useColorModeValue('-light', '-dark')}.png`
    const restonImg = `images/sponsors/reston${useColorModeValue('-light', '-dark')}.png`

    return (
        <Box>
            <Heading as="h3" variant="section-title">Sponsors</Heading>
            <Box textAlign="center">
                Interested in being a sponsor?{' '}
                <Link as={NextLink} href="/contact">
                    Contact us!
                </Link>
            </Box>

            <Box my={2}>
                <Center>
                    <Paragraph>
                        A special thanks to our <strong>Platinum</strong> Sponsors:
                    </Paragraph>
                </Center>
            </Box>

            <Grid gap={6} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}>
                <GridItem colSpan={1}>
                    <SponsorXL
                        href="https://www.bishopireton.org"
                        title="Bishop Ireton High School"
                        thumbnail="images/sponsors/bishopireton.png"
                    />
                </GridItem>
            </Grid>

            <Divider my={6} borderColor="gold" borderWidth="2px" />

            <Box my={2}>
                <Center>
                    <Paragraph>
                        Thanks to our <strong>2026</strong> Sponsors:
                    </Paragraph>
                </Center>
            </Box>

            <SimpleGrid columns={[2, 3, 4]} gap={6}>
                <Sponsor
                    href="https://www.mlh.io"
                    title="MLH"
                    thumbnail={mlhImg}
                />
                <Sponsor
                    href="https://iac.vt.edu/"
                    title="Virginia Tech Institute of Advanced Computing"
                    thumbnail={vtImg}
                />
                <Sponsor
                    href="https://www.hallow.com"
                    title="Hallow"
                    thumbnail={hallowImg}
                />
                <Sponsor
                    href="https://www.dominos.com"
                    title="Dominos Pizza"
                    thumbnail="images/sponsors/dominos.png"
                />
                <Sponsor
                    href="https://www.cathyhackl.com"
                    title="Cathy Hackl"
                    thumbnail={hacklImg}
                />
                <Sponsor
                    href="https://www.potbelly.com"
                    title="Potbelly's"
                    thumbnail="images/sponsors/potbelly.png"
                />
                <Sponsor
                    href="https://www.standoutstickers.com"
                    title="Stand Out Stickers"
                    thumbnail="images/sponsors/standout_stickers.png"
                />
                <Sponsor
                    href="https://www.4imprint.com"
                    title="4Imprint"
                    thumbnail={fourImprintImg}
                />
                <Sponsor
                    href="https://www.restonshirt.com"
                    title="Reston Shirt"
                    thumbnail={restonImg}
                />
                <Sponsor
                    href="https://www.paradigmcorp.com"
                    title="Paradigm"
                    thumbnail="images/sponsors/paradigm.png"
                />
            </SimpleGrid>
        </Box>
    )
}

export default SponsorBlock
