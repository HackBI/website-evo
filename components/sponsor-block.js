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
                <Link as={NextLink} href="/contact" passHref scroll={false}>
                    Contact us!
                </Link>
            </Box>

            <SimpleGrid columns={[2, 3, 4]} gap={6}>
                <Sponsor
                    href="https://bishopireton.org"
                    title="Bishop Ireton High School"
                    thumbnail="images/sponsors/bishopireton.png"
                />
                <Sponsor
                    href="https://girlswhocode.com/"
                    title="Girls Who Code"
                    thumbnail="images/sponsors/girlswhocode.png"
                />
                <Sponsor
                    href="https://sagcorp.com"
                    title="SAG Corporation"
                    thumbnail="images/sponsors/sag.png"
                />
                <Sponsor
                    href="https://mydoctor.kaiserpermanente.org/mas/home/"
                    title="Mid Atlantic Permanente Medical Group"
                    thumbnail="images/sponsors/permanente.png"
                />
                <Sponsor
                    href="https://rqs.umd.edu/"
                    title="UMD NSF Institute for Robust Quantum Simulation"
                    thumbnail="images/sponsors/nsfrqs.png"
                />
                <Sponsor
                    href="https://jqi.umd.edu/"
                    title="UMD Joint Quantum Institute"
                    thumbnail="images/sponsors/jqi.png"
                />
                <Sponsor
                    href="https://the-cs.org/"
                    title="The Coding School"
                    thumbnail="images/sponsors/tcs.png"
                />
                <Sponsor
                    href="https://www.jimmyjohns.com/"
                    title="Jimmy John's"
                    thumbnail="images/sponsors/jj.png"
                />
                <Sponsor
                    href="https://tealtech.com/"
                    title="Teal"
                    thumbnail="images/sponsors/teal.png"
                />
                <Sponsor
                    href="https://mlh.io/"
                    title="MLH"
                    thumbnail="images/sponsors/mlh.png"
                />
                <Sponsor
                    href="http://hackp.ac/mlh-StandOutStickers-hackathons"
                    title="StandOut Stickers"
                    thumbnail="images/sponsors/standoutstickers.png"
                />
                <Sponsor
                    href="https://www.echo3d.com/"
                    title="echo3D"
                    thumbnail="images/sponsors/e3d.png"
                />
                <Sponsor
                    href="https://www.thinkfun.com/"
                    title="ThinkFun"
                    thumbnail="images/sponsors/thinkfun.png"
                />
                <Sponsor
                    href="https://www.4imprint.com/"
                    title="4imprint"
                    thumbnail="images/sponsors/4imprint.png"
                />
                <Sponsor
                    href="https://www.dominos.com/en/"
                    title="Domino's Pizza"
                    thumbnail="images/sponsors/dominos.png"
                />
                <Sponsor
                    href="https://gen.xyz/"
                    title="XYZ"
                    thumbnail="images/sponsors/xyz.png"
                />
            </SimpleGrid>
        </Box>
    )
}

export default SponsorBlock