import React from "react";
import {
  Box,
  Center,
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

const Footer = () => {
  return (
    <Flex
      w="100%"
      minHeight="300px"
      mt="20px"
      pt="50px"
      justify="center"
      align={{ base: "center", md: "flex-start" }}
      borderTop="1px solid"
      borderColor="gray.300"
      direction={{ base: "column", md: "row" }}
    >
      <Box flex={{ base: "none", md: "6" }} pl={{ base: "none", md: "14%" }}>
        <Heading fontSize="6xl" mb="15px">
          Drowchet
        </Heading>
        <Text>+1(951) 531-4000</Text>
        <Text mt="3px">SUPPORT@DROWCHET.COM</Text>
      </Box>
      <Box flex="2" display={{ base: "none", md: "block" }}>
        <Heading color="accentL" fontSize="3xl">
          Navigate
        </Heading>
        <List mt="20px">
          <ListItem>
            <Inlink to="/">HOME</Inlink>
          </ListItem>
          <ListItem>
            <Inlink to="/">CART</Inlink>
          </ListItem>
          <ListItem>
            <Inlink to="/shop">SHOP</Inlink>
          </ListItem>
          <ListItem>
            <Inlink to="/">MY STORY</Inlink>
          </ListItem>
          <ListItem>
            <Inlink to="/">CONTACT</Inlink>
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
      <FooterAccordion insta={insta} fb={fb} twitter={twitter} />
    </Flex>
  );
};

export default Footer;
