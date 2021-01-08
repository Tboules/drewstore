import React from "react";
import { Image, Text, Box, Flex, Button } from "@chakra-ui/react";

const sharedText = {
  fontFamily: "titles",
  fontWeight: 500,
  mt: 0,
  fontSize: { base: "3xl", sm: "4xl" },
};

const dynamicWidth = {
  w: { base: "100%", xl: "50%" },
};

const ImageLeftCards = ({
  img,
  title,
  tagLineTop,
  tagLineBottom,
  color,
  textColor,
}) => {
  return (
    <Flex {...dynamicWidth} direction={{ base: "column", xl: "row" }} h="600px">
      <Image
        objectFit="cover"
        src={img}
        {...dynamicWidth}
        h={{ base: "60%", xl: "100%" }}
      />
      <Box
        bgColor={color}
        {...dynamicWidth}
        h={{ base: "40%", xl: "100%" }}
        pl={{ base: "80px", xl: "5%" }}
        pr="10px"
        pos="relative"
      >
        <Text
          mt={{ base: "20px", xl: "180px" }}
          fontSize={{ base: "1rem", lg: "1.2rem" }}
          fontFamily="mono"
          color={textColor}
          letterSpacing="1px"
        >
          {title}
        </Text>
        <Text {...sharedText} color={textColor} mt="30px">
          {tagLineTop}
        </Text>
        <Text {...sharedText} color={textColor}>
          {tagLineBottom}
        </Text>
        <Button
          borderRadius="none"
          pos={{ base: "absolute", xl: "relative" }}
          top={{ base: "-90px", xl: "0" }}
          mt="40px"
          right="0"
          h="50px"
          w="140px"
        >
          Shop Now!
        </Button>
      </Box>
    </Flex>
  );
};

export default ImageLeftCards;
