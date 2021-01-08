import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

//styles
import { sharedListStyles } from "./Header";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box mr="10%" display={{ base: "block", md: "none" }}>
      <Button onClick={onOpen} display={{ base: "block", md: "none" }}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Link to="/" onClick={onClose}>
                Cart
              </Link>
            </DrawerHeader>

            <DrawerBody>
              <List mt="25%">
                <Link to="/" onClick={onClose}>
                  <ListItem mt={4} {...sharedListStyles}>
                    Home
                  </ListItem>
                </Link>
                <Link to="/shop" onClick={onClose}>
                  <ListItem mt={4} {...sharedListStyles}>
                    Shop
                  </ListItem>
                </Link>
                <Link to="/" onClick={onClose}>
                  <ListItem mt={4} {...sharedListStyles}>
                    My Story
                  </ListItem>
                </Link>
                <Link to="/" onClick={onClose}>
                  <ListItem mt={4} {...sharedListStyles}>
                    Contact
                  </ListItem>
                </Link>
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
