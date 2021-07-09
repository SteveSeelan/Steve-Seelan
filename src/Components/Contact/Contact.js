import React from 'react'
import { ContactContainer, ContactTitle, IconContainer,
    GithubIcon, InstaIcon, LinkedinIcon, FacebookIcon, EmailIcon, MadeBy, HeartIcon, License } from './ContactElements'

const Contact = () => {

    return (
        <ContactContainer id="Contact">
            <ContactTitle>Contact</ContactTitle>
            <IconContainer>
                <a href="https://github.com/Snseelan19" target="blank"><GithubIcon /></a>
                <a href="https://www.instagram.com/snseelan19/" target="blank"><InstaIcon /></a>
                <a href="mailto:snseelan1@gmail.com"><EmailIcon /></a>
                <a href="https://www.linkedin.com/in/steve-seelan" target="blank"><LinkedinIcon /></a>
                <a href="https://www.facebook.com/steven.robinson.14811" target="blank"><FacebookIcon /></a>
            </IconContainer>
            <MadeBy>Made by Steve Seelan with <HeartIcon /></MadeBy>
            <License>Icons made by <a href="https://www.freepik.com" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></License>
            <License>MIT License</License>
        </ContactContainer>
    )
}

export default Contact
