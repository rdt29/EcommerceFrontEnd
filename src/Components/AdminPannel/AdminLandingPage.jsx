import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

export default function AdminLandingPage() {
  const { name } = useParams();
  var token = localStorage.getItem("Token");
  // var Username = useSelector((st) => st.UserName);
  var username = localStorage.getItem("userName");
  if (token != "" && username == name) {
    return (
      <>
        <div className="container">
          <h1 className="text-center mt-5">Welcome {name}</h1>

          <div className="row mt-5">
            <div style={{ width: "25%" }} className="col-md-4">
              <div className="card">
                <center>
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                    className="card-img-top"
                    alt="Image 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">List Of Users</h5>
                    <p className="card-text">
                      This is the description of All Users
                    </p>

                    <NavLink to="/admin/getalluser" className="btn btn-primary">
                      View
                    </NavLink>
                  </div>
                </center>
              </div>
            </div>

            <div style={{ width: "25%" }} className="col-md-4">
              <div className="card">
                <center>
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src="https://cdn-icons-png.flaticon.com/512/7570/7570228.png"
                    className="card-img-top"
                    alt="Image 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">List Of Supplier</h5>
                    <p className="card-text">
                      This is the description of Suppliers.
                    </p>

                    <NavLink to="/admin/getallsupplier" className="btn btn-primary">
                      View
                    </NavLink>
                  </div>
                </center>
              </div>
            </div>

            <div style={{ width: "25%" }} className="col-md-4">
              <div className="card">
                <center>
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src="data:image/png;base64,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"
                    className="card-img-top"
                    alt="Image 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Category </h5>
                    <p className="card-text">
                   View Delete Update Your Categories Category
                    </p>

                    <NavLink to="/admin/category" className="btn btn-primary">
                      Add/Update
                    </NavLink>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Unauthorize Access</h1> {localStorage.removeItem("Token")}
        {localStorage.removeItem("userName")}
      </>
    );
  }
}
