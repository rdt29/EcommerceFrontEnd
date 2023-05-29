const UserName = (state = "Login First", action) => {
  switch (action.type) {
    case "UserName":
      return action.payload;

    default:
      return state;
  }
};
const UserRole = (state = "", action) => {
  switch (action.type) {
    case "UserRole":
      return action.payload;
    default:
      return state;
  }
};

const FetchCategories = (state = [], action) => {
  switch (action.type) {
    case "FetchCat":
      return { ...state, cat: action.payload };
    case "CatUpdate":
      return { updatecate: action.payload };
    default:
      return state;
  }
};

var error = "";
var resp = "";
const Register = (state = [], action) => {
  switch (action.type) {
    case "Loading":
      return { loading: action.payload };
    case "Response":
      resp = action.payload;
      return { res: action.payload };
    case "Error":
      error = action.payload;
      return { error: action.payload };
    case "ViewResponse":
      return { view: action.payload, error: error, res: resp };
    default:
      return state;
  }
};

export { UserName, UserRole, FetchCategories, Register };
