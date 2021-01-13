import { init } from "@rematch/core";
import products from "./products";

const models = {
  products,
};

const store = init({
  models,
});

export default store;
