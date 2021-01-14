const model = {
  state: {
    user: {},
    items: [],
    totalCost: 0,
  },
  reducers: {
    loadCart: (state, payload) => payload,
    addItem: (state, payload) => {
      let itemHold = state.items.find(
        (item) => item.productName === payload.productName
      );
      if (itemHold) {
        let copy = {
          ...state,
        };
        let index = copy.items.indexOf(itemHold);
        let cur = copy.items[index];
        cur.quantity += 1;
        cur.checkOutPrice += cur.sale ? cur.sale : cur.price;
        return {
          ...copy,
        };
      } else {
        return {
          ...state,
          items: [...state.items, payload],
        };
      }
    },
    removeItem: (state, payload) => {
      let itemHold = state.items.find(
        (item) => item.productName === payload.productName
      );
      let index = state.items.indexOf(itemHold);

      if (state.items[index].quantity > 1) {
        let cur = state.items[index];
        cur.quantity -= 1;
        cur.checkOutPrice -= cur.price;
      } else {
        state.items.splice(index, 1);
      }
    },
  },
};

export default model;
