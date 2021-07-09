import React from 'react';
import Container from './Components/GloabalStyles';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutMe from './Components/About/AboutMe';
import Slider from './Components/Projects/Slider';
import { ProjectData } from './Components/Projects/ProjectElements';
import Contact from './Components/Contact/Contact';

const App = () => {

  return (
    <Container>
      <Navbar />
      <Home />
      <AboutMe name="about-me"/>
      <Slider slides={ProjectData}/>
      <Contact />     
    </Container>
  )
}

export default App
