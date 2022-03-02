import { Badge, Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useUserDataSet } from "../hooks/useUserDataSet";

const Skills = () => {
  const user = useUserDataSet();

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
      px={2}
    >
      {" "}
      <Box
        d="flex"
        justifyContent={{ base: "center", lg: "flex-end" }}
        // alignItems={{ base: "flex-end", lg: "center" }}
        px={16}
      >
        <Text as="u" fontSize={{ base: "md", md: "lg", lg: "xl" }} pb={2}>
          Skills
        </Text>
      </Box>
      <Box
        direction="rows"
        w={{ base: "100%", md: "70%", lg: "70%" }}
        pr={{ base: 4, lg: 12 }}
        pb={16}

        // w="full"
      >
        {user?.skills?.map((skill, idx) => {
          return (
            <>
              <Badge
                // color={useColorModeValue("brand.600", "gray.300")}
                // bgColor={useColorModeValue("gray.300", "brand.600")}
                bg="gray.900"
                // _dark={{ bg: "brand.600" }}
                px={3}
                py={1}
                m={1}
                variant="solid"
                colorScheme="brand"
                rounded="full"
                key={`skill-${idx}`}
              >
                {skill}
              </Badge>
            </>
          );
        })}
      </Box>
    </SimpleGrid>
  );
};

export default Skills;
