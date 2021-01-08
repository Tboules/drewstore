import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ImageLeftCards from "../components/ImageLeftCards";
import CategoryGrid from "../components/CategoryDisplay/CategoryGrid";

//pictures
import babyYoda from "../images/products/baby_yoda.jpg";
import blanket2 from "../images/products/blanket2.jpg";
import PopularProductGrid from "../components/ProductCards and Display/PopularProductGrid";
import InstagramPic from "../components/InstagramStack/InstagramPic";
import InstagramStack from "../components/InstagramStack";

const Home = () => {
  return (
    <Box pb="100px">
      <Banner />
      <Flex
        mt="50px"
        ml="10%"
        mr="10%"
        direction={{ base: "column", lg: "row" }}
      >
        <ImageLeftCards
          img={blanket2}
          title="- NEW ARRIVALS"
          tagLineTop="WINTER 21"
          tagLineBottom="COLLECTIONS"
          color="gray.200"
          textColor="accent"
        />
        <ImageLeftCards
          img={babyYoda}
          title="- SALE"
          tagLineTop="UP TO"
          tagLineBottom="50% OFF"
          color="secondaryL"
          textColor="gray.50"
        />
      </Flex>
      <CategoryGrid />
      <PopularProductGrid />
      <InstagramStack />
    </Box>
  );
};

export default Home;
