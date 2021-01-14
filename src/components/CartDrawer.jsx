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
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import shoppingCart from "../images/icons/shopping-cart.svg";
import { useGlobal } from "../Context/Global";

const CartDrawer = ({ cart }) => {
  const { cartDrawerOpen, setCartDrawerOpen } = useGlobal();
  const [drawerSize, setDrawerSize] = React.useState("md");
  const [isLarge] = useMediaQuery("(min-width: 700px)");
  const drawerBtnRef = React.useRef();

  React.useEffect(() => {
    if (!isLarge) {
      setDrawerSize("full");
    } else {
      setDrawerSize("md");
    }
  }, [isLarge]);

  console.log(isLarge);

  return (
    <>
      <Drawer
        isOpen={cartDrawerOpen}
        placement="right"
        onClose={() => setCartDrawerOpen(!cartDrawerOpen)}
        finalFocusRef={drawerBtnRef}
        size={drawerSize}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <Flex
                align="center"
                pos="relative"
                borderBottom="2px solid #011936"
                pb="14px"
              >
                <ArrowForwardIcon
                  cursor="pointer"
                  w={8}
                  h={8}
                  color="accent"
                  onClick={() => setCartDrawerOpen(!cartDrawerOpen)}
                />
                <Image
                  m="auto"
                  src={shoppingCart}
                  w="54px"
                  alt="shopping cart"
                />
                <Text fontSize="md" pos="absolute" top="10px" right="44.5%">
                  {cart.totalItems}
                </Text>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Box>hello Cart</Box>
            </DrawerBody>
            <DrawerFooter>
              <Box w="100%" mb="30px">
                <Flex justify="space-between" align="center" mb="10px">
                  <Text fontSize="xl">Subtotal</Text>
                  <Text fontSize="xl">$0</Text>
                </Flex>
                <Button
                  w="100%"
                  h="50px"
                  bgColor="accent"
                  color="back"
                  fontSize="xl"
                  letterSpacing="1px"
                  borderRadius="0px"
                  _hover={{
                    color: "accent",
                    bgColor: "back",
                    border: "1px solid",
                    borderColor: "accent",
                  }}
                >
                  CHECKOUT
                </Button>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default CartDrawer;
