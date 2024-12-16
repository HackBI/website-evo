import {
    Box,
    SimpleGrid,
    Heading,
    Link,
} from "@chakra-ui/react"
import { NextLink } from "next/link"
import Sponsor from "./sponsor"

const SponsorBlock = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">Sponsors</Heading>
            <Box textAlign="center">
                Interested in being a sponsor?{' '}
                <Link as={NextLink} href="/contact">
                    Contact us!
                </Link>
            </Box>

            <SimpleGrid columns={[2, 3, 4]} gap={6}>
                <Sponsor
                    href="https://www.bishopireton.org"
                    title="Bishop Ireton High School"
                    thumbnail="images/sponsors/bishopireton.png"
                />
                <Sponsor
                    href="https://www.mlh.io"
                    title="MLH"
                    thumbnail="images/sponsors/mlh.png"
                />
                <Sponsor
                    href="https://www.catholic.edu"
                    title="Catholic University of America"
                    thumbnail="images/sponsors/cua.png"
                />
                <Sponsor
                    href="https://www.4imprint.com"
                    title="4Imprint"
                    thumbnail="images/sponsors/4imprint.png"
                />
                <Sponsor
                    href="https://www.dominos.com"
                    title="Dominos Pizza"
                    thumbnail="images/sponsors/dominos.png"
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
                    href="https://www.edgesource.com"
                    title="Edgesource"
                    thumbnail="images/sponsors/es.png"
                />
                <Sponsor
                    href="https://sarahpetersonphoto.com"
                    title="Sarah Peterson Photography"
                    thumbnail="images/sponsors/photograph.png"
                />
            </SimpleGrid>
        </Box>
    )
}

export default SponsorBlock
