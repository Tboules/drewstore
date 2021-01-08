import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryPics from "./CategoryPics";

//images
import totoro from "../../images/products/totoro.jpg";
import bag from "../../images/products/backpack.jpg";
import fiveStitch from "../../images/products/five_stitch2.jpg";
import doily from "../../images/products/doily.jpg";

const CATEGORIES = [
  { categoryName: "Bags and Accessories", imgUrl: bag },
  { categoryName: "Blankets", imgUrl: fiveStitch },
  { categoryName: "Cuddle Friends!", imgUrl: totoro },
  { categoryName: "Home Accents", imgUrl: doily },
];

const CategoryGrid = () => {
  return (
    <SimpleGrid
      w="80%"
      m="auto"
      mt="50px"
      minChildWidth="300px"
      spacing="40px"
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
    >
      {CATEGORIES.map((cat) => (
        <CategoryPics key={cat.categoryName} {...cat} />
      ))}
    </SimpleGrid>
  );
};

export default CategoryGrid;
