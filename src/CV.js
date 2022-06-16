import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { animateScroll as scroll, Element, scroller } from 'react-scroll';
import About from './components/cv_components/About';
import FloatingButton from './components/cv_components/Buttons/FloatingButton';
import Experience from './components/cv_components/Experience';
import Footer from './components/cv_components/Footer';
import NavBar from './components/cv_components/NavBar';
import Projects from './components/cv_components/Projects';
import Resume from './components/cv_components/Resume';
import Skills from './components/cv_components/Skills';
import Splash from './components/cv_components/Splash';

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
        {/* <Button onClick={scrollTo}>go to 3</Button>
        <Button onClick={scrollToWithContainer}>multi</Button> */}
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
