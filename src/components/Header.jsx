import React from "react";
import { Box, Flex, ListItem, List, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sharedListStyles = {
  fontSize: "1.1rem",
  fontFamily: "titles",
  fontWeight: "400",
  letterSpacing: "2px",
  color: "accentL",
};

const Header = () => {
  return (
    <Flex w="100%" h="120px" align="center">
      <Box ml="10%">
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
        <Link to="/">
          <Text
            color="accent"
            textAlign="center"
            fontFamily="heading"
            fontWeight="700"
            fontSize="5xl"
          >
            Drowchet
          </Text>
        </Link>
      </Box>
      <Box mr="10%">
        <List display="flex" styleType="none">
          <ListItem {...sharedListStyles}>Contact</ListItem>
          <ListItem pl="40px" {...sharedListStyles}>
            Cart
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Header;
