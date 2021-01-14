import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  CloseButton,
  Image,
  Text,
  Flex,
  List,
  ListItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import shoppingCart from "../images/icons/shopping-cart.svg";

const CartDrawer = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = React.useState(false);
  const drawerBtnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={cartDrawerOpen}
        placement="right"
        finalFocusRef={drawerBtnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <Flex justify="space-between">
                <Image src={shoppingCart} w="50px" alt="shopping cart" />
                <CloseButton
                  onClick={() => setCartDrawerOpen(!setCartDrawerOpen)}
                />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Box>hello Cart</Box>
            </DrawerBody>
            <DrawerFooter>
              <Box>
                <Flex>
                  <Text>Subtotal</Text>
                  <Text>$0</Text>
                </Flex>
                <Button>CHECKOUT</Button>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default CartDrawer;
