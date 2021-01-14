import React from "react";
import { connect } from "react-redux";

const GlobalContext = React.createContext();

const GlobalProvider = ({
  children,
  products,
  loadAllProducts,
  getPopItems,
  getProduct,
  loadCart,
  addItem,
  removeItem,
}) => {
  React.useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        products,
        getProduct,
        getPopItems,
        loadCart,
        addItem,
        removeItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const mapState = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  loadAllProducts: dispatch.products.loadAllProducts,
  getProduct: dispatch.products.getProduct,
  getPopItems: dispatch.products.getPopItems,
  loadCart: dispatch.cart.loadCart,
  addItem: dispatch.cart.addItem,
  removeItem: dispatch.cart.removeItem,
});

export default connect(mapState, mapDispatch)(GlobalProvider);

export function useGlobal() {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be rendered within the GlobalProvider");
  }
  return context;
}
