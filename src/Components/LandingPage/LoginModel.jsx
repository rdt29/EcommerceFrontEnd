import axios from "axios";
import React, { useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap-button-loader";
import jwt_decode from "jwt-decode";
import AdminLandingPage from "../AdminPannel/AdminLandingPage";
import { useDispatch } from "react-redux";
import { UserName, UserRole } from "../Action/Action";

export default function LoginModel() {
  const [Details, setdetails] = useState({
    UserID: "",
    username: "",
  });
  const [Token, setToken] = useState();
  const [Loader, setLoader] = useState("false");
  const dispatch = useDispatch();
  // const [TokenData, setTokenData] = useState({
  //   Name: "",
  //   UserID: "",
  //   Role: "",
  // });
  const Navigate = useNavigate();

  const handleChange = (dets) => {
    var name = dets.target.name;
    var value = dets.target.value;

    setdetails(() => {
      return {
        [name]: value,
      };
    });
  };

  const Login = async () => {
    if (Details.UserID === "" || Details.username === "") {
      toast.error("Enter Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setLoader("true");
      setTimeout(async () => {
        await axios
          .post(
            `https://localhost:7277/api/Users/login?UserId=${Details.UserID}`
          )
          .then((res) => res.data)
          .then((token) => {
            if (token == "No user Found") {
              toast.error(token);
              // console.log("errorr")
              setLoader("false");
            } else {
              setToken(token);
              setLoader("false");
              decode();
            }
          })
          .catch((err) => {
            // console.log("err: ", err);

            toast.error(err.message);
          });
        setLoader("false");
      }, 3000);
    }
  };
  const decode = () => {
    if (Token) {
      var decoded = jwt_decode(Token);
      var data = Object.values(decoded);
      localStorage.setItem("Token", Token);

      dispatch(UserName(data[0]));
      dispatch(UserRole(data[2]));
      localStorage.setItem("userName", data[0]);
      localStorage.setItem("userRole", data[2]);
      var btn = document.getElementById("modalclose");
      btn.click();
      if (data[2] == "Admin") {
        Navigate(`/admin/${data[0]}`);
      } else if (data[2] == "Customer") {
        Navigate(`/user/${data[0]}`);
      } else {
        Navigate("/");
      }
    }
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <li type="button" data-bs-toggle="modal" data-bs-target="#LoginModal">
        Login
      </li>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="LoginModal"
        tabindex="-1"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="LoginModalLabel">
                Login Page
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {/* <!-- name input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="Name"
                    name="username"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label" for=" Name">
                    Name
                  </label>
                </div>

                {/* <!-- userid input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="userid"
                    name="UserID"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label" for="userid">
                    UserId
                  </label>
                </div>

                <Button
                  loading={Loader == "true" ? true : false}
                  onClick={Login}
                >
                  Login
                </Button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                id="modalclose"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
