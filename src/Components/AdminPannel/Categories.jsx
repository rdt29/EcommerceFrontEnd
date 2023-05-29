import { CSpinner } from "@coreui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CategoriesApi } from "../../Api/Api";
import CategoriesEdit from "./CategoriesEdit";
import { useDispatch, useSelector } from "react-redux";
import { FetchCategories } from "../Action/Action";

export default function Categories() {
  const dispatch = useDispatch();
  const seldata = useSelector((st) => st.FetchCategories);

  const [Loader, setLoader] = useState("true");
  useEffect(() => {
    // categories();

    dispatch(FetchCategories());
    setTimeout(() => {
      setLoader("false");
    }, 5000);
  }, []);
  const [Data, setData] = useState([]);
  const [view, setview] = useState("false");
  const [clickedData, setclickedData] = useState({});
  const handleEdit = (name, id) => {
    // console.log("name: ", name);
    setclickedData((prev) => {
      return {
        ...prev,
        name: name,
        id: id,
      };
    });
    setview("true");
  };

  if (Loader == "true") {
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
        <center>
          {" "}
          <h4>List OF Categories</h4>
        </center>
        <table class="table table-bordered">
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
            {seldata.cat.map((categories, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{categories.id}</td>
                  <td>{categories.categoryName}</td>
                  {/* <td>
                    <CategoriesEdit name={categories.categoryName} id={index} />
                  </td> */}
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
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {view == "true" && <CategoriesEdit fnc={setview} name={clickedData} />}
      </div>
    );
  }
}
