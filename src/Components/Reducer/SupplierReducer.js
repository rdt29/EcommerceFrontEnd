const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const Supplier = (state = initialState, action) => {
  switch (action.type) {
    case "SUPPLIER_ADD_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SUPPLIER_ADD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "SUPPLIER_ADD_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
