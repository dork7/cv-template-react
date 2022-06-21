import { createStandaloneToast } from '@chakra-ui/react';

const toast = createStandaloneToast();

export const createToast = ({
  title,
  msg = '',
  type = 'success',
  duration = 5000,
  isClosable = true,
  variant = 'solid',
}) => {
  const position = 'bottom';
  toast({
    title,
    description: msg,
    status: type,
    duration,
    isClosable,
    variant,
    position,
  });
};
