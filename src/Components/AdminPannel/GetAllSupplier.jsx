import { CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserFetch } from "../Action/Users";
import AddSupplier from "./AddSupplier";

export default function GetAllSupplier() {
  const [newSupplierModal, setNewSupplierModal] = useState(false);
  const [filteredResponse, setfilteredResponse] = useState([]);
  const dispatch = useDispatch();
  const Response = useSelector((st) => st.Users);
  // setfilteredResponse(
  //   Response.data.filter((elem) => elem.roleName == "Supplier")
  // );
  useEffect(() => {
    dispatch(UserFetch());
  }, []);

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
            setNewSupplierModal(true);
          }}
        >
          Add New Supplier{" "}
        </button>
        <center>
          {" "}
          <h4>List OF Suppliers</h4>
        </center>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredResponse.map((supliers, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{supliers.id}</td>
                  <td>{supliers.name}</td>
                  <td>{supliers.roleName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {newSupplierModal && <AddSupplier modal={setNewSupplierModal} />}
      </div>
    );
  }
}
