import { extendTheme } from '@chakra-ui/react';
import { ExtendedButtons as Button } from './components/buttons';
import { ExtendedInputs as Input } from './components/inputs';

const theme = extendTheme({
  config: {
    // useSystemColorMode: true,
    // initialColorMode: 'dark',
  },
  shadows: { outline: '0 0 0 0' },

  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  components: {
    Button,
    Input,
  },
});

export default theme;
