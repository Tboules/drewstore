import { init } from "@rematch/core";
import products from "./products";
import cart from "./cart";

const models = {
  products,
  cart,
};

const store = init({
  models,
});

export default store;
