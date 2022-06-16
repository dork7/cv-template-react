import { ChakraProvider, extendTheme, Flex, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const LazyLoadedCV = React.lazy(() => import('./pages/CV'));
const LazyLoadedHomePage = React.lazy(() => import('./pages/HomePage'));

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({ config });
const WaitingSpinner = () => {
  return (
    <>
      <Flex h="100vh" justify={'center'} alignItems="center">
        <Spinner size={'xl'} />
      </Flex>
    </>
  );
};

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<WaitingSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LazyLoadedHomePage />} />

              <Route path="/cv/:userId" element={<LazyLoadedCV />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;
