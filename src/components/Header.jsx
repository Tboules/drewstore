import React from "react";
import { Box, Flex, ListItem, List, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {HamburgerIcon} from '@chakra-ui/icons'
import NavDrawer from "./NavDrawer";

export const sharedListStyles = {
  fontSize: "1.1rem",
  fontFamily: "titles",
  fontWeight: "400",
  letterSpacing: "2px",
  color: "accentL",
};

const dynamicLinks = {
  display: {base: 'none', md: 'block'}
}

const Header = () => {
  return (
    <Flex w="100%" h="120px" align='center'>
      <Box ml="10%" {...dynamicLinks}>
        <List display="flex">
          <Link to="/shop">
            <ListItem pr="40px" {...sharedListStyles}>
              Shop
            </ListItem>
          </Link>
          <ListItem {...sharedListStyles}>My Story</ListItem>
        </List>
      </Box>
      <Box flex="1">
        <Link to="/" >
          <Text
            color="accent"
            textAlign={{base:'left', md:'center'}}
            ml={{base: '10%' , md: '0'}}
            fontFamily="heading"
            fontWeight="700"
            fontSize="5xl"
          >
            Drowchet
          </Text>
        </Link>
      </Box>
      <Box mr="10%" {...dynamicLinks}>
        <List display="flex" styleType="none">
          <ListItem {...sharedListStyles}>Contact</ListItem>
          <ListItem pl="40px" {...sharedListStyles}>
            Cart
          </ListItem>
        </List>
      </Box>
      <NavDrawer />
    </Flex>
  );
};

export default Header;
