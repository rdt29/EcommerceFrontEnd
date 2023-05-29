import React from "react";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import AdminNavBar from "../AdminPannel/AdminNavBar";
import NavBar from "../LandingPage/NavBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { UserName, UserRole } from "../Action/Action";
import CustomerNavbar from "../CustomerPannel/CustomerNavbar";

export default function ConditionbasedNav() {
  const [nav, setnav] = useState();
  const { pathname } = useLocation();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    navbar();
  },[pathname,userRole]);

  const navbar = () => {
    if (userRole == "Admin") {
      setnav(<AdminNavBar />);
    } else if (userRole == "Customer") {
      setnav(<CustomerNavbar />);
    } else {
      setnav(<NavBar />);
    }
  };

  return <>{nav}</>;
}
