import React from "react";
import { Box, Image, Center, Link } from "@chakra-ui/react";

//icon
import icon from "../../images/icons/icons8-instagram.svg";

const InstagramPic = ({ link }) => {
  return (
    <Link href="https://www.instagram.com/drew.mikhail/" isExternal>
      <Box pos="relative" w="100%" cursor="pointer">
        <Image src={link} w="100%" h="auto" />
        <Box
          pos="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          opacity="0"
          bgColor="accentL"
          _hover={{
            opacity: "0.7",
          }}
        >
          <Center h="100%" w="100%">
            <Image src={icon} w="64px" />
          </Center>
        </Box>
      </Box>
    </Link>
  );
};

export default InstagramPic;
