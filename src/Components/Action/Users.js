import axios from "axios";
import { Toast } from "react-bootstrap";
import { toast } from "react-toastify";

const UserFetchStart = () => {
  return {
    type: "USER_FETCH_START",
  };
};
const UserFetchSucess = (data) => {
  return {
    type: "USER_FETCH_SUCESS",
    payload: data,
  };
};
const UserFetchError = (error) => {
  return {
    type: "USER_FETCH_ERROR",
    payload: error,
  };
};

const UserRegisterStart = () => {
  return {
    type: "USER_REGISTER_START",
  };
};
const UserRegisterSucess = (data) => {
  return {
    type: "USER_REGISTER_SUCESS",
    payload: data,
  };
};
const UserRegisterError = (error) => {
  return {
    type: "USER_REGISTER_ERROR",
    payload: error,
  };
};



export const UserFetch = () => {
  return function (dispatch) {
    dispatch(UserFetchStart());
    setTimeout(() => {
      axios
        .get("https://localhost:7277/api/Users/get-all-users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Token"),
          },
        })
        .then((data) => {
          dispatch(UserFetchSucess(data.data));
          //   toast.error("Data Fetched");
        })
        .catch((error) => {
          dispatch(UserFetchError(error.message));
          toString.error(error.message);
        });
    }, 500);
  };
};

export const UserRegister = (data) => {
  return function (dispatch) {
    dispatch(UserRegisterStart());
    setTimeout(() => {
      axios
        .post("https://localhost:7277/api/Users/add/customer", {
          id: 0,
          name: `${data.Name}`,
          email: `${data.Email}`,
        })
        .then((res) => {
          dispatch(UserRegisterSucess(res.data));
          toast.success(`Registered Successfully ! UserId ${res.data.id}`);
        })
        .catch((error) => {
          dispatch(UserRegisterError(error.message));
          toast.error(error.message);
        });
    }, 3000);
  };
};


