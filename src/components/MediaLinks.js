import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useUserDataSet } from "../hooks/useUserDataSet";

const MediaLinks = () => {
  const { links } = useUserDataSet();
  return (
    <HStack alignSelf={"center"} pt={4} spacing={6}>
      {links.linkedin !== "" && (
        <Link href={links.linkedin} isExternal>
          <Icon as={FaLinkedinIn} w={6} h={6} />
        </Link>
      )}
      {links.github !== "" && (
        <Link href={links.github} isExternal>
          <Icon as={FaGithub} w={6} h={6} />
        </Link>
      )}
      {links.facebook !== "" && (
        <Link href={links.facebook} isExternal>
          <Icon as={FaFacebookF} w={6} h={6} />
        </Link>
      )}
      {links.instagram !== "" && (
        <Link href={links.instagram} isExternal>
          <Icon as={FaInstagram} w={6} h={6} />
        </Link>
      )}
    </HStack>
  );
};

export default MediaLinks;
