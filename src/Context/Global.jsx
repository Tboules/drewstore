import React from "react";
import { connect } from "react-redux";

const GlobalContext = React.createContext();

const GlobalProvider = ({
  children,
  products,
  loadAllProducts,
  getPopItems,
  getProduct,
}) => {
  React.useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <GlobalContext.Provider value={{ products, getProduct, getPopItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

const mapState = (state) => ({
  products: state.products,
});

const mapDispatch = (dispatch) => ({
  loadAllProducts: dispatch.products.loadAllProducts,
  getProduct: dispatch.products.getProduct,
  getPopItems: dispatch.products.getPopItems,
});

export default connect(mapState, mapDispatch)(GlobalProvider);

export function useGlobal() {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be rendered within the GlobalProvider");
  }
  return context;
}
