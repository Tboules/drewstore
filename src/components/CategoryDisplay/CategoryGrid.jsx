import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryPics from "./CategoryPics";

const CATEGORIES = [
  {
    categoryName: "Bags and Accessories",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/drowchet.appspot.com/o/products%2Fbackpack.jpg?alt=media&token=65c47d82-27b6-4631-865c-ae284055fab1",
  },
  {
    categoryName: "Blankets",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/drowchet.appspot.com/o/products%2Ffive_stitch2.jpg?alt=media&token=6b4550ca-6242-487c-8d2f-e097670c7d91",
  },
  {
    categoryName: "Cuddle Friends!",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/drowchet.appspot.com/o/products%2Ftotoro.jpg?alt=media&token=5b019fc3-2d04-4f30-9be0-0783aa4e1699",
  },
  {
    categoryName: "Home Accents",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/drowchet.appspot.com/o/products%2Fdoily.jpg?alt=media&token=e7988032-96d2-40f6-8896-cf3ea5a3373a",
  },
];

const CategoryGrid = () => {
  return (
    <SimpleGrid
      w="80%"
      m="auto"
      mt="80px"
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
