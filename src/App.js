import React from 'react';
import Container from './Components/GloabalStyles';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutMe from './Components/About/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const App = () => {

  return (
    <Container>
      <Navbar />
      <main style={{ overflow: 'hidden' }}>
        <Home />
        <AboutMe name="about-me"/>
        <Projects />
        <Contact />
      </main> 
    </Container>
  )
}

export default App
