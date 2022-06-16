import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import CV from './CV';

import HomePage from './pages/HomePage';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <HomePage />
        {/* <CV />  */}
      </ChakraProvider>
    </>
  );
}

export default App;
