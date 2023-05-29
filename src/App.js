import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./Components/LandingPage/NavBar";
import { Route, Routes } from "react-router-dom";
import ViewAllProducts from "./Components/AllProducts/ViewAllProducts";
import AdminLandingPage from "./Components/AdminPannel/AdminLandingPage";
import AdminNavBar from "./Components/AdminPannel/AdminNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import '@coreui/coreui/dist/css/coreui.min.css'
import { UserRole } from "./Components/Action/Action";
import ConditionbasedNav from "./Components/Navbar/ConditionbasedNav";
import GetAllUsers from "./Components/AdminPannel/GetAllUsers";
import Categories from "./Components/AdminPannel/Categories";
function App() {

  return (
    <>
      <ConditionbasedNav />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/products" element={<ViewAllProducts />} />
        <Route exact path="/admin/:name" element={<AdminLandingPage />} />
        <Route exact path="/admin/getalluser" element={<GetAllUsers/>} />
        <Route exact path="/admin/category" element={<Categories/>} />
        <Route exact path="/user/:name" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
