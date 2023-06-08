import axios from "axios";
import { toast } from "react-toastify";

const fetchProductStart = () => {
  return {
    type: "FETCH_PRODUCT_START",
  };
};
const fetchProductSucess = (data) => {
  return {
    type: "FETCH_PRODUCT_SUCESS",
    payload: data,
  };
};

const fetchProductError = (error) => {
  return {
    type: "FETCH_PRODUCT_ERROR",
    payload: error,
  };
};



export const FetchProduct = () => {
  return function (dispatch) {
    dispatch(fetchProductStart());
    setTimeout(() => {
      axios
        .get("https://localhost:7277/api/Product/view-all-products")
        .then((data) => {
          dispatch(fetchProductSucess(data.data));
        })
        .catch((error) => {
          dispatch(fetchProductError(error.message));
          toast.error(error.message);
        });
    }, 500);
  };
};
