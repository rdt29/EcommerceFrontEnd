const initialState = [];

export const cartManager = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEMS":
      return [...state, action.payload];
    default:
      return state;
  }
};
