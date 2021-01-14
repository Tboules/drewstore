import React from "react";
import { connect } from "react-redux";
import { Wrap, WrapItem, Heading, Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useGlobal } from "../../Context/Global";

const ProductGrid = ({ pop, title, bottom }) => {
  let [currentProducts, setCurrentProducts] = React.useState([]);
  const { products, getPopItems } = useGlobal();

  React.useEffect(() => {
    if (pop) {
      let popular = getPopItems();
      setCurrentProducts(popular);
    } else {
      setCurrentProducts(products);
    }
  }, [getPopItems, pop, products]);

  return (
    <Flex
      direction="column"
      w="80%"
      m="auto"
      align="center"
      mt="80px"
      mb={bottom}
    >
      {title && (
        <Heading mb="40px" fontWeight="700" color="accent">
          {title}
        </Heading>
      )}
      <Wrap spacing="70px" justify={{ base: "center", xl: "space-between" }}>
        {products.length !== 0 &&
          currentProducts.map((item) => (
            <WrapItem key={item.productName}>
              <ProductCard {...item} />
            </WrapItem>
          ))}
      </Wrap>
    </Flex>
  );
};

const mapState = (state) => ({
  products: state.products,
});

const mapDispatch = (dispatch) => ({
  loadPop: dispatch.products.loadPop,
});

export default connect(mapState, mapDispatch)(ProductGrid);
