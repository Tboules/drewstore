import React from "react";
import { connect } from "react-redux";
import { Wrap, WrapItem, Heading, Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const PopularProductGrid = ({ products, loadPop }) => {
  React.useEffect(() => {
    loadPop();
  }, []);

  return (
    <Flex direction="column" w="80%" m="auto" align="center" mt="80px">
      <Heading mb="40px" fontWeight="700" color="accent">
        Our Most Popular Items
      </Heading>
      <Wrap spacing="70px" justify={{ base: "center", xl: "space-between" }}>
        {products.map((item) => (
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

export default connect(mapState, mapDispatch)(PopularProductGrid);
