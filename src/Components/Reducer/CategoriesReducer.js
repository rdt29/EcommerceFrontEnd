const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const Categories = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_CATEGORIES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_CATEGORIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "UPDATE_CATEGORIES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_CATEGORIES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_CATEGORIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "DELETE_CATEGORIES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_CATEGORY_START":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case "ADD_CATEGORY_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
