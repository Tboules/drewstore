import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import InstagramStack from "../components/InstagramStack";
import { MotionText } from "../components/AnimatedText.js";

const sharedTextStyles = {
  color: "accentP",
  fontSize: { base: "3xl", md: "6xl" },
  fontFamily: "heading",
  textAlign: "center",
};

const MyStory = () => {
  return (
    <Box>
      <Flex direction="column" align="center">
        <Heading
          fontFamily="mono"
          fontSize="3xl"
          mt="100px"
          mb="40px"
          color="accentL"
        >
          Mission
        </Heading>
        <MotionText
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              ease: "easeInOut",
              duration: 0.4,
            },
          }}
          {...sharedTextStyles}
        >
          To bring cuteness, cuddles, warmth, and beauty into your home.
        </MotionText>
        <MotionText
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              ease: "easeInOut",
              duration: 0.8,
            },
          }}
          {...sharedTextStyles}
        >
          To breed happiness through squeezes and snuggles.
        </MotionText>
        <MotionText
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: {
              ease: "easeInOut",
              duration: 1.2,
            },
          }}
          {...sharedTextStyles}
        >
          Simply, to hand you joy.
        </MotionText>
        <InstagramStack title={false} />
      </Flex>
    </Box>
  );
};

export default MyStory;
