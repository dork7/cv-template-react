import {
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { useUserDataSet } from "../hooks/useUserDataSet";

const About = () => {
  const user = useUserDataSet();
  const imageLocationX = useBreakpointValue({ base: "center", lg: "flex-end" });
  const imageLocationY = useBreakpointValue({ base: "flex-end", md: "center" });

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      {" "}
      <Box
        d="flex"
        justifyContent={{ base: "center", lg: "flex-end" }}
        alignItems={{ base: "flex-end", lg: "center" }}
        p={16}
      >
        <Image
          src={user.profileImage}
          alt=""
          fit="cover"
          borderRadius="full"
          boxSize="150px"
          bg="gray.100"
          loading="lazy"
        />
      </Box>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        pr={{ base: 4, lg: 12 }}
        py={16}

        // w="full"
      >
        <Badge
          color={useColorModeValue("brand.600", "gray.300")}
          bgColor={useColorModeValue("gray.300", "brand.600")}
          px={3}
          py={1}
          mb={3}
          variant="solid"
          colorScheme="brand"
          rounded="full"
        >
          About Me{" "}
        </Badge>
        <Text
          mb={6}
          p={2}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          //   fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          w="75%"
        >
          {user.aboutMe}{" "}
        </Text>
        <Flex justify={"space-between"} w="75%">
          <Box>
            <Badge
              color={useColorModeValue("brand.600", "gray.300")}
              bgColor={useColorModeValue("gray.300", "brand.600")}
              px={3}
              py={1}
              mb={3}
              variant="solid"
              colorScheme="brand"
              rounded="full"
            >
              Contact Details
            </Badge>
            <Stack spacing={1} p={2}>
              <Text>{user.name}</Text>
              <Text>{user.address}</Text>
              <Text>
                {user.city} {user.country}
              </Text>
              <Text>{user.phone}</Text>
              <Text>{user.email}</Text>
            </Stack>
          </Box>

          <Link href={user.resumeLink} isExternal p={2}>
            <Button>Download Resume</Button>
          </Link>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default About;
