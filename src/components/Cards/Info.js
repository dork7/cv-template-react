import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useUserDataSet } from "../../hooks/useUserDataSet";
import MediaLinks from "../MediaLinks";

const Info = () => {
  const user = useUserDataSet();

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            // scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Flex justify={"center"} direction="column">
          <Box
            bg="rgb(0,0,0, 0.8)"
            // w={{ base: "md", md: "xl", lg: "xl" }}
            d="flex"
            flexDir={"column"}
            alignSelf={"center"}
            justifyContent={"center"}
            p={12}
            borderRadius={44}
          >
            <Heading fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
              I'm {user.name}.
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              w={{ base: "100%", md: "60%" }}
              alignSelf={"center"}
            >
              {user.description}
            </Text>
            <MediaLinks alignSelf={"center"} />
          </Box>
        </Flex>
      </motion.div>
    </>
  );
};

export default Info;
