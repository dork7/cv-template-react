import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'black'}
      //   bg={useColorModeValue('gray.50', 'black.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} onClick={toggleColorMode}>
          <Heading fontSize={'4xl'} color="white">
            Register your account ✌️
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('gray.200', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" variant={'authField'} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" variant={'authField'} />
            </FormControl>

            <Stack spacing={5}>
              <Button variant={'blackButton'}>Register</Button>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Text>Already have account?</Text>
                <Link to="/login">
                  <Text as="u" color={'blue.300'}>
                    Login
                  </Text>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
