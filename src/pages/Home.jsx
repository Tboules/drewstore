import React from "react";
import { Box, Flex, Button, Center } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ImageLeftCards from "../components/ImageLeftCards";
import CategoryGrid from "../components/CategoryDisplay/CategoryGrid";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductCards and Display/ProductGrid";
import InstagramStack from "../components/InstagramStack";
import { useGlobal } from "../Context/Global";

import stock from "../images/stock/banner_test.jpg";

const Home = () => {
  const { products } = useGlobal();
  return (
    <Box>
      <Banner pic={stock} height="500px" />
      <Flex
        mt="80px"
        ml="10%"
        mr="10%"
        direction={{ base: "column", lg: "row" }}
      >
        <ImageLeftCards
          img="https://firebasestorage.googleapis.com/v0/b/drowchet.appspot.com/o/products%2Fblanket2.jpg?alt=media&token=3ec6800d-e2cf-4c0a-b388-59d9341ece6a"
          title="- NEW ARRIVALS"
          tagLineTop="WINTER 21"
          tagLineBottom="COLLECTIONS"
          color="gray.200"
          textColor="accent"
        />
        <ImageLeftCards
          img="https://firebasestorage.googleapis.com/v0/b/drowchet.appspot.com/o/products%2Fbaby_yoda.jpg?alt=media&token=6e8a43a7-5f2a-4e45-98b3-29663667341e"
          title="- SALE"
          tagLineTop="UP TO"
          tagLineBottom="50% OFF"
          color="secondaryL"
          textColor="gray.50"
        />
      </Flex>
      <CategoryGrid />
      {products.length !== 0 && (
        <ProductGrid pop={true} title="Our Most Popular Items" bottom="40px" />
      )}
      <Center w="100%" h="100px">
        <Link to="/shop">
          <Button
            m="auto"
            borderRadius="none"
            w="160px"
            h="55px"
            bgColor="accentL"
            color="back"
            letterSpacing=".5px"
            transition="background-color .2s ease-in-out"
            _hover={{
              bgColor: "accent",
            }}
          >
            DISCOVER ALL
          </Button>
        </Link>
      </Center>
      <InstagramStack />
    </Box>
  );
};

export default Home;
