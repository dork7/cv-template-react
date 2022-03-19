import { AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { HStack, Icon, Link } from "@chakra-ui/react";
import { useUserDataSet } from "../../hooks/useUserDataSet";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { links } = useUserDataSet();

  return (
    <>
      <motion.div
        style={{
          // width: 150,
          // height: 150,
          position: "fixed",
          borderRadius: "30px",
          zIndex: 999,
          bottom: "40px",
          right: "40px",

          // backgroundColor: "#fff",
        }}
      >
        <Fab
          mainButtonStyles={{
            color: "#FF6347",
            backgroundColor: "#2b2b2b",
          }}
          actionButtonStyles={{
            color: "red",
          }}
          style={{
            bottom: "40px",
            right: "40px",
          }}
          icon={<AddIcon />}
          // event={event}
          alwaysShowTitle={true}
        >
          {links.linkedin && (
            <Action
              text="LinkedIn"
              style={{
                backgroundColor: "#2b2b2b",
              }}
            >
              <Link href={links.linkedin} isExternal>
                <Icon as={FaLinkedinIn} w={6} h={6} />
              </Link>
            </Action>
          )}
          {links.github && (
            <Action
              text="Github"
              style={{
                backgroundColor: "#2b2b2b",
              }}
            >
              <Link href={links.github} isExternal>
                <Icon as={FaGithub} w={6} h={6} color="#FF6347" />
              </Link>
            </Action>
          )}
          {links.facebook && (
            <Action
              text="Facebook"
              style={{
                backgroundColor: "#2b2b2b",
              }}
            >
              <Link href={links.facebook} isExternal>
                <Icon as={FaFacebookF} w={6} h={6} color="#FF6347" />
              </Link>{" "}
            </Action>
          )}
          {links.instagram && (
            <Action
              text="Instagram"
              style={{
                backgroundColor: "#2b2b2b",
              }}
            >
              <Link href={links.instagram} isExternal>
                <Icon as={FaInstagram} w={6} h={6} color="#FF6347" />
              </Link>{" "}
            </Action>
          )}
        </Fab>
      </motion.div>
    </>
  );
};

export default FloatingButton;
