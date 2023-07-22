import axios from "axios";
import { toast } from "react-toastify";

const fetchCategoriesStart = () => {
  return {
    type: "FETCH_CATEGORIES_START",
  };
};
const fetchCategoriesSucess = (data) => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: data,
  };
};
const fetchCategoriesError = (error) => {
  return {
    type: "FETCH_CATEGORIES_ERROR",
    payload: error,
  };
};

const updateCategoriesStart = () => {
  return {
    type: "UPDATE_CATEGORIES_START",
  };
};
const updateCategoriesSucess = (data) => {
  return {
    type: "UPDATE_CATEGORIES_SUCCESS",
    payload: data,
  };
};

const updateCategoriesError = (error) => {
  return {
    type: "UPDATE_CATEGORIES_ERROR",
    payload: error,
  };
};

const deleteCategoriesStart = () => {
  return {
    type: "DELETE_CATEGORIES_START",
  };
};

const deleteCategoriesSuccess = (data) => {
  return {
    type: "DELETE_CATEGORIES_SUCCESS",
    payload: data,
  };
};
const deleteCategoriesError = (error) => {
  return {
    type: "DELETE_CATEGORIES_ERROR",
    payload: error,
  };
};

const addCategoryStart = () => {
  return {
    type: "ADD_CATEGORY_START",
  };
};
const addCategorySuccess = (data) => {
  return {
    type: "ADD_CATEGORY_SUCCESS",
    payload: data,
  };
};
const addCategoryError = (error) => {
  return {
    type: "ADD_CATEGORY_ERROR",
    payload: error,
  };
};
export const FetchCategories = () => {
  return function (dispatch) {
    dispatch(fetchCategoriesStart());

    axios
      .get("https://localhost:7277/api/Categories/view-categories")
      .then((data) => dispatch(fetchCategoriesSucess(data.data)))
      .catch((error) => dispatch(fetchCategoriesError(error.message)));
  };
};

export const updateCategories = (name, id) => {
  return function (dispatch) {
    dispatch(updateCategoriesStart());
    fetch(
      `https://localhost:7277/api/Categories/update-categories?name=${name}&id=${id}`,
      {
        method: "PUT",

        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token"),
        },
      }
    )
      .then((data) => {
        dispatch(updateCategoriesSucess(data.data));
        dispatch(FetchCategories());
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch(updateCategoriesError(error.message));
        dispatch(FetchCategories());
      });
  };
};

export const deleteCategories = (id) => {
  return function (dispatch) {
    dispatch(deleteCategoriesStart());

    axios
      .delete(`https://localhost:7277/api/Categories/Delete-by-id?id=${id}`)
      .then((data) => {
        dispatch(deleteCategoriesSuccess(data.data));
        toast.error("Categorie Deleted!");
        dispatch(FetchCategories());
      })
      .catch((error) => {
        dispatch(deleteCategoriesError(error));
        toast.error(error.message);
      });
  };
};

export const addCategories = (name) => {
  // console.log("name: ", name);
  return async function (dispatch) {
    await dispatch(addCategoryStart());

    try {
      var response = await axios.post(
        `https://localhost:7277/api/Categories/add-categories?Name=${name}`,
        null,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Token"),
          },
        }
      );
      // console.log("response: ", response);
      await dispatch(addCategorySuccess(response.data));
      toast.success("Categorie Added !");
      await dispatch(FetchCategories());
    } catch (error) {
      // console.log("error: ", error);
      await dispatch(addCategoryError(error.message));
      toast.error(error.message);
      await dispatch(FetchCategories());
    }
  };
};
