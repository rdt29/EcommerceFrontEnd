import { CCardImageOverlay } from "@coreui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { UpdateCat } from "../Action/Action";
import { useDispatch } from "react-redux";
import axios from "axios";
import Button from "react-bootstrap-button-loader";

export default function CategoriesEdit(props) {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState("false");

  useEffect(() => {
    var btn = document.getElementById("open");
    btn.click();
    props.fnc("false");
 
  },[]);
  const [NewName, setNewName] = useState();

  const saveChanges = async () => {
    setLoading("true");
    await axios
      .put(
        `https://localhost:7277/api/Categories/update-categories?name=${NewName}&id=${props.name.id}`,
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("Token"),
          },
        }
      )
      .then((data) => {
        console.log(data);
        setLoading("false");
      })
      .catch((err) => console.log(err));
  };

  const handleInput = (dets) => {
    var value = dets.target.value;
    console.log("value: ", value);

    setNewName(value);
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#CategoriesModal"
        data-bs-whatever="@mdo"
        id="open"
        style={{ display: "none" }}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id="CategoriesModal"
        tabIndex="-1"
        aria-labelledby="CateditModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="CateditModalLabel">
                Edit Categories
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Old Name
                  </label>
                  <input
                    type="text"
                    value={props.name.name}
                    class="form-control"
                    id="recipient-name"
                    readOnly
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    New Name
                  </label>
                  <input
                    value={NewName}
                    name="newName"
                    onChange={handleInput}
                    type="text"
                    class="form-control"
                    id="message-text"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <Button
                // onClick={saveChanges}
                loading={Loading == "true" ? true : false}
              >
                {" "}
                Save Changes
              </Button>
              <button onClick={()=>{setLoading("true")}}>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
