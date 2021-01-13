import { getAllProductsFromFirestore } from "../utils/API";

const model = {
  state: [],
  reducers: {
    loadProducts: (state, payload) => payload,
  },
  effects: (dispatch) => ({
    async loadAllProducts() {
      const products = await getAllProductsFromFirestore();
      dispatch.products.loadProducts(products);
    },
    getPopItems(payload, state) {
      return state.products.filter((product) => product.pop);
    },
    getProduct(payload, state) {
      return state.products.filter(
        (product) => payload.productName === product.productName
      );
    },
  }),
};

export default model;
