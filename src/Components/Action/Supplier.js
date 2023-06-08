import axios from "axios";
import { UserFetch } from "./Users";
import { toast } from "react-toastify";

const supplierAddStart = () => {
  return {
    type: "SUPPLIER_ADD_START",
  };
};
const supplierAddSuccess = (data) => {
  return {
    type: "SUPPLIER_ADD_SUCCESS",
  };
};
const supplierAddError = (error) => {
  return {
    type: "SUPPLIER_ADD_ERROR",
  };
};

export const supplierAdd = (data) => {
  console.log("data: ", data);
  return async function (dispatch) {
    await dispatch(supplierAddStart());
    try {
      const response = await axios.post(
        "https://localhost:7277/api/Users/add-suppiler",
        { id: 0, name: data.name, email: data.inputemail },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Token"),
          },
        }
      );
      ;

      await dispatch(supplierAddSuccess(response.data));
      toast.success("SuccessFully Registered ! with Id " + response.data.id);
      await dispatch(UserFetch());
    } catch (error) {
      await dispatch(supplierAddError(error.message));
      await dispatch(UserFetch());
      toast.error(error.message);
    }
  };
};
