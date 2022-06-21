import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import UserInfoCard from './UserInfoCard';

const NavLink = ({ children, navChange }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={children.external ? children.path : '#'}
      isExternal={children.external}
      onClick={() => {
        navChange(children.path);
      }}
    >
      {children.name}
    </Link>
  );
};

const NavBar = ({ navChange }) => {
  console.log('navChange', navChange);
  const navLinks = [
    { name: 'Home', path: '/home' },
    {
      name: 'Generate CV',
      path: '/generate-cv',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'CV',
      path: '/cv/123',
      external: true,
    },
    {
      name: 'Login',
      path: '/login',
      external: true,
    },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        w="100%"
        position={'fixed'}
        zIndex={999}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {navLinks.map((link) => (
                <NavLink key={link} {...{ navChange }}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} mx={4}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <UserInfoCard />

                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {navLinks.map((link) => (
                <NavLink key={link} {...{ navChange }}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
};

export default NavBar;
