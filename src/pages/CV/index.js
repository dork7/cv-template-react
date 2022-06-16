import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { animateScroll as scroll, Element, scroller } from 'react-scroll';
import About from './About';
import FloatingButton from './Buttons/FloatingButton';
import Experience from './Experience';
import Footer from './Footer';
import NavBar from './NavBar';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
import Splash from './Splash';

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
