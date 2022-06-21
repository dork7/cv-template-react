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
  chakra,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from './registerSlice';
import { createToast } from '../../../components/ToastMessage';

const Register = () => {
  const { toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSelector((state) => state.register);

  useEffect(() => {
    console.log('data', data);

    if (data?.success) {
      createToast({
        title: 'Register success',
        msg: `Welcome , ${data.email}`,
        type: 'success',
      });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      createToast({
        title: 'Register failed',
        msg: error.message,
        type: 'error',
      });
    }
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (body) => {
    // console.log('body', body);
    dispatch(registerRequest(body));
  };

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
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.200', 'gray.700')}
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
                  Register
                </Button>
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
        </chakra.form>
      </Stack>
    </Flex>
  );
};

export default Register;
