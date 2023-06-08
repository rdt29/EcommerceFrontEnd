// import axios from "axios";
// import { toast } from "react-toastify";

// export const UserName = (data) => {
//   return {
//     type: "UserName",
//     payload: data,
//   };
// };
// export const UserRole = (Role) => {
//   return {
//     type: "UserRole",
//     payload: Role,
//   };
// };

// //!--------------------------------------
// export const ApiResponse = (data, type) => {
//   return {
//     type: type,
//     payload: data,
//   };
// };
// export const ApiError = (data, type) => {
//   return {
//     type: type,
//     payload: data,
//   };
// };

// export const Loading = (data, type) => {
//   return {
//     type: type,
//     payload: data,
//   };
// };
// export const ViewResponse = (data) => {
//   return {
//     type: "View",
//     payload: data,
//   };
// };

// export const RegisterUser = (UserData) => {
//   return async function (dispatch) {
//     dispatch(ViewResponse("false"));
//     dispatch(Loading("true"));
//     setTimeout(async () => {
//       await axios
//         .post("https://localhost:7277/api/Users/add/customer", {
//           id: 0,
//           name: `${UserData.Name}`,
//           email: `${UserData.Email}`,
//         })
//         .then((data) => {
//           dispatch(Loading("false"));
//           dispatch(ApiResponse(data.data, "RegisterUser"));
//           dispatch(ViewResponse("true"));
//         })
//         .catch((error) => {
//           dispatch(ApiError(error.message, "registerUserError"));
//           dispatch(ViewResponse("true"));
//         });
//     }, 3000);
//   };
// };

// export const fetchCategoriesStart = () => ({
//   type: 'FETCH_CATEGORIES_START'
// })

// export const fetchCategoriesSuccess = (data) => ({
//   type: 'FETCH_CATEGORIES_SUCCESS',
//   payload: data
// })

// //------------------------------

// export const FetchCategories = () => {
//   return async function (dispatch) {
//     dispatch(Loading("true", "LoadingViewCat"));
//     dispatch(ViewResponse("false"));

//     setTimeout(async () => {
//       await axios
//         .get("https://localhost:7277/api/Categories/view-categories")
//         .then((data) => {
//           dispatch(Loading("false", "LoadingViewCat"));
//           dispatch(ApiResponse(data.data, "FetchCategories"));
//           dispatch(ViewResponse("true"));
//         })
//         .catch((error) => {
//           dispatch(ApiError(error.message));
//           dispatch(ViewResponse("true"));
//         });
//     }, 3000);
//   };
// };

// export const UpdateCat = (name, id) => {
//   return async function (dispatch) {
//     dispatch(Loading("true", "LoadingupdateCat"));
//     dispatch(ViewResponse("false" , ));

//     setTimeout(async () => {
//       await axios
//         .put(
//           `https://localhost:7277/api/Categories/update-categories?name=${name}&id=${id}`,
//           {
//             headers: {
//               Authorization: "Bearer " + localStorage.getItem("Token"),
//             },
//           }
//         )
//         .then((res) => {
//           dispatch(Loading("false", "LoadingupdateCat"));
//           dispatch(ApiResponse(res, "UpdateCat"));
//           dispatch(ViewResponse("true"));
//         })
//         .catch((error) => {
//           dispatch(ApiError(error, "UpdateCatError"));
//           dispatch(ViewResponse("true" , ));
//         });
//     }, 3000);
//   };
// };
