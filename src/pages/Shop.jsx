import React from "react";
import { connect } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import ProductGrid from "../components/ProductCards and Display/ProductGrid";

const Shop = ({ products, loadAllProducts, getProduct }) => {
  React.useEffect(() => {
    loadAllProducts();
  }, []);

  // console.log(products);
  return (
    <Box minHeight="53vh">
      <ProductGrid />
    </Box>
  );
};

const mapState = (state) => ({
  products: state.products,
});

const mapDispatch = (dispatch) => ({
  loadAllProducts: dispatch.products.loadAllProducts,
  getProduct: dispatch.products.getProduct,
});

export default connect(mapState, mapDispatch)(Shop);
