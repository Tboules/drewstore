const model = {
  state: {
    user: {},
    items: [],
    totalCost: 0,
    totalItems: 0,
  },
  reducers: {
    loadCart: (state, payload) => payload,
    addItem: (state, payload) => {
      let cur = state.items.find(
        (item) => item.productName === payload.productName
      );
      if (cur) {
        return {
          ...state,
          totalCost: state.totalCost + payload.checkOutPrice,
          totalItems: state.totalItems + 1,
          items: state.items.map((item, i) => {
            if (item.productName !== payload.productName) {
              return item;
            }
            return {
              ...item,
              quantity: item.quantity + 1,
              checkOutPrice: cur.checkOutPrice + payload.checkOutPrice,
            };
          }),
        };
      } else {
        return {
          ...state,
          totalCost: state.totalCost + payload.checkOutPrice,
          totalItems: state.totalItems + 1,
          items: [...state.items, payload],
        };
      }
    },
    removeItem: (state, payload) => {
      let cur = state.items.find(
        (item) => item.productName === payload.productName
      );
      let index = state.items.indexOf(cur);

      if (payload.total === true || cur.quantity === 1) {
        return {
          ...state,
          totalCost: state.totalCost - payload.checkOutPrice,
          totalItems: state.totalItems - payload.quantity,
          items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1),
          ],
        };
      } else if (cur.quantity > 1) {
        return {
          ...state,
          totalCost: state.totalCost - payload.checkOutPrice,
          totalItems: state.totalItems - payload.quantity,
          items: state.items.map((item) => {
            if (item.productName !== payload.productName) {
              return item;
            }
            return {
              ...item,
              quantity: item.quantity - payload.quantity,
              checkOutPrice: cur.checkOutPrice - payload.checkOutPrice,
            };
          }),
        };
      }
    },
  },
};

export default model;
