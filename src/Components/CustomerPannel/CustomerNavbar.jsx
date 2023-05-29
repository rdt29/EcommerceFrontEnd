import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerNavbar() {
   const  navigation = useNavigate();
  return (
    <>
      <div>CustomerNavbar</div>

      <button
        onClick={() => {
          localStorage.removeItem("Token");
          localStorage.removeItem("userName");
          localStorage.removeItem("userRole");
          navigation("/");
        }}
      >Logout </button>
    </>
  );
}
