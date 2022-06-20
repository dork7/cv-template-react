import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Login = () => {
  const { toggleColorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'black'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} onClick={toggleColorMode}>
          <Heading fontSize={'4xl'} color="white">
            Sign in to your account 🍪
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                variant={'authField'}
                type="email"
                test-id="email"
                {...register('email', {
                  required: 'Enter email please',
                })}
                isInvalid={!!errors?.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                variant={'authField'}
                type="password"
                test-id="password"
                {...register('password', {
                  required: 'Enter password please',
                  minLength: 2,
                })}
                isInvalid={errors?.password}
              />
            </FormControl>
            <Stack spacing={5}>
              <Button variant={'blackButton'}>Sign in</Button>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Text>Don't have account? 😥</Text>
                <Link to="/register">
                  <Text as="u" color={'blue.300'}>
                    Register
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

export default Login;
