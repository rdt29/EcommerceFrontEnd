// const UserName = (state = "Login First", action) => {
//   switch (action.type) {
//     case "UserName":
//       return action.payload;

//     default:
//       return state;
//   }
// };
// const UserRole = (state = "", action) => {
//   switch (action.type) {
//     case "UserRole":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const FetchCategories = (state = [], action) => {
//   switch (action.type) {
//     case "FetchCat":
//       return { ...state, cat: action.payload };
//     case "CatUpdate":
//       return { updatecate: action.payload };
//     default:
//       return state;
//   }
// };
// const Loading = (state = "false", action) => {
//   switch (action.type) {
//     case "Loading":
//       return (state = action.payload);
//     default:
//       return state;
//   }
// };
// const Response = (state = "false", action) => {
//   switch (action.type) {
//     case "View":
//       return (state = action.payload);
//     default:
//       return state;
//   }
// };

// const CategoryData = (state = [], action) => {
//   switch (action.type) {
//     case "LoadingViewCat":
//       return (state = action.payload);
//     case "FetchCategories":
//       return [...action.payload];
//     default:
//       return state;
//   }
// };

// var loading = "";
// const CategoryUpdate = (state = [], action) => {
//   switch (action.type) {
//     case "UpdateCat":
//       return [...action.payload];
//     case "UpdateCatError":
//       return { error: action.payload };
//     case "LoadingupdateCat":
//       loading = action.payload;
//       return { loading: action.payload };
//     case "View":
//       return { view: action.payload, loading: loading };
//     default:
//       return state;
//   }
// };

// var error = "";
// var resp = "";
// const Register = (state = [], action) => {
//   switch (action.type) {
//     case "RegisterLoading":
//       return { loading: action.payload };
//     case "RegisterUser":
//       resp = action.payload;
//       return { res: action.payload };
//     case "registerUserError":
//       error = action.payload;
//       return { error: action.payload };
//     case "View":
//       return { view: action.payload, error: error, res: resp };
//     default:
//       return state;
//   }
// };

// export {
//   UserName,
//   UserRole,
//   FetchCategories,
//   Register,
//   CategoryData,
//   CategoryUpdate,
// };

// const initialState = {
//   isLoading: false,
//   data: [],
//   error: null,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_CATEGORIES_START":
//       return {
//         ...state,
//         isLoading: true,
//       };

//     case "FETCH_CATEGORIES_SUCCESS":
//       return {
//         ...state,
//         isLoading: false,
//         data: action.payload,
//       };

//     case "FETCH_CATEGORIES_ERROR":
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };
