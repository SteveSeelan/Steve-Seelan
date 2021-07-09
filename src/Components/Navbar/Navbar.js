import React, {useState} from 'react'
import {Nav, Menu, Hamburger, MenuLinks} from './NavbarElements'
import LogoSpin from './LogoSpin'
import { scroller } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

        return (
            <Nav>
                <LogoSpin />
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <MenuLinks onClick={() => {
                        setIsOpen(!isOpen);
                        scroller.scrollTo('about-me', {
                            delay: 100,
                            smooth: 'easeOutQuad',
                            offset: -200,
                            duration: 1000,
                        })}}>About Me</MenuLinks>
                    <MenuLinks onClick={() => {
                        setIsOpen(!isOpen);
                        scroller.scrollTo('Projects', {
                            delay: 100,
                            smooth: 'easeOutQuad',
                            offset: -150,
                            duration: 1000,
                        })}}>Projects</MenuLinks>
                    <MenuLinks onClick={() => {
                        setIsOpen(!isOpen);
                        scroller.scrollTo('Contact', {
                            delay: 100,
                            smooth: 'easeOutQuad',
                            offset: -150,
                            duration: 1000,
                        })}}>Contact</MenuLinks>
                </Menu>
            </Nav>  
        ) 
}

export default Navbar
