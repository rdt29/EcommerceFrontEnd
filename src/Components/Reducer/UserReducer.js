const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const Users = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH_START":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_FETCH_SUCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "USER_FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "USER_REGISTER_START":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_SUCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "USER_REGISTER_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
