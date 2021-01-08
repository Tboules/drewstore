import React from "react";
import { Box } from "@chakra-ui/react";

import pic from "../images/stock/banner_test.jpg";

const Banner = () => {
  return (
    <Box
      h="500px"
      w="100%"
      bgSize="100%"
      bgImage={`url(${pic})`}
      bgPosition="center"
    />
  );
};

export default Banner;
