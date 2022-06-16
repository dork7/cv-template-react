import {
  Box,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useUserDataSet } from "../../hooks/useUserDataSet";

const InfoCard = () => {
  const user = useUserDataSet();
  return (
    <>
      <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}>
        I'm {user.name}.
      </Heading>
      <Text fontSize={{ base: "md", lg: "xl" }} w="35%" alignSelf={"center"}>
        {user.description}
      </Text>
    </>
  );
};

export default InfoCard;
