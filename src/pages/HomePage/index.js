import { Box, Button } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import * as Scroll from 'react-scroll';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../components/ErrorBoundary';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { useEffect } from 'react';
import { Splash } from './components/splash';
const HomePage = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const navChange = (navLink) => {
    console.log('navLink', navLink);
    scroller.scrollTo(navLink.split('/')[1], {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = () => {
    scroller.scrollTo('test3', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container',
      })
    );
  };

  return (
    <>
      <NavBar {...{ navChange }} />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Box>
          {/* <Button onClick={scrollTo}>go to 3</Button>
        <Button onClick={scrollToWithContainer}>multi</Button> */}
          <Element name="home" className="element">
            <Box h="100vh" bg="gray">
              <Splash />
            </Box>
          </Element>

          <Element name="generate-cv" className="element">
            <Box h="100vh">generate-cv</Box>
          </Element>
          <Element name="about" className="element">
            <Box h="100vh">About</Box>
          </Element>
          <Element
            className="element"
            id="scroll-container"
            style={{
              position: 'relative',
              height: '200px',
              overflow: 'scroll',
              scrollbarWidth: 'none',
              marginBottom: '100px',
            }}
          >
            <Element
              name="scroll-container-first-element"
              style={{
                marginBottom: '200px',
              }}
            >
              first element inside container
            </Element>

            <Element
              name="scroll-container-second-element"
              style={{
                marginBottom: '200px',
              }}
            >
              second element inside container
            </Element>
          </Element>
          <Button onClick={scrollToTop}>top</Button>
        </Box>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default HomePage;
