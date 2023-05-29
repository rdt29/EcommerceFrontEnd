import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "react-bootstrap-button-loader";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, ViewResponse } from "../Action/Action";

export default function RegisterModal() {
  const [UserData, setUserData] = useState({
    Name: "",
    Email: "",
  });

  const handleChange = (dets) => {
    dispatch(ViewResponse("false"));
    var value = dets.target.value;

    var name = dets.target.name;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const res = useSelector((st) => st.Register);
  useEffect(() => {
    const btn = document.getElementById("CloseBtn");
    if (res.view == "true") {
      console.log("view");
      if (res.error) {
        toast.error(res.error, {
          autoClose: 3000,
        });
        setUserData({ Name: "", Email: "" });
        setTimeout(() => {
          btn.click();
        }, 1000);
      } else {
        toast.success(`Registered Successfully !  UserId ${res.res.id}`, {
          autoClose: 3000,
        });
        setUserData({ Name: "", Email: "" });
        setTimeout(() => {
          btn.click();
        }, 1000);
      }
    }
  }, [res]);
  const dispatch = useDispatch();

  const Register = () => {
    if (UserData.Name == "" || UserData.Email == "") {
      toast.error("Enter Details !", {
        autoClose: 3000,
      });
    } else {
      dispatch(RegisterUser(UserData));
    }
  };

  // const Register = async (dets) => {
  //   dets.preventDefault();
  //   if (UserData.Name == "" || UserData.Email == "") {
  //     toast.error("Enter Details !", {
  //       autoClose: 3000,
  //     });
  //   } else {
  //     setLoader("true");
  //     setTimeout(async () => {
  //       await axios
  //         .post("https://localhost:7277/api/Users/add/customer", {
  //           id: 0,
  //           name: `${UserData.Name}`,
  //           email: `${UserData.Email}`,
  //         })
  //         .then((res) => {
  //           setResponse(res.data);
  //           setLoader("false");
  //           setUserData({
  //             Name: "",
  //             Email: "",
  //           });
  //           toast.success(`Registered Successfully ! UserId ${res.data.id}`);
  //           setTimeout(()=>{
  //             const btn = document.getElementById("CloseBtn");
  //             btn.click();
  //           }, 4900)
  //         })
  //         .catch((err) =>toast.error(err.message));
  //     }, 3000);
  //   }
  // };

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
        tabindex="-1"
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
                        loading={res.loading == "true" ? true : false}
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
      <ToastContainer />
    </div>
  );
}
