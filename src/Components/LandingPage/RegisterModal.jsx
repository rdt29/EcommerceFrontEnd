import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "react-bootstrap-button-loader";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../Action/Users";

export default function RegisterModal() {
  const [UserData, setUserData] = useState({
    Name: "",
    Email: "",
  });
  const Response = useSelector((st) => st.Users);
  const handleChange = (dets) => {
    var value = dets.target.value;

    var name = dets.target.name;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setTimeout(() => {
      const btn = document.getElementById("CloseBtn");
      btn.click();
      setUserData({
        Name: "",
        Email: "",
      });
    }, 1500);
  }, [Response.data]);
  const dispatch = useDispatch();

  const Register = () => {
    if (UserData.Name == "" || UserData.Email == "") {
      toast.error("Enter Details !", {
        autoClose: 3000,
      });
    } else {
      dispatch(UserRegister(UserData));
    }
  };
  // console.log("Response", Response);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <li data-bs-toggle="modal" data-bs-target="#registerModal">
        Register
      </li>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerModalLabel">
                Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card bg-light">
                <article
                  className="card-body mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <h4 className="card-title mt-3 text-center">
                    Create Account
                  </h4>
                  <p className="text-center">
                    Get started with your free account
                  </p>
                  <p>
                    <NavLink to="" className="btn btn-block btn-twitter">
                      {" "}
                      <i className="fab fa-twitter"></i> Login via Twitter
                    </NavLink>
                    <NavLink to="" className="btn btn-block btn-facebook">
                      {" "}
                      <i className="fab fa-facebook-f"></i> Login via facebook
                    </NavLink>
                  </p>
                  <p className="divider-text">
                    <span className="bg-light">OR</span>
                  </p>
                  <form>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> </span>
                      </div>
                      <input
                        name="Name"
                        value={UserData.Name}
                        className="form-control"
                        placeholder="Full name"
                        type="text"
                        onChange={handleChange}
                        autoComplete="true"
                      />
                    </div>
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> </span>
                      </div>
                      <input
                        name="Email"
                        value={UserData.Email}
                        className="form-control"
                        placeholder="Email address"
                        type="email"
                        onChange={handleChange}
                        autoComplete="true"
                      />
                    </div>
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> </span>
                      </div>
                    </div>

                    <div className="form-group">
                      <Button
                        loading={Response.isLoading == true ? true : false}
                        onClick={Register}
                        className="btn btn-primary btn-block"
                      >
                        Create Account
                      </Button>
                    </div>
                    {/* <!-- form-group// -->       */}
                    <p className="text-center">
                      Have an account? <NavLink to="">Log In</NavLink>{" "}
                    </p>
                  </form>
                </article>
              </div>
              {/* <!-- card.// --> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="CloseBtn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <tainer />
    </div>
  );
}
