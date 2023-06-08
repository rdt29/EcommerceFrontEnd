const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default function Products(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PRODUCT_SUCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case "FETCH_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
