import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import UserInformation from './UserInformation';
import CV from '../../../CV';
const CVForm = () => {
  return (
    <>
      <Flex
        flexDir={'column'}
        alignItems="center"
        justifyContent="center"
        py={'5rem'}
        my={'5rem'}
      >
        <UserInformation />
      </Flex>
    </>
  );
};

export default CVForm;
