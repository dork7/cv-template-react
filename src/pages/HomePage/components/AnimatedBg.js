import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';
import { Box, Image } from '@chakra-ui/react';
import { Splash } from './splash';
const AnimatedBg = () => {
  return (
    <>
      <Atropos
        activeOffset={1}
        rotateXMax={1}
        rotateYMax={1}

        // rotate={false}
      >
        <Box
          height="100vh"
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(https://images.unsplash.com/photo-1642295406180-ac795877b533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80)`}
        ></Box>
        {/* <Splash /> */}
      </Atropos>
    </>
  );
};

export default AnimatedBg;
