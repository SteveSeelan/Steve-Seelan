import React, {useEffect} from 'react';
import { AboutSection, AboutContainer, AboutTitle, AboutDescripton,
        Skills, SkillsList, ProfileContainer, Profile } from './AboutElements';
import ProfilePic from './ProfilePic.png';
import AOS from 'aos';
import "aos/dist/aos.css";


const AboutMe = (props) => {
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1500
        });
      }, []);

        return (
            <AboutSection data-aos='fade-up' id={props.name}>
                <AboutContainer>
                    <AboutTitle>About Me</AboutTitle>
                    <AboutDescripton>Hello! My name is Steve and I enjoy programming.
                        In 2017 my journey in code started with the C programming language
                        at Purdue University. I now love using Java, Python, Go, and Typescript
                        at times... I'm always eager to learn new languages and tools. 
                    </AboutDescripton>
                    <AboutDescripton>
                        Although I majored in electrical engineering, I focused more on software,
                        taking classes such as embedded C and Data Structures & Algorithms.
                    </AboutDescripton>
                    <AboutDescripton>
                        Here are a few technologies I've been working with recently:
                    </AboutDescripton>
                    <Skills>
                        <SkillsList>Java JDK 11+</SkillsList>
                        <SkillsList>Python</SkillsList>
                        <SkillsList>PyTorch</SkillsList>
                        <SkillsList>AWS</SkillsList>
                        <SkillsList>Docker</SkillsList>
                        <SkillsList>React.js</SkillsList>
                    </Skills>
                </AboutContainer>
                <ProfileContainer><Profile src={ProfilePic} alt="ProfilePic"/></ProfileContainer>
            </AboutSection>
        )
}

export default AboutMe
