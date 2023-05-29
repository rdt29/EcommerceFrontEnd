import React from "react";
import { useSelector } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";
import LoginModel from "../LandingPage/LoginModel";

export default function AdminNavBar() {
  // const name = useSelector((st) => st.UserName);
  const navigation = useNavigate();
  const name = localStorage.getItem("userName")
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="#">
            My Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ backgroundColor: "" }}
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <li style={{cursor:"pointer"}} onClick={()=>{navigation(`/admin/${name}`)}} className="nav-link" >
                  Home
                </li>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item" onClick={()=>{
                localStorage.removeItem("Token");
                localStorage.removeItem("userName");
                localStorage.removeItem("userRole");
                navigation("/")
              }}>
                <NavLink className="nav-link" to="#">
                  {/* <LoginModel /> */}
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  {/* <RegisterModal /> */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  {/* name : {name} */}
                </NavLink>
              </li>
            </ul>
            <div style={{ position: "absolute", right: "5%" }}>
              <span>Welcome <span style={{fontSize:"20px" , fontWeight:"600"}}>{name}</span></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
