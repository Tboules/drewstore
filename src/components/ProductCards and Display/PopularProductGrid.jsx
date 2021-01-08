import React from "react";
import { Wrap, WrapItem, Heading, Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

//images
import fox from "../../images/products/fox.jpg";
import backpack from "../../images/products/backpack.jpg";
import bunny from "../../images/products/bunny.jpg";
import blanket from "../../images/products/blanket1.jpg";
import five from "../../images/products/five_stitch_dog.jpg";
import teddy from "../../images/products/teddy.jpg";
import babyYoda from "../../images/products/baby_yoda.jpg";
import doily from "../../images/products/doily.jpg";

const POPULARITEMS = [
  { imgUrl: fox, price: "$40", productName: "Fox", sale: "$35" },
  { imgUrl: backpack, price: "$50", productName: "Crochet Back Pack" },
  { imgUrl: bunny, price: "$25", productName: "Bunny" },
  { imgUrl: blanket, price: "$45", productName: "Moroccan Blanket" },
  { imgUrl: five, price: "$60", productName: "Five-Stitch Blanket" },
  { imgUrl: doily, price: "$20", productName: "Doily", sale: "$15" },
  { imgUrl: teddy, price: "$25", productName: "Teddy Bear" },
  { imgUrl: babyYoda, price: "$45", productName: "Baby Yoda" },
];

const PopularProductGrid = () => {
  return (
    <Flex direction="column" w="80%" m="auto" align="center" mt="60px">
      <Heading mb="40px" fontWeight="700" color="accent">
        Our Most Popular Items
      </Heading>
      <Wrap spacing="70px" justify={{ base: "center", xl: "space-between" }}>
        {POPULARITEMS.map((item) => (
          <WrapItem key={item.productName}>
            <ProductCard {...item} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default PopularProductGrid;
