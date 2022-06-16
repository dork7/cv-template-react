import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { animateScroll as scroll, Element, scroller } from 'react-scroll';
import About from './pages/CV/About';
import FloatingButton from './pages/CV/Buttons/FloatingButton';
import Experience from './pages/CV/Experience';
import Footer from './pages/CV/Footer';
import NavBar from './pages/CV/NavBar';
import Projects from './pages/CV/Projects';
import Resume from './pages/CV/Resume';
import Skills from './pages/CV/Skills';
import Splash from './pages/CV/Splash';

const CV = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const navChange = (navLink) => {
    console.log('navLink', navLink);
    // scroller.scrollTo(navLink.split("/")[1], {
    //   duration: 800,
    //   delay: 0,
    //   smooth: "easeInOutQuart",
    // });
  };

  const downButtonClicked = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      <NavBar {...{ navChange }} />
      <Box>
        <Element name="home" className="element">
          <Splash {...{ downButtonClicked }} />
        </Element>

        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="resume" className="element">
          <Resume />
          <Experience />
          <Skills />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element className="element">
          <Footer />
        </Element>

        {/* <Button onClick={scrollToTop}>top</Button> */}
      </Box>
    </>
  );
};

export default CV;
