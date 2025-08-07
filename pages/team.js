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
            src: "images/team/marykate.jpg",
            name: "Mary Kate Costello",
            role: "Co-Director",
            bio: "Hi, my name is Mary Kate and I'm thrilled to be helping with HackBI for the third year in a row! Aside from programming, I enjoy swimming, playing tennis, traveling, watching baseball, and flying small planes (yes, I've done that before :) I look forward to helping you at HackBI IX as one of the Co-Directors, and I hope you enjoy the hackathon!"
        },
        {
            src: "images/team/ethan.jpg",
            name: "Ethan Miller",
            role: "Co-Director",
            bio: "Hello, I am Ethan Miller, and I am honored to be one of HackBI IX's Co-Directors! This is my third year on the team, and if there's two things I've learned it's that: 1) I need more than three hours of sleep to function, and 2) Hack BI IX will be the greatest hackathon yet! Mary Kate and I have an incredible team supporting us, and I sincerely hope you all enjoy what we've been cooking up. When I'm not wearing my Co-Director hat, you can catch me practicing the saxophone, volunteering with student ambassadors and local technology non-profits, or listening to Frank Ocean (with heavy noise cancellation). I'll see you all in January!"
        },
        {
            src: "images/team/daniel.jpg",
            name: "Daniel Santillan",
            role: "Admin Team Leader and Webmaster",
            bio: "Hello! My name is Daniel, and I'm thrilled to work with the HackBI team this year! I am leading the admin team and will be teaching several workshops. While I am not working on school or computer science, you can find me enjoying everything about auto racing, whether it be designing liveries, watching the races, or analyzing pit stop strategies (Ferrari please hire me). Besides that, I enjoy learning new things and am trying to halt my iced coffee addiction. I hope that you will enjoy the hackathon and take something incredible out of it!"
        },
        {
            src: "images/team/virginia.jpg",
            name: "Virginia Cheatham",
            role: "Events Team Leader",
            bio: "Hello, my name is Virginia and I’m a senior at Bishop Ireton High School. I’ll be the events team leader this upcoming year. I love to stay moving, whether that be running around managing workshops or participating in my school's cross country team; on my own time, I have run multiple half-marathons and hope to complete my first full one this year!"
        },
        {
            src: "images/team/emilio.jpg",
            name: "Emilio Burneo",
            role: "Logistics Team Leader",
            bio: "Hello! My name is Emilio Burneo; I'm a senior at Bishop Ireton and am so excited for my third year on the Hack BI team, this time as the Logistics Team Leader! I'm a cross country/long-distance track runner, pianist, and editor-in-chief of the Ireton literary magazine Cambridge Road. I'm a big fan of Pikmin, Chipotle, and Imaginal Disk by Magdalena Bay. Looking forward to another successful hackathon!"
        },
        {
            src: "images/team/catherine.jpg",
            name: "Catherine Martin",
            role: "Design and Marketing Team Leader",
            bio: "Hi, my name is Catherine and I am super excited to be part of HackBI this year! I love science, especially biology, chemistry, and obviously computer science. In my free time I enjoy rotting. Have fun at the Hackathon!!!"
        },
        {
            src: "images/team/ciara.jpg",
            name: "Ciara Funk",
            role: "Middle School Team Co-Leader",
            bio: "Hi! I’m Ciara and I am one of the Hack BI Middle School team leaders. This is my second year working on the Hack BI team, but I’ve attended Hack BI my freshman and sophomore year. I’m so excited to work with everyone this year and to have fun hacking!"
        },
        {
            src: "images/team/zoe.jpg",
            name: "Zoe Rodriguez-Orellana",
            role: "Middle School Team Co-Leader",
            bio: "Hi! My name is Zoe Rodriguez-Orellana, and I'm excited to be a middle school team leader for HackBI this year. Besides coding, I enjoy reading, playing soccer, binge-watching tv shows, and trying new things (I once went on a zip line that was a mile long). I hope to see you at HackBI IX!!"
        },
        {
            src: "images/team/dallas.jpg",
            name: "Dallas Dsouza",
            role: "Admin Team",
            bio: "Hey, folks! My name is Dallas, and I am currently a senior at Bishop Ireton. I have been attending HackBI since my freshman year, and this is my first year on the admin team. It is also my third year leading at least one workshop. Outside of school and HackBI, I am the President of Bishop Ireton's Science National Honor Society and am one of two Head Chemistry Teaching and Lab Assistants - among other roles. I am passionate about chemistry, physics, and electrical engineering, and I also have a strong interest in political and national affairs. I am excited to contribute to HackBI in my final year at Bishop Ireton and cannot wait to see all the amazing things that come out of this year's hackathon!"
        },
        {
            src: "images/team/nate.jpg",
            name: "Nate DeGrandi",
            role: "Admin Team",
            bio: "Hi guys! My name is Nathaniel DeGrandi and I am a junior at Bishop Ireton. This is my third year attending HackBI and my first as part of the team. When I am not helping you can find me doom scrolling on Instagram or playing basketball with some friends. I am so excited to help make HackBI enjoyable for all of you attending!"
        },
        {
            src: "images/team/joshua.jpg",
            name: "Joshua Rough",
            role: "Events Team",
            bio: "Hi, this is my first year on the HackBI team, but I have participated in the event two other times. I am on the Events team and enjoy gaming. Hope to see you at HackBI!"
        },
        {
            src: "images/team/manuel.jpg",
            name: "Manuel Guillermety",
            role: "Events Team",
            bio: "Hi everyone! I am Manuel Guillermety, a junior at Bishop Ireton, and I am excited to be part of the events team this year! This is my first year being part of the whole team, and I have been to last year’s hackathon. I am glad to be part of the team and am excited to work with everyone."
        },
        {
            src: "images/team/matthias.jpg",
            name: "Matthias Borges",
            role: "Events Team",
            bio: "Hello, my name is Matthias Borges, and I am a junior at Bishop Ireton. After three years of attending Hack BI, this is my first time on the staff. I am excited to work on the events team. I like anything hardware and engineering (especially cars). In my free time, I like playing ice hockey, taking photos, watching TV shows, listening to music, and gaming."
        },
        {
            src: "images/team/elliot.jpg",
            name: "Elliot Freitag",
            role: "Events Team",
            bio: "Greetings, I'm Elliot. This is my first year working on HackBI. I'm part of the events team and hoping to keep everyone entertained during HackBI IX. \"We're making the mother of all programs, we can't fret over every line\""
        },
        {
            src: "images/team/tim.jpg",
            name: "Timothy Stoll",
            role: "Events Team",
            bio: "Hello! I’m Timothy Stoll, a three-time HackBI participant and very happy to finally be helping to run the event. I like to think I’m at least somewhat experienced in Java and C# programming, and always looking forward to learning what more I can do with code. When I’m not programming I enjoy playing tabletop RPGs, writing, gaming, and playing with my cats."
        },
        {
            src: "images/team/christmas.jpg",
            name: "Patrick Christmas",
            role: "Logistics Team",
            bio: "Hi, I am Patrick Christmas and I am a senior at Ireton and will be working on the logistics team. Other than my programming, I am interested in finance, European history, sports, and working out. Words cannot express how excited I am to be helping with Hack-BI!"
        },
        {
            src: "images/team/patrick.jpg",
            name: "Patrick Costello",
            role: "Logistics Team",
            bio: "Hello Hackers! My name is Patrick Costello and I'm a Sophomore at Bishop Ireton. This is my fifth year attending HackBI (I participated in middle school) but my first year staffing. I'm excited to work with everyone and have a great HackBI IX!"
        },
        {
            src: "images/team/bernadette.jpg",
            name: "Bernadette Phan",
            role: "Logistics Team",
            bio: "Hi! My name is Bernadette Phan; I am a junior at Bishop Ireton and this is my first time helping with HackBI. While I do enjoy programming, I also love to workout, run track, and eat. So hyped for the hackathon and I hope everyone enjoys it!"
        },
        {
            src: "images/team/astrid.jpg",
            name: "Astrid Urman",
            role: "Logistics Team",
            bio: "Hello, my name is Astrid Urman I am a junior and this is my second year participating in HackBI but first year on the team. I am on the crew team and I like to do nails as a hobby. I hope HackBI IX goes well!"
        },
        {
            src: "images/team/ian.jpg",
            name: "Ian Hixson",
            role: "Design, Marketing, and Photography",
            bio: "My name is Ian Hixson and I am a junior at BI. I enjoy spending time with friends and participating in theater backstage. My sister convinced me to join the HackBi Nine team this year, as she was the leader of HackBi Eight. I am excited to learn new skills and help design and market this to be one of the greatest Hackathons yet at BI!"
        },
        {
            src: "images/team/ranime.jpg",
            name: "Ranime Nawas",
            role: "Design and Marketing Team",
            bio: " Hi everyone, I'm Ranime and I am part of the design and marketing team in Hack BI. I love working with Photoshop and editing. It is my first year in Hack BI and I hope to have lots of fun."
        },
        {
            src: "images/team/colin.jpg",
            name: "Colin McHugh",
            role: "Design, Marketing, and Photography",
            bio: "Hello I am Colin McHugh, I am a senior at Bishop Ireton and I play golf. I am very excited to be working on this project and I am looking forward to meeting all of you."
        },
        {
            src: "images/team/mirabelle.jpg",
            name: "Mirabelle Brantley",
            role: "Design and Marketing Team",
            bio: "Hi! I’m Mirabelle Brantley, a senior at Bishop Ireton and a member of the design team for Hack BI IX. I’m passionate about creativity, particularly in theater, where I’ve spent the past four years working both behind the scenes and on stage. I love spending time with family and friends, and I’m excited to help make Hack BI IX the best one yet!"
        },
        {
            src: "images/team/david.jpg",
            name: "David De Costa",
            role: "Middle School Team",
            bio: "Hi, I'm David. I work in computer science and engineering. I enjoy cooking, lifting, and designing. Looking forward to Hack BI!"
        },
        {
            src: "images/team/rose.jpg",
            name: "Rose O'Brien",
            role: "Middle School Team",
            bio: "Hi! I'm Rose, and I am one of the Hack BI Middle School team members. This is my first year working on the Hack BI Team, but I attended Hack BI when I was in middle school. I'm super excited to work with everyone this year and have a great hackathon."
        },
        {
            src: "images/team/mathias.jpg",
            name: "Mathias Jiffar",
            role: "Middle School Team",
            bio: "Hi everyone! I'm Mathias and I'm a senior at Bishop Ireton. This is my second year as part of the Hack Bi team and I'm one of the middle school team members. I like to workout, watch tv shows, read, and hang out with my friends."
        },
        {
            src: "images/team/tyler.jpg",
            name: "Tyler Crabtree",
            role: "Middle School Team",
            bio: "Hello! My name is Tyler Crabtree and I'm a sophomore at Bishop Ireton. This is my first year on the HackBI team but I've participated as a contestant the last three years. I love to program and I’m so excited to use my knowledge to make HackBI even better. I can’t wait to see what you all will work on in January!"
        },
        {
            src: "images/team/james.jpg",
            name: "James Feeley",
            role: "Middle School Team",
            bio: "Hi! I am James Feeley, and I am excited for my second HackBI. I am a sophomore at Bishop ireton. It's an honor to be a part of this year's HackBI. In my free time, I like to run on the cross-country team, play with my dog, or go on long bike rides. I look forward to seeing you at HackBI."
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
