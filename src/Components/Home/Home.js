import React, {useEffect} from 'react'
import { HomeTitle, HomeDiv, HomeContainer, HomeCaption, Description, CustomBtn } from './HomeElements'
import AOS from 'aos';
import "aos/dist/aos.css";
import Typical from 'react-typical';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, []);

    return (
        <HomeDiv data-aos='fade-down'>
            <HomeContainer xs="15" id="Home">
                <HomeTitle>Steve Seelan</HomeTitle>
                <HomeCaption>
                            <Typical 
                                loop={Infinity}
                                wrapper="div"
                                steps={["Software Engineer.", 800, 'Full-Stack Developer.', 800, 'Purdue Grad.', 800, 'Soccer Fanatic.', 800]}
                            /></HomeCaption>
                <Description>I'm a San Francisco based software engineer mostly doing full stack development.</Description>   
            <CustomBtn as='a' href="mailto:snseelan1@gmail.com">Get in Touch</CustomBtn> 
            </HomeContainer>
        </HomeDiv> 
    )
}

export default Home
