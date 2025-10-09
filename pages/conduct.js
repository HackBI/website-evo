import {
    Container,
    Heading,
    Link
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import AnimatedBox from '../components/animated-box'
import Paragraph from '../components/paragraph'

const Conduct = () => {
    return (
        <Layout title="Conduct">
            <Container maxW="container.lg">
                <AnimatedBox delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Code of Conduct
                    </Heading>

                    <Paragraph>
                        Be respectful. Harassment and abuse are never tolerated. 
                        If you are in a situation that makes you uncomfortable at HackBI, 
                        please report it using the procedures included in this document.
                    </Paragraph>
                    <br />

                    <Paragraph>
                        By attending Bishop Ireton's HackBI IX event, you must follow and abide 
                        by the stated rules and regulations. Failure to do so will result in 
                        potential removal from the event.
                    </Paragraph>
                    <br />

                    <Paragraph>
                        Be respectful. Harassment and abuse are never tolerated. 
                        If you are in a situation that makes you uncomfortable at HackBI, 
                        if the event itself is creating an unsafe or inappropriate environment, 
                        or if interacting with anyone at HackBI, including a team member or adult volunteer, 
                        makes you uncomfortable, please report it using the procedures included in this document. 
                        We believe that every single person has the right to hack in a safe and welcoming environment.
                    </Paragraph>
                    <br />

                    <Paragraph>
                        Harassment includes but is not limited to offensive, verbal, or written comments 
                        related to gender, age, disability, physical appearance, body size, race, religion, 
                        social class, economic status, veteran status, sexual images, deliberate intimidation, 
                        stalking, following, harassing photography or recording, sustained disruption of talks or other events, 
                        inappropriate physical contact, and unwelcome sexual attention. If what you’re doing is making someone feel 
                        uncomfortable, that counts as harassment and is enough reason to stop doing it.
                    </Paragraph>
                    <br />

                    <Paragraph>
                        Participants asked to stop any harassing behavior are expected to comply immediately. 
                        Sponsors, judges, mentors, volunteers, organizers, HackBI staff, and anyone else at the event 
                        are also subject to the anti-harassment policy. In particular, attendees should not use sexualized images, 
                        activities, or other material at all during the event. Booth staff (including volunteers) should not use 
                        sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
                    </Paragraph>
                    <br />

                    <Paragraph>
                        If a participant engages in harassing behavior, Bishop Ireton High School will take any action 
                        it deems appropriate, including, but not limited to, warning the offender or expulsion from 
                        the event with no eligibility for prizes/awards.
                    </Paragraph>
                    <br />

                    <Paragraph>
                        If you are being harassed, notice that someone else is being harassed, or have any other concerns, 
                        please contact HackBI using the reporting procedures defined below. HackBI team members will be happy 
                        to provide escorts or otherwise assist those experiencing harassment to feel safe for the duration of the event. 
                        We value your attendance.
                    </Paragraph>

                    <Heading as="h3" variant="section-title">
                        Reporting Procedures
                    </Heading>

                    <Paragraph>
                        If you feel uncomfortable or think there may be a potential violation of the code of conduct, 
                        please report it immediately to <Link href="mailto:hackbi@bishopireton.org">hackbi@bishopireton.org</Link> 
                        {' '}or a HackBI team member. All reporters have the right to remain anonymous.
                    </Paragraph>

                    <br />

                    <Link href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank">
                        MLH Code of Conduct
                    </Link>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Conduct
