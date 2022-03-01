import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
  HStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Info from "./Cards/Info";
import { AiFillDownCircle } from "react-icons/ai";
import { useUserDataSet } from "../hooks/useUserDataSet";
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
    // {
    //   img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   label: "First Slide",
    //   description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
    // {
    //   img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   label: "Second Slide",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
    // {
    //   img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    //   label: "Third Slide",
    //   description:
    //     "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    // },
    {
      img: bgImage, // "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    // {
    //   img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   label: "Fifth Slide",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
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
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
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
          {/* {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))} */}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Splash;
