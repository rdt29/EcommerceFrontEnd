import axios from "axios";

export const UserName = (data) => {
  return {
    type: "UserName",
    payload: data,
  };
};
export const UserRole = (Role) => {
  return {
    type: "UserRole",
    payload: Role,
  };
};

//!--------------------------------------
export const ApiResponse = (data) => {
  return {
    type: "Response",
    payload: data,
  };
};
export const ApiError = (data) => {
  return {
    type: "Error",
    payload: data,
  };
};

export const Loading = (data) => {
  return {
    type: "Loading",
    payload: data,
  };
};
export const ViewResponse = (data) => {
  return {
    type: "ViewResponse",
    payload: data,
  };
};

export const RegisterUser = (UserData) => {
  return async function (dispatch) {
    dispatch(ViewResponse("false"));
    dispatch(Loading("true"));
    setTimeout(async () => {
      await axios
        .post("https://localhost:7277/api/Users/add/customer", {
          id: 0,
          name: `${UserData.Name}`,
          email: `${UserData.Email}`,
        })
        .then((data) => {
          dispatch(Loading("false"));
          dispatch(ApiResponse(data.data));
          dispatch(ViewResponse("true"));
        })
        .catch((error) => {
          dispatch(ApiError(error.message));
          dispatch(ViewResponse("true"));
        });
    }, 3000);
  };
};

//------------------------------

export const FetchCategories = () => {
  return async function (dispatch) {
    await axios
      .get("https://localhost:7277/api/Categories/view-categories")
      .then((data) => {
        dispatch(ApiResponse(data.data));
      })
      .catch((error) => {
        dispatch(ApiError(error.message));
      });

    dispatch({ type: "FetchCat", payload: response.data });
  };
};

// export const UpdateCat = ({ name, id }) => {
//   return async function (dispatch) {
//     const response = await axios.put(
//       `https://localhost:7277/api/Categories/update-categories?name=${name}&id=${id}`,
//       {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("Token"),
//         },
//       }
//     );
//     dispatch({ type: "CatUpdate", payload: response.data });
//   };
// };
