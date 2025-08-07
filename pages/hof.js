import {
    Container,
    Box,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import TeamMember from '../components/team-member'
import GoldenBanner from '../components/golden-banner'
import AnimatedBox from '../components/animated-box'

const HOF = () => {
    const hofMembers = [
        {
            src: "images/hof/michael.jpg",
            name: "Michael Bobrowski",
            role: "HackBI VIII Co-Director and Chief Engineer",
            bio: "The boss of the hackathon and the man on a mission, Michael Bobrowski can do anything at anytime. He can lead every department with ease and has the respect of every team member. He's likely somewhere, praying that you live well."
        },
        {
            src: "images/hof/rory.jpg",
            name: "Rory McGuire",
            role: "HackBI VIII Events Team Lead and Coding Master",
            bio: "The master programmer and cybersecurity man, Rory McGuire knows how to make perfect hackathon programming. He's the man with the workshop plans. He's probably waiting on you because you didn't finish your workshop yet."
        },
        {
            src: "images/hof/jake.jpg",
            name: "Jake Clark",
            role: "HackBI VIII Logistics Team Lead and Delivery Genius",
            bio: "The man you should thank for your Domino's Pizza and Potbelly, Jake Clark is cool, calm, and collected. His tenure at Model UN contributes to his negotiation skills that gave us all the delectable food at last year's hackathon. If you need help with programming, he can direct you to someone who actually knows what they're doing."
        },
        {
            src: "images/hof/daniel.jpg",
            name: "Daniel Santillan",
            role: "Karting Legend and Easter Egg Developer",
            bio: "The mastermind behind the HackBI VIII team's once-in-a-lifetime trip to K1 Speed, Daniel Santillan knows how to wrangle both a hackathon to success and a race kart to victory. He's probably wondering how you found this year's easter egg ... if you're on staff and contact him he might add you here too."
        }
    ];

    return (
        <Layout title="Hall of Fame">
            <GoldenBanner />
            <Container maxW="container.lg">
                {hofMembers.map((member, index) => (
                    <AnimatedBox key={member.name} delay={0.1 + index * 0.05}>
                        <Box pb={2}>
                            <TeamMember
                                src={member.src}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                            />
                        </Box>
                    </AnimatedBox>
                ))}
            </Container>
        </Layout>
    )
}

export default HOF