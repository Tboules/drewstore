import React from "react";
import { Center, Text } from "@chakra-ui/react";

const CategoryPics = ({ imgUrl, categoryName }) => {
  let [color, setColor] = React.useState({
    text: "accentL",
    accent: "lightgrey",
  });

  return (
    <Center
      bgImage={`url(${imgUrl})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={{ base: "400px", md: "500px" }}
      cursor="pointer"
      onMouseEnter={() =>
        setColor({
          text: "primary",
          accent: "primary",
        })
      }
      onMouseLeave={() => {
        setColor({
          text: "accentL",
          accent: "lightgrey",
        });
      }}
    >
      <Center
        borderRadius="2px"
        bgColor="back"
        outline=".8px solid"
        outlineColor={color.accent}
        outlineOffset="-4px"
      >
        <Text
          fontFamily="titles"
          fontWeight="600"
          color={color.text}
          textAlign="center"
          p="20px"
        >
          {categoryName}
        </Text>
      </Center>
    </Center>
  );
};

export default CategoryPics;
