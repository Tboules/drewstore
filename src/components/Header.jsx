import React from "react";
import { Box, Flex, ListItem, List, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { useGlobal } from "../Context/Global";
import CartDrawer from "../components/CartDrawer";

export const sharedListStyles = {
  fontSize: "1.1rem",
  fontFamily: "titles",
  fontWeight: "400",
  letterSpacing: "2px",
  color: "accentL",
};

const dynamicLinks = {
  display: { base: "none", md: "block" },
};

const Header = () => {
  const { cart, cartDrawerOpen, setCartDrawerOpen } = useGlobal();

  return (
    <Flex
      w="100%"
      h="80px"
      bgColor="back"
      align="center"
      position="sticky"
      top="0"
      left="0"
      zIndex="3"
      boxShadow="base"
      opacity=".9"
    >
      <Box ml="10%" {...dynamicLinks}>
        <List display="flex">
          <Link to="/shop">
            <ListItem pr="40px" {...sharedListStyles}>
              Shop
            </ListItem>
          </Link>
          <Link to="/my-story">
            <ListItem {...sharedListStyles}>My Story</ListItem>
          </Link>
        </List>
      </Box>
      <Box flex="1">
        <Link to="/">
          <Text
            color="accent"
            textAlign={{ base: "left", md: "center" }}
            ml={{ base: "10%", md: "0" }}
            fontFamily="heading"
            fontWeight="700"
            fontSize="5xl"
          >
            Drowchet
          </Text>
        </Link>
      </Box>
      <Box mr="10%" pos="relative" {...dynamicLinks}>
        <List display="flex" styleType="none">
          <Link to="/contact">
            <ListItem {...sharedListStyles}>Contact</ListItem>
          </Link>
          <ListItem
            cursor="pointer"
            onClick={() => setCartDrawerOpen(!cartDrawerOpen)}
            pl="40px"
            {...sharedListStyles}
          >
            Cart
            {cart.totalItems !== 0 && (
              <Center
                pos="absolute"
                right="-18px"
                top="-15px"
                borderRadius="50%"
                bgColor="primary"
                minWidth="25px"
                h="25px"
                color="back"
                pl="2px"
                pb="2px"
                fontSize="1rem"
              >
                {cart.totalItems}
              </Center>
            )}
          </ListItem>
        </List>
      </Box>
      <NavDrawer openCart={() => setCartDrawerOpen(!cartDrawerOpen)} />
      <CartDrawer cart={cart} />
    </Flex>
  );
};

export default Header;
