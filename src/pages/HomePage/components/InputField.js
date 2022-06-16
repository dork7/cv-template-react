import { Flex, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const InputField = ({ label, value, required, register, errors }) => {
  return (
    <>
      <Flex direction="column" flex="1 0 400px" p={2}>
        <Text>{label}</Text>
        <Input
          id={value}
          border={'2px solid red'}
          {...register(value, { required: `${label} is required` })}
          isInvalid={errors?.[value] && true}
          test-id={value}
        />
        <Text color={'red'}>{errors?.[value]?.message}</Text>
      </Flex>
    </>
  );
};

export default InputField;
