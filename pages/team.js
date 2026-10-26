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
            src: "images/team/natepic2.jpg",
            name: "Nathaniel DeGrandi",
            role: "Co-Director",
            bio: "Hello! My name is Nate DeGrandi, and I am a Bishop Ireton senior. I will be helping you as HackBI X’s co-director! This is my fourth year attending HackBI and my second as part of the team. I cannot wait to make HackBI as awesome as possible! Outside of HackBI I enjoy walking, reading, basketball, circuit design, and listening to J. Cole. In college, I plan on majoring in electrical engineering somewhere with plenty of snow!"
        },
        {
            src: "images/team/bernadettepic.jpeg",
            name: "Bernadette Phan",
            role: "Co-Director",
            bio: "Hey guys! I'm Bernadette and I'm so hyped to be one of the co-directors for HackBI this year. This is my second year on the team, and before that I participated in the hackathon my freshman year. Outside of Hack BI, I love to eat, hike, bake, and research random things. I am also very interested in the fields of dermatology and biotech. Nate and I, along with our wonderful team, have been working hard to plan this year's hackathon and we hope that you enjoy it! See you then 😊"
        },
        {
            src: "images/team/manuelpic.jpeg",
            name: "Manuel Guillermety",
            role: "Outreach Team Leader",
            bio: "Hi! I’m Manuel Guillermety a senior at BI and the team leader of our marketing team this year. This is my second year working in Hack BI, and I’m really excited for the 10th anniversary of it! If you see me, be sure to ask me anything! I’m open to many people and I’m excited to work with all of you!"
        },
        {
            src: "images/team/Matthiaspic.JPG",
            name: "Matthias Borges",
            role: "Admin Co-Leader",
            bio: "Hi, I am Matthias, I am a senior at BI. This is my 2nd year on the Hack BI team and my 5th Hack BI. I am leading admin team this year. I am interested in anything engineering. In my free time I love playing Ice Hockey, watching Movies, working out, listening to music, gaming, and enjoying nature."
        },
        {
            src: "images/team/elliotfpic.jpg",
            name: "Elliot Freitag",
            role: "Events Team Leader",
            bio: "Hi, I'm Elliot and this is my second year working at Hack Bi! I am the leader of the Events team, and I have been a participant ever since my freshman year. My mission as the leader of the Events team is to come up with ideas on how to make Hack BI fun and exciting for everyone. I love cats and playing games! I hope to see all of you at this hackathon."
        },
        {
            src: "images/team/annpic.jpeg",
            name: "An-Huy Dang",
            role: "Outreach Team Member",
            bio: "Hi everyone! I’m Ann, and I’m a junior here at Ireton. I am part of the Marketing/Outreach team for this year’s HackBI! This is the first time I’m doing anything involving HackBI, so I’m super excited to see what it’s all about. Other activities I’ve been involved in at school include SCA, Wind Ensemble, Asian Heritage Club, and Cheer! I am also very interested in the fields of biology and psychology. In my free time I love to do anything involving music and hanging out with friends! So excited to see everyone at the hackathon!"
        },
        {
            src: "images/team/ianpic.jpeg",
            name: "Ian Hixson",
            role: "Design Team Member",
            bio: "Hi, I am Ian Hixson and am so excited to be working on photography of this event and giving insight for the marketing team. Although I am less a part of the event this year, I am still happy to help my Senior year!"
        },
        {
            src: "images/team/Samanthapic.png",
            name: "Samantha Corallo",
            role: "Outreach Team Member",
            bio: "Hi! I’m Samantha Corallo, and I’m a senior at Bishop Ireton. This is my first year doing HackBI, and I’m very excited to be involved with the Marketing/Outreach team! In my free time, I enjoy hanging out with my friends, listening to music, and baking."
        },
        {
            src: "images/team/PatrickHackBIPhoto.jpg",
            name: "Patrick Costello",
            role: "Admin Team Member",
            bio: "Hello, I am Patrick Costello and I'm a Junior at Bishop Ireton. This is my second-year staffing. I'm excited to work with everyone and have a great HackBI X!"
        },
        {
            src: "images/team/maevepic.jpeg",
            name: "Maeve McGuire",
            role: "Design Team Leader",
            bio: "Hi! I’m Maeve McGuire, and I am a senior at Bishop Ireton. I’m so hyped to be the leader of the Hack BI X Marketing/Design team! This is my first time being a part of the team, but I was a participant when I was in middle school. I love to read and play golf in my free time. I can’t wait to work with everyone this year."
        },
        {
            src: "images/team/JohnGieseyPic.jpg",
            name: "John Giesey",
            role: "Events Team Member",
            bio: "Hello, I am John Giesey and I am a sophomore at Bishop Ireton. This is my first year on the Hack BI team, specifically the events team. I am also taking the stage crafts class, and I altar serve here at BI. I also have a band called Two Pounds of Ammo (though we have yet to actually record songs). I can also play cello, ukelele, and guitar. See you at Hack BI X!"
        },
        {
            src: "images/team/amandapic.jpeg",
            name: "Amanda Vergara",
            role: "Events Team Member",
            bio: "Hi! I’m Amanda Vergara and I’m a senior at Bishop Ireton. This is my 2nd year being on the team for HackBI and I couldn’t be more excited! I am part of the Middle School team, and we are so happy to meet all the participants. On the activities side, I love to listen to music (especially Olivia Dean and Clairo), hang out with my friends, go on walks, and am the President of the Hispanic Heritage Club. See you at HackBI X!"
        },
        {
            src: "images/team/isabellapic.jpeg",
            name: "Isabella Palomino",
            role: "Design Team Member",
            bio: "Hey! I’m Isabella Palomino, but feel free to call me Bella. I am a senior at Bishop Ireton, but this is my first time being a part of Hack-BI. I am a part of the design and marketing team, outside of HackBI though I play club volleyball and am a part of MUN. My dream is to become an ambassador which requires more STEM knowledge than you would think. I am so excited to be a part of the Team this year, and I hope you all are just as glad to be attending!"
        },
        {
            src: "images/team/micahpic.jpeg",
            name: "Micah Abalahin",
            role: "Admin Team Co-Leader",
            bio: "Hello! My name is Micah Abalahin, and I am a Bishop Ireton senior serving on this year’s admin team. I am excited to be a part of the Hack BI team for the first time and look forward to all the future festivities! In my free time, I love to play video games, practice my trumpet (jazz music is my absolute favorite genre of all time), and run when I get the chance. Physics and math are my top two subjects at school, but I also hope to have lots of fun helping out in this CS event. Best wishes to everyone at Hack BI!"
        },
        {
            src: "images/team/Mattiepic.jpg",
            name: "Mattie Gerety",
            role: "Design Team Member",
            bio: "Hello! My name is Mattie Gerety, I am Junior at Bishop Ireton. This is my first year working for HackBI. I am extremely interested in theater and helped build and paint the set for Ireton’s productions. I am also an award-winning sailor, and an archer."
        },
        {
            src: "images/team/alejandropic.jpeg",
            name: "Alejandro Burneo",
            role: "Middle School Team Member",
            bio: "Hello, I’m Alejandro Burneo and I am a Bishop Ireton junior. This is my first year on the team, however I have attended HackBI twice in the past, once in middle school and once during my freshman year. I am excited to be part of the team and hope to help make HackBI as good as it can be."
        },
        {
            src: "images/team/TylerCrabtreePic.jpg",
            name: "Tyler Crabtree",
            role: "Middle School Team Member",
            bio: "Hello! I’m Tyler Crabtree and I’m a junior at Bishop Ireton. This is my second year on the HackBI team; I was a contestant for three years prior to joining, and I’m excited to be able to continue bringing my programming skills to teach and inspire others. I can’t wait to see what you all bring this year!"
        },
        {
            src: "images/team/bakhitapic.jpg",
            name: "Bakhita Karenge",
            role: "Admin Team Member",
            bio: "Hello, my name is Bakhita Karenge and this is my first time on the HackBI team. I enjoy singing, reading, and writing reviews on books and films. I am interested in the field of chemistry and I’m planning to focus on chemical engineering. I look forward to making HackBI X the best one yet!"
        },
        {
            src: "images/team/silviapic.jpeg",
            name: "Silvia Modu",
            role: "Logistics Team Member",
            bio: "Hello, my name is Silvia Modu and I’m a senior on the Hack BI’s Logistics team. This will be my first year attending Hack BI, but I’m excited to be a part of the process. I love all things STEM and I’m good at coordinating events and writing emails. I’m looking forward to being a critical part of the team."
        },
        {
            src: "images/team/yohannapic.jpeg",
            name: "Yohanna Girma",
            role: "Events Team Member",
            bio: "Hi, I'm Yohanna, and I'm a senior at Bishop Ireton. This is my first year being a part of HackBI, and I'm so excited to join the Events team! In my free time, I love to read, listen to music, and go on walks."
        },
        {
            src: "images/team/noreenpic.jpeg",
            name: "Noreen Njau",
            role: "Middle School Team Member",
            bio: "Hello, I’m Noreen Njau and I’m a senior at Bishop Ireton. This is my second year being on the Hack BI team, but my first year being a leader! I love to read during my free time as well as watch different 2000s shows. I plan on going to the Computer Science field, but not quite sure on the specifics of what part of the field since it is so broad. I am so excited to be head of the Middle School Group and cannot wait to meet the attendees. I hope it lives up to the hype and hope they will have an amazing time."
        },
        {
            src: "images/team/astridpic.jpeg",
            name: "Astrid Urman",
            role: "Logistics Team Leader",
            bio: "Hello, I’m Astrid Urman and I’m a senior at Bishop Ireton. I like my science classes and hanging out with friends when I’m free. This year I am leading the logistics team, and it will be my third year participating in Hack BI. I hope Hack BI X will run smoothly and be enjoyable for everyone!"
        },
        {
            src: "images/team/joshhackbiphoto.jpg",
            name: "Joshua Rough",
            role: "Events Team Member",
            bio: "Hi, I’m Joshua, a junior at Bishop Ireton. This is my second year helping at HackBI, with being an attendee for the previous two years. I have helped with the events team in the past, and currently. I can’t wait to help in another great HackBI!"
        },
        {
            src: "images/team/LaylaMikhinpic.PNG",
            name: "Layla Mikhin",
            role: "Middle School Team Member",
            bio: "Hello, I’m Layla and I’m a junior at Bishop Ireton. This is my first year on the Hack BI and I’m helping with the middle school team. I like to read and craft in my free time. I’m so excited to be a part of this amazing team."
        },
        {
            src: "images/team/EG_bio_pic.jpg",
            name: "Ellory Gray",
            role: "Middle School Team Member",
            bio: "Hello! My name is Ellory and I am a senior at Bishop Ireton. This is my first year working at Hack BI and I am a part of the middle school hackathon team. I am excited to work with potential BI students. Outside of Hack BI, I love to bake, read, and play soccer. I am so excited to work on Hack BI this year with my team."
        },
        {
            src: "images/team/AvaSanGasparPic.jpeg",
            name: "Ava San Gaspar",
            role: "Logistics Team Member",
            bio: "Hi! My name is Ava San Gaspar. I am a junior at Bishop Ireton and my first year being part of the HackBI team. I love anything STEM related, but especially programming and chemistry. I’m so thrilled to meet you all and I’m so excited to see what we’ll do this year!"
        },
        {
            src: "images/team/SienaSanPic.png",
            name: "Siena Santoro",
            role: "",
            bio: "Hiiii! I’m Siena Santoro, a senior at BI. Between coaching hurdles and copious amounts of homework you can find me reading, playing The Sims 4, and getting dragged around by my friends. I’m super excited to join the marketing team this year because I absolutely love graphic design and getting to work with new people. See you at the Hackathon!"
        },
        {
            src: "images/team/MarySchweerspic.JPG",
            name: "Mary Schweers",
            role: "Design Team Member",
            bio: "Hi! My name is Mary Schweers and I’m a junior at Bishop Ireton. I’ve participated at Hack BI as an attendee, but this is my first time on the Hack BI team! I’m on the middle school team and I’m so excited to make this the best Hack BI possible! In my free time I like reading whatever books catch my eye (I’m really into Agatha Christie right now), writing short stories, and practicing piano. Happy Hacking!"
        },
        {
            src: "images/team/DavisPic.JPG",
            name: "Davis Nguyen",
            role: "Logistics Team Member",
            bio: "Hello! My name is Davis Nguyen and I’m a senior at BI. This is my second year doing Hack BI and my first year on the team. I’m excited to be helping out the team this year with logistics. Besides that, I love music and anything related to music. Whether that’s listening to Paul McCartney, playing with the jazz band, or making music of my own."
        },
        {
            src: "images/team/alanipic.jpeg",
            name: "Alani Henning",
            role: "Events Team Member",
            bio: "Hi! I’m Alani Henning, a high school student interested in neuroengineering, neuroscience, and technology. I participate in crew, track, and Model UN, and I enjoy challenging myself through academics, teamwork, and problem-solving opportunities like hackathons. I’m especially interested in how engineering and neuroscience can be combined to improve people’s lives through innovation and research. Outside of school, I enjoy language learning, traveling, and exploring new ideas in science and tech."
        },
        {
            src: "images/team/quincypic.jpeg",
            name: "Quincy Scanlon",
            role: "Logistics Team Member",
            bio: "Hey, I’m Quincy Scanlon. I’m a senior planning to major in nursing. I’m always on the move being on the rowing team, biking, or rock climbing. I love to hang out with my friends and meet new people. I’m obsessed with all types of music and always want some new recommendations. I love video games, movies, and tv. If you see me at Hack BI say hi!"
        },
        {
            src: "images/team/jamesfeeleypic.jpeg",
            name: "James Feeley",
            role: "Middle School Team Member",
            bio: "Hi! I am James Feeley, and I am excited for my third HackBI. I am a junior at Bishop Ireton. It’s an honor to be a part of this year’s HackBI. In my free time, I like to run on the cross-country team, play with my dog, or go on long bike rides. I look forward to seeing you at HackBI."
        },
        {
            src: "images/team/carolinepic.jpeg",
            name: "Caroline Reams",
            role: "Design Team Member",
            bio: "Hello! My name is Caroline Reams. I'm a senior at Bishop Ireton. This is my first year with the Hack BI team. In my free time, I enjoy painting, drawing, and listening to music. I am also the head of the painting department for theater tech."
        },
        {
            src: "images/team/ChristopherPic.jpeg",
            name: "Christopher Saint-Cyr",
            role: "Events Team Member",
            bio: "Hi, I'm Chris, and this is my First year working at Hack Bi! I am a member of the Events team, and I have participated in 8th grade, but not in my sophomore and freshman years. My mission as a member of the Events team is to help come up with ideas and reform old ones to make HackBi as successful as possible. I love stop motion, video games, video editing, and movies."
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
