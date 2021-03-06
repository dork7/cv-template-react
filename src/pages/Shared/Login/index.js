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
  chakra,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createToast } from '../../../components/ToastMessage';
import { getUser, loginRequest, setLoginError } from './loginSlice';
const Login = () => {
  const { toggleColorMode } = useColorMode();

  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.login);
  useEffect(() => {
    if (data?.success) {
      createToast({
        title: 'Login success',
        msg: `Welcome , ${data.email}`,
        type: 'success',
      });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      createToast({
        title: 'Login failed',
        msg: error.message,
        type: 'error',
      });
      dispatch(setLoginError());
    }
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (body) => {
    dispatch(loginRequest(body));
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'black'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} onClick={toggleColorMode}>
          <Heading fontSize={'4xl'} color="white">
            Sign in to your account 🍪
          </Heading>
        </Stack>
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                  variant={'blackButton'}
                  type="submit"
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
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
        </chakra.form>
      </Stack>
    </Flex>
  );
};

export default Login;
