import React from "react";
import { connect } from "react-redux";
import { Box } from "@chakra-ui/react";
import ProductGrid from "../components/ProductCards and Display/ProductGrid";
import Banner from "../components/Banner";

import stock from "../images/stock/store_banner.jpg";

const Shop = ({ loadAllProducts }) => {
  React.useEffect(() => {
    loadAllProducts();
  }, [loadAllProducts]);

  return (
    <Box minHeight="53vh">
      <Banner height="200px" pic={stock} />
      <ProductGrid bottom="80px" />
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
