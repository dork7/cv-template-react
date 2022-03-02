import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import MediaLinks from "./MediaLinks";
const Footer = () => {
  return (
    <Box
      pt={4}
      mt={22}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack>
        <MediaLinks />
        <Text fontSize="xs" color={"gray.500"} textAlign={"center"} pb={2}>
          © 2022, All rights reserved
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
