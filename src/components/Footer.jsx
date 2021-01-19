import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  List,
  ListItem,
  Link as Outlink,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Link as Inlink } from "react-router-dom";

//icons
import insta from "../images/icons/icons8-instagram.svg";
import fb from "../images/icons/icons8-facebook.svg";
import twitter from "../images/icons/icons8-twitter.svg";
import FooterAccordion from "./FooterAccordion";
import { useGlobal } from "../Context/Global";

const Footer = () => {
  const { setCartDrawerOpen, cartDrawerOpen } = useGlobal();
  return (
    <Flex
      w="100%"
      minHeight="300px"
      mt={{ base: "0", md: "20px" }}
      pt={{ base: "0", md: "50px" }}
      justify="center"
      align={{ base: "center", md: "flex-start" }}
      borderTop="1px solid"
      borderColor="gray.300"
      direction={{ base: "column", md: "row" }}
    >
      <FooterAccordion insta={insta} fb={fb} twitter={twitter} />
      <Box
        flex={{ base: "none", md: "6" }}
        pl={{ base: "none", md: "14%" }}
        pt={{ base: "30px", md: "none" }}
        pb={{ base: "50px", md: "none" }}
      >
        <Heading fontSize="6xl" mb="15px">
          Drowchet
        </Heading>
        <Text>+1(999) 000-4000</Text>
        <Text mt="3px">drowchet@giggles.com</Text>
      </Box>
      <Box flex="2" display={{ base: "none", md: "block" }}>
        <Heading color="accentL" fontSize="3xl">
          Navigate
        </Heading>
        <List mt="20px">
          <ListItem>
            <Inlink to="/">HOME</Inlink>
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => setCartDrawerOpen(!cartDrawerOpen)}
          >
            CART
          </ListItem>
          <ListItem>
            <Inlink to="/shop">SHOP</Inlink>
          </ListItem>
          <ListItem>
            <Inlink to="/my-story">MY STORY</Inlink>
          </ListItem>
          <ListItem>
            <Inlink to="/contact">CONTACT</Inlink>
          </ListItem>
        </List>
      </Box>
      <Box flex="2" pr="8%" display={{ base: "none", md: "block" }}>
        <Heading color="accentL" fontSize="3xl">
          Social
        </Heading>
        <HStack mt="20px" spacing="20px">
          <Outlink href="/">
            <Image src={twitter} />
          </Outlink>
          <Outlink href="/">
            <Image src={fb} />
          </Outlink>
          <Outlink href="/">
            <Image src={insta} />
          </Outlink>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Footer;
