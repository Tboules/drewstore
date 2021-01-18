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
import { useGlobal } from "../Context/Global";

const CartItem = ({
  imgUrl,
  productName,
  quantity,
  checkOutPrice,
  sale,
  price,
}) => {
  const { addItem, removeItem } = useGlobal();
  const handleIncrement = () => {
    addItem({
      imgUrl,
      price,
      productName,
      sale,
      quantity: 1,
      checkOutPrice: sale ? sale : price,
    });
  };

  const handleDecrement = () => {
    removeItem({
      imgUrl,
      price,
      productName,
      sale,
      quantity: 1,
      checkOutPrice: sale ? sale : price,
    });
  };

  const handleTotalRemovalOfItem = () => {
    removeItem({
      imgUrl,
      price,
      productName,
      sale,
      quantity: quantity,
      checkOutPrice: checkOutPrice,
      total: true,
    });
  };

  return (
    <Flex h="150px" mb="10px" borderBottom="1px solid gray" pb="10px">
      <Image w="150px" src={imgUrl} mr="10px" />
      <Flex direction="column" h="140px" justify="space-between" flex="1">
        <Heading fontFamily="titles" fontSize="lg">
          {productName}
        </Heading>
        <NumberInput
          isReadOnly
          size="md"
          defaultValue={quantity}
          value={quantity}
          maxW={20}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={handleIncrement} />
            <NumberDecrementStepper onClick={handleDecrement} />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex direction="column" h="140px" justify="space-between">
        <CloseButton
          onClick={handleTotalRemovalOfItem}
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
