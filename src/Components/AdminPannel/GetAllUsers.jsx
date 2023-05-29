import { CSpinner } from "@coreui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { getalluserApi } from "../../Api/Api";

export default function GetAllUsers() {
  const [loading, setloading] = useState("false");
  const [Data, setData] = useState([]);
  useEffect(() => {
    users();
  }, []);
  const users = async () => {
    setloading("true");

    if (localStorage.getItem("Token")) {
      setTimeout(async () => {
        await axios
          .get(getalluserApi, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("Token"),
            },
          })
          .then((data) => {
            setData(data.data);
            setloading("false");
          })
          .catch((err) => console.log(err));
      }, 3000);
    } else {
      toast.error("Unauthorized", {
        autoClose: 3000,
      });
      //   setloading("false");
    }
  };

  if (loading === "true") {
    return (
      <div
        style={{
          position: "fixed",
          height: "100vh ",
          width: "100%",

          backgroundColor: "rgba(0, 0, 0, 0.455)",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <CSpinner style={{height: "50px" , width:"50px"}} size="lg" variant="grow" />\
      </div>
    );
  } else {
    return (
      <div>
        <center>
          {" "}
          <h4>List OF Users</h4>
        </center>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Role </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((users, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.roleName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
