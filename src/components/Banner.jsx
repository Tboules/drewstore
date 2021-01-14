import React from "react";
import { Box } from "@chakra-ui/react";

const Banner = ({ height, pic }) => {
  return (
    <Box
      h={{ base: "300px", lg: `${height}` }}
      w="100%"
      bgSize="100%"
      bgImage={`url(${pic})`}
      bgPosition="center"
    />
  );
};

export default Banner;
