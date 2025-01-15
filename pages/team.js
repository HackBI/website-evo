import {
    Container,
    Box,
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import TeamMember from '../components/team-member'
import AnimatedBox from '../components/animated-box'

const Team = () => {
    const teamMembers = [
        {
            src: "images/team/michael.jpg",
            name: "Michael Bobrowski",
            role: "Co-Director",
            bio: "Hi everyone! I am Michael Bobrowski, and I'm thrilled to be your Co-Director for HackBI VIII. I'm a senior at Bishop Ireton and have attended HackBI all four years here, so I'm really looking forward to making this year the best one yet! I started programming in my freshman year, and right now I enjoy working with Rust, Zig, and OCaml, utilizing my skills to make this website and the backend server it runs on. Besides programming, I am also involved in cross country and the swim team at Bishop Ireton. Let's make HackBI VIII Great!"
        },
        {
            src: "images/team/nora.png",
            name: "Nora Hixson",
            role: "Co-Director",
            bio: "Hello! I am Nora Hixson a Senior at Bishop Ireton and I am so excited to be this year's Hack BI Co-director. This is my third year on the Hack BI team and I look forward to sharing all the skills that I have learned to make Hack BI VIII great. When I am not doing my Co-Director duties you can find me swimming or playing video games."
        },
        {
            src: "images/team/rory.jpg",
            name: "Rory McGuire",
            role: "Events Team Leader",
            bio: "Hello HackBI Hackers! My name is Rory McGuire, and I'm excited for my fifth BI Hackathon (I snuck in an extra one in middle school)! I'm heading the events team to make sure our workshops are integrated smoothly into your HackBI experience, but you'll also see me running a few of the workshops myself. Outside of HackBI, you may find me lifeguarding, running, hiking, or perhaps trimming a few strokes off my golf game. I can't wait to see you all at the school in January and discover what amazing projects you put together!"
        },
        {
            src: "images/team/jake.jpg",
            name: "Jake Clark",
            role: "Logistics Team Leader",
            bio: "Hello everyone, I'm Jake Clark, a senior, and the leader of the logistics team this year. If you ever have any questions about programming in general feel free to ask, so I can direct you to someone who can actually understand your question. When I'm not attempting to draw shapes in python I am usually playing guitar or soccer. I look forward to seeing you at HackBI."
        },
        {
            src: "images/team/marykate.png",
            name: "Mary Kate Costello",
            role: "Middle School Team Leader",
            bio: "Hi, my name is Mary Kate and I'm thrilled to be helping with HackBI for the second year in a row! Aside from programming, I enjoy swimming, playing tennis, traveling, and flying small planes (yes, I've done that before :) I look forward to helping you at HackBI VIII as the Middle School Team Leader, and I hope you enjoy the hackathon!"
        },
        {
            src: "images/team/ethan.jpg",
            name: "Ethan Miller",
            role: "Admin Team Leader",
            bio: "Hello! My name is Ethan Miller, and I'm a junior at Bishop Ireton. This is my second year on the Hack BI team, and I am so excited to help lead the event this year as head of administration. When I'm not helping out with Hack BI VIII, you can find me playing the saxophone, hiking, or volunteering at a computer non-profit. I can't wait to see you all at Hack BI, and I hope you all enjoy what we've been working on!"
        },
        {
            src: "images/team/alexa.jpg",
            name: "Alexa Charuhas",
            role: "Design Team Leader",
            bio: "Hi guys! I'm Alexa and I am a senior here at BI. This is my second year on the HackBI team and I am so stoked to be the leader of the Design and Marketing team! I love being a part of the HackBI community, whether it's through designing flyers to match the theme of the event or making last-minute prize certificates (iykyk). In my free time you can probably find me sleeping or playing my guitar. Can't wait to see you guys in January :)"
        },
        {
            src: "images/team/anthony.png",
            name: "Anthony Amedome",
            role: "Events Team",
            bio: "Hi all! My name is Anthony Amedome and I am a senior on the workshops team. As a first-time staff member, I am very excited to participate in Hack BI after being a contestant for two years. Some of my favorite things to do are traveling, and spending time with my dog, Chase."
        },
        {
            src: "images/team/placeholder.jpg",
            name: "Henry Leopold",
            role: "Events Team",
            bio: "Hello, my name is Henry Leopold and I am extremely excited to be a volunteer of Hack BI. I am a senior at Bishop Ireton and a part of the workshops team. I have been a participant of Hack BI since my sophomore year and I can't wait to finish my time at BI with this amazing program."
        },
        {
            src: "images/team/placeholder.jpg",
            name: "Paul Nguyen",
            role: "Logistics Team",
            bio: "Heyo, I'm Paul, I'm a senior and this is my first year joining the HackBI team.I am excited to take part in HackBI and I look forward to being a part of the Logistics team. Outside of school I enjoy gaming, sleeping, playing/listening to music, and working out. Do I have any idea what I'm doing? Maybe? I do know one thing for certain. It's gonna be a good time."
        },
        {
            src: "images/team/nick.png",
            name: "Nick Danshaw",
            role: "Logistics Team",
            bio: "Hello everyone! I'm Nick and I'm super excited to be a part of the Hack BI team! I am a senior at Bishop Ireton. I like playing video games, working on my car, and spending time with my friends and family."
        },
        {
            src: "images/team/placeholder.jpg",
            name: "Sariel Angelo Cruz",
            role: "Logistics Team",
            bio: "I'm Sariel, and I'm part of the logistics team. This is my first time participating in HackBI as a volunteer, but I hope I can help y'all eat well!"
        },
        {
            src: "images/team/emilio.jpg",
            name: "Emilio Burneo",
            role: "Logistics Team",
            bio: "Hello! My name is Emilio Burneo; I'm a junior at Bishop Ireton and am so excited to be on the Hack BI Logistics Team for the second time! I'm a cross country, long-distance track runner, and piano player. I'm a big fan of Chipotle and Imaginal Disk by Magdalena Bay. Here's to another successful hackathon!"
        },
        {
            src: "images/team/placeholder.jpg",
            name: "Dallas Dsouza",
            role: "Logistics Team",
            bio: "Hello! My name is Dallas, and I am a junior at Bishop Ireton. This is my third time attending HackBI and my second year assisting with one of the workshops. Outside of programming, I am interested in several fields of engineering, staying informed about global events, and biking. I am excited to contribute to HackBI this year through the logistics team and an engineering workshop!"
        },
        {
            src: "images/team/daniel.jpg",
            name: "Daniel Santillian",
            role: "Admin Team",
            bio: "Hello! My name is Daniel, and I'm thrilled to work with the HackBI team this year! I am part of the admin team and will be teaching several workshops. While I am not working on school or computer science, you can find me doing anything about auto racing, whether it be designing liveries, watching the races, or analyzing pit stop strategies. Besides that, I enjoy learning new things and drinking caramel iced coffee. I hope that you will enjoy the hackathon and take something incredible out of it!"
        },
        {
            src: "images/team/david.jpg",
            name: "David De Costa",
            role: "Middle School Team",
            bio: "Hi, my name is David De Costa. I have been programming and creating games for about 7 years. I'm excited to teach Unity and help with Middle School!"
        },
        {
            src: "images/team/zoe.png",
            name: "Zoe Rodriguez-Orellana",
            role: "Middle School Team",
            bio: "Hi! My name is Zoe Rodriguez-Orellana and I'm excited to join the middle school team for HackBI this year. Besides coding, I enjoy reading, playing soccer, binge watching tv shows, and trying new things (I once went on a zip line that was a mile long). I hope to see you at HackBI VIII!!"
        },
        {
            src: "images/team/karissa.png",
            name: "Karissa Dinh",
            role: "Design Team",
            bio: "What is up snoozers, I'm Karissa. This is my first year on the HackBI Team and I'm so stoked to be here. I love graphic design and artsy, creative activities, so it is such a surprise that I am on the media and design team! I can be spotted snacking, taking digicam photos, and hanging out with friends!🩷🩷"
        },
        {
            src: "images/team/placeholder.jpg",
            name: "Chloe Jackson",
            role: "Design Team",
            bio: "Hi, I'm Chloe Jackson and I am so excited to be on Hack BI design and marketing team for my senior year. Outside of designing, I love to film YouTube videos and read books!"
        }
    ];

    return (
        <Layout title="Team">
            <Container maxW="container.lg">
                {teamMembers.map((member, index) => (
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

export default Team
