import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import { useUserDataSet } from "../hooks/useUserDataSet";
import Info from "./Cards/Info";
const Splash = ({ downButtonClicked }) => {
  const { bgImage } = useUserDataSet();
  const arrowStyles = {
    display: "none",
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      img: bgImage, // "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  // const setSlide = (slide) => {
  //   setCurrentSlide(slide);
  // };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  useEffect(() => {
    // setInterval(() => {
    //   nextSlide();
    // }, 2000);
  }, []);

  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      //   p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h={{ base: "50vh", md: "100vh" }} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image src={slide.img} boxSize="full" backgroundSize="cover" />
              <Stack
                p="8px 12px"
                pos="absolute"
                top={{ base: "20%", md: "30%" }}
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Info />
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>

        <HStack justify="center" pos="absolute" bottom="22px" w="full">
          <IconButton
            bg="none"
            borderRadius={20}
            overflow="hidden"
            icon={<AiFillDownCircle size="45px" />}
            onClick={downButtonClicked}
            color="#FF6347"
            _hover={{
              bg: "none",
            }}
            _focus={{
              border: "none",
            }}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Splash;
