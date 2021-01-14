import React from "react";
import {
  Flex,
  Image,
  Text,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  CloseButton,
} from "@chakra-ui/react";

const CartItem = ({
  imgUrl,
  productName,
  quantity,
  checkOutPrice,
  sale,
  price,
}) => {
  return (
    <Flex h="150px" mb="10px" borderBottom="1px solid gray" pb="10px">
      <Image w="150px" src={imgUrl} mr="10px" />
      <Flex direction="column" h="140px" justify="space-between" flex="1">
        <Heading fontFamily="titles" fontSize="lg">
          {productName}
        </Heading>
        <NumberInput size="md" defaultValue={quantity} maxW={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex direction="column" h="140px" justify="space-between">
        <CloseButton
          size="sm"
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "rotate(90deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        <Text>{`$${checkOutPrice}`}</Text>
      </Flex>
    </Flex>
  );
};

export default CartItem;
