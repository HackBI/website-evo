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
    const photographImg = `images/sponsors/photograph${useColorModeValue('-light', '-dark')}.png`
    const mohawkImg = `images/sponsors/mohawk${useColorModeValue('-light', '-dark')}.png`
    const cuaImg = `images/sponsors/cua${useColorModeValue('-light', '-dark')}.png`
    const edgesourceImg = `images/sponsors/es${useColorModeValue('-light', '-dark')}.png`

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
                <GridItem colSpan={2}>
                    <SponsorXL
                        href="https://www.edgesource.com"
                        title="Edgesource"
                        thumbnail={edgesourceImg}
                    />
                </GridItem>
            </Grid>

            <Divider my={6} borderColor="gold" borderWidth="2px" />

            <Box my={2}>
                <Center>
                    <Paragraph>
                        Thanks to our <strong>2025</strong> Sponsors:
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
                    href="https://www.catholic.edu"
                    title="Catholic University of America"
                    thumbnail={cuaImg}
                />
                <Sponsor
                    href="https://www.4imprint.com"
                    title="4Imprint"
                    thumbnail={fourImprintImg}
                />
                <Sponsor
                    href="https://www.dominos.com"
                    title="Dominos Pizza"
                    thumbnail="images/sponsors/dominos.png"
                />
                <Sponsor
                    href="https://www.mohawkgames.com"
                    title="Mohawk Games"
                    thumbnail={mohawkImg}
                />
                <Sponsor
                    href="https://www.standoutstickers.com"
                    title="Stand Out Stickers"
                    thumbnail="images/sponsors/standout_stickers.png"
                />
                <Sponsor
                    href="https://www.jmu.edu"
                    title="James Madison University"
                    thumbnail="images/sponsors/jmu.png"
                />
                <Sponsor
                    href="https://gen.xyz"
                    title="XYZ"
                    thumbnail="images/sponsors/xyz.png"
                />
                <Sponsor
                    href="https://www.potbelly.com"
                    title="Potbelly's"
                    thumbnail="images/sponsors/potbelly.png"
                />
                <Sponsor
                    href="https://www.sarahpetersonphoto.com"
                    title="Sarah Peterson Photography"
                    thumbnail={photographImg}
                />
                <Sponsor
                    href="https://vt.edu"
                    title="Virginia Tech"
                    thumbnail="images/sponsors/vt.png"
                />
            </SimpleGrid>
        </Box>
    )
}

export default SponsorBlock
