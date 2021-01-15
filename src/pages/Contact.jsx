import React from "react";
import { Flex, Text, Heading, Image } from "@chakra-ui/react";
import { MotionBox } from "../components/AnimatedText";

//image
import totoroWave from "../images/Insta/totoro_wave.jpg";

const Contact = () => {
  return (
    <Flex
      w="70%"
      m="auto"
      direction={{ base: "column", md: "row" }}
      overflowX="hidden"
    >
      <MotionBox
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
          transition: {
            ease: "easeInOut",
            type: "spring",
            duration: 0.8,
          },
        }}
        mt="20px"
        w={{ base: "100%", md: "50%" }}
      >
        <Image
          borderRadius="8px"
          w="90%"
          m="auto"
          src={totoroWave}
          alt="waving Totoro"
        />
      </MotionBox>
      <MotionBox
        initial={{
          x: "100vw",
        }}
        animate={{
          x: 0,
          transition: {
            ease: "easeInOut",
            type: "spring",
            duration: 0.8,
          },
        }}
        w={{ base: "100%", md: "50%" }}
      >
        <Heading
          color="accentL"
          mt={{ base: "20px", md: "30%" }}
          fontSize={{ base: "4xl", md: "6xl" }}
          ml={{ base: "0px", md: "40px" }}
          textAlign="center"
        >
          Please Reach Out
        </Heading>
        <Text
          fontFamily="titles"
          fontSize="xl"
          ml={{ base: "0px", md: "34%" }}
          mt="20px"
        >
          EMAIL: drowchet@giggles.com
        </Text>
        <Text
          fontFamily="titles"
          fontSize="xl"
          ml={{ base: "0px", md: "34%" }}
          mb={{ base: "50px", md: "0px" }}
        >
          PHONE: 1(951) 531-4000
        </Text>
      </MotionBox>
    </Flex>
  );
};

export default Contact;
