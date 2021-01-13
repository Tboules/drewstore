import {
  getAllProductsFromFirestore,
  getPopProductsFromFirestore,
} from "../utils/API";

const model = {
  state: [],
  reducers: {
    loadProducts: (state, payload) => payload,
    // loadPopProducts: (state, payload) => {
    //   return state.filter((product) => product.pop);
    // },
    getProduct: (state, payload) =>
      state.filter((product) => payload.productName === product.name),
  },
  effects: (dispatch) => ({
    async loadAllProducts() {
      const products = await getAllProductsFromFirestore();
      dispatch.products.loadProducts(products);
    },
    async loadPop() {
      const popProducts = await getPopProductsFromFirestore();
      dispatch.products.loadProducts(popProducts);
    },
  }),
};

export default model;
