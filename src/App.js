import { ChakraProvider, extendTheme, Flex, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './config/theme';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import store from './store.js';

const LazyLoadedCV = React.lazy(() => import('./pages/CV'));
const LazyLoadedHomePage = React.lazy(() => import('./pages/HomePage'));
const LazyLoadedLoginPage = React.lazy(() => import('./pages/Shared/Login'));
const LazyLoadedRegisterPage = React.lazy(() =>
  import('./pages/Shared/Register')
);

const queryClient = new QueryClient();

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
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Suspense fallback={<WaitingSpinner />}>
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<LazyLoadedLoginPage />} />
                  <Route
                    path="/register"
                    element={<LazyLoadedRegisterPage />}
                  />

                  <Route path="/" element={<LazyLoadedHomePage />} />

                  <Route path="/cv/:userId" element={<LazyLoadedCV />} />
                </Routes>
              </BrowserRouter>
            </Suspense>
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
