import { CSpinner } from "@coreui/react";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCategories } from "../Action/Categories";
import CategoriesEdit from "./CategoriesEdit";
import CategoriesDelete from "./CategoriesDelete";
import CategoriesAdd from "./CategoriesAdd";

export default function Categories() {
  const dispatch = useDispatch();
  const [view, setview] = useState(false);
  const [clickedData, setclickedData] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const Response = useSelector((state) => state.Categories);

  const [deleteData, setDeleteData] = useState({
    name: "",
    id: "",
  });

  const [newCategoryModal, setNewCategoryModal] = useState(false);

  useEffect(() => {
    dispatch(FetchCategories());
  }, []);

  const handleEdit = (name, id) => {
    setclickedData((prev) => {
      return {
        ...prev,
        name: name,
        id: id,
      };
    });
    setview(true);
  };

  if (Response.isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          height: "100vh ",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.455)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CSpinner
          style={{ height: "50px", width: "50px" }}
          size="lg"
          variant="grow"
        />
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setNewCategoryModal(true);
          }}
        >
          Add New{" "}
        </button>
        <center>
          {" "}
          <h4>List OF Categories</h4>
        </center>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Categories</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Response.data.map((categories, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{categories.id}</td>
                  <td>{categories.categoryName}</td>

                  <td>
                    <button
                      onClick={() =>
                        handleEdit(categories.categoryName, categories.id)
                      }
                      className="btn btn-warning"
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setDeleteConfirmation(true);
                        setDeleteData(() => {
                          return {
                            id: categories.id,
                            name: categories.categoryName,
                          };
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {view && <CategoriesEdit fnc={setview} name={clickedData} />}
        {deleteConfirmation && (
          <CategoriesDelete
            deleteConfirmation={setDeleteConfirmation}
            data={deleteData}
          />
        )}

        {newCategoryModal && (
          <CategoriesAdd categorymodal={setNewCategoryModal} />
        )}
      </div>
    );
  }
}
