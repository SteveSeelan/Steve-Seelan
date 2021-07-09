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
                    <AboutDescripton>Hello! My name is Steve and I enjoy programming things
                        for the internet. In 2017 my journey in code started with the C
                        programming language in Purdue University as well as Python. 
                        I began learning JavaScript and web development in my junior year of
                        college.
                    </AboutDescripton>
                    <AboutDescripton>
                        Although I majored in electrical engineering, I focused more on software,
                        taking classes such as embedded C and Data Structures & Algorithms.
                        My main focus these days is building user-friendly software and digital
                        experiences.
                    </AboutDescripton>
                    <AboutDescripton>
                        Here are a few technologies I've been working with recently:
                    </AboutDescripton>
                    <Skills>
                        <SkillsList>JavaScript (ES6+)</SkillsList>
                        <SkillsList>React.js</SkillsList>
                        <SkillsList>Node.js</SkillsList>
                        <SkillsList>Python</SkillsList>
                        <SkillsList>SQL</SkillsList>
                        <SkillsList>REST API</SkillsList>
                    </Skills>
                </AboutContainer>
                <ProfileContainer><Profile src={ProfilePic} alt="ProfilePic"/></ProfileContainer>
            </AboutSection>
        )
}

export default AboutMe
