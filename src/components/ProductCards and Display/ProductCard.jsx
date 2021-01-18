import React from "react";
import { Collapse, Box, Text, Image, Flex, Center } from "@chakra-ui/react";
import { useGlobal } from "../../Context/Global";

const ProductCard = ({ imgUrl, price, productName, sale }) => {
  const { addItem, setCartDrawerOpen, cartDrawerOpen } = useGlobal();
  const [showATC, setShowATC] = React.useState(false);

  const handleAddToCart = () => {
    addItem({
      imgUrl,
      price,
      productName,
      sale,
      quantity: 1,
      checkOutPrice: sale ? sale : price,
    });
    setCartDrawerOpen(!cartDrawerOpen);
  };

  return (
    <Flex
      direction="column"
      p="8px"
      w="300px"
      h="380px"
      bgColor="back"
      boxShadow="none"
      borderRadius="2px"
      pos="relative"
      _hover={{
        boxShadow: "lg",
      }}
      onMouseEnter={() => setShowATC(true)}
      onMouseLeave={() => setShowATC(false)}
      onTouchStart={() => setShowATC(true)}
      onTouchCancel={() => setShowATC(false)}
    >
      <Image src={imgUrl} objectFit="cover" h="72%" w="100%" />
      {sale && (
        <Center
          fontFamily="mono"
          fontWeight="400"
          color="accent"
          pos="absolute"
          bgColor="primary"
          top="5"
          left="5"
          w="60px"
        >
          sale
        </Center>
      )}
      <Box pt="20px" h="28%" w="100%">
        <Text
          textAlign="center"
          fontWeight="600"
          fontFamily="titles"
          color="accentL"
        >
          {productName}
        </Text>
        <Flex pt="10px" justify="center">
          {sale && (
            <Text pr="7px" fontFamily="mono" fontWeight="600" color="primary">
              {" "}
              {`$${sale}`}{" "}
            </Text>
          )}
          <Text
            fontFamily="mono"
            fontWeight="400"
            textDecoration={sale && "line-through"}
            color="gray.500"
          >
            {`$${price}`}
          </Text>
        </Flex>
      </Box>
      <Collapse in={showATC} unmountOnExit={true}>
        <Center
          fontFamily="mono"
          pos="absolute"
          bottom="-45px"
          left="0"
          w="300px"
          h="45px"
          bgColor="accentL"
          color="back"
          boxShadow="lg"
          letterSpacing="1px"
          cursor="pointer"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Center>
      </Collapse>
    </Flex>
  );
};

export default ProductCard;
