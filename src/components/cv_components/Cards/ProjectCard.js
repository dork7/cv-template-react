import {
  Box,
  chakra,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.800")}
      m={8}
      //   w="600px"
      rounded="lg"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="md"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="2xl"
        rounded="lg"
        overflow="hidden"
        zIndex={200}
        // w="600px"
      >
        {/* <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></Box> */}

        <Box p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {project.name}
          </chakra.h1>

          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            noOfLines={4}
          >
            {project.description}
          </chakra.p>
          {project.link !== "" && (
            <Flex mt={3} alignItems="center" justifyContent="flex-end">
              <Link href={project.link} isExternal>
                <Text fontSize="xs" color={"gray.500"}>
                  Link
                </Text>
              </Link>
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
