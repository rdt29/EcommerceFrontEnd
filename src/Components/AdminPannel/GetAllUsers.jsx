import { CSpinner } from "@coreui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getalluserApi } from "../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { UserFetch } from "../Action/Users";
import { ToastBody } from "react-bootstrap";
import AddSupplier from "./AddSupplier";

export default function GetAllUsers() {
  const dispatch = useDispatch();
  const Response = useSelector((st) => st.Users);
  const addSupplierResponse = useSelector((st) => st.Supplier);

  const [Role, setRole] = useState("allUsers");
  const [newSupplierModal, setNewSupplierModal] = useState(false);

  useEffect(() => {
    dispatch(UserFetch());
    setRole("allUsers");
  }, [newSupplierModal]);

  if (Response.isLoading || addSupplierResponse.isLoading) {
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
        {" "}
        <button
          className="btn btn-success"
          onClick={() => {
            setNewSupplierModal(true);
          }}
        >
          Add New Supplier{" "}
        </button>
        <center>
          {" "}
          <h4>List OF Users</h4>
        </center>
        <br />
        <br />
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          style={{
            backgroundColor: "#EBEDEF",
            width: "25%",
            margin: "0px 10px",
          }}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          {/* <option selected>{Role} </option> */}
          <hr />
          <option value="allUsers">All Users</option>
          <option value="Admin">Admin</option>
          <option value="Supplier">Supplier</option>
          <option value="Customer">Customer</option>
        </select>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Role </th>
            </tr>
          </thead>
          <tbody>
            {Response.data &&
              Response.data.map((users, index) => {
                if (users.roleName == Role) {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.roleName}</td>
                    </tr>
                  );
                } else if (Role == "allUsers") {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.roleName}</td>
                    </tr>
                  );
                }
              })}
          </tbody>
          {/* <ToastContainer /> */}
        </table>
        {newSupplierModal && <AddSupplier modal={setNewSupplierModal} />}
      </div>
    );
  }
}
