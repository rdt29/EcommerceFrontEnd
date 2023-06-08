import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
export default function CustomerNavbar() {
  const navigation = useNavigate();
  const cartItems = useSelector((st) => st.cartManager);

  // console.log("cartItems: ", cartItems);
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ paddingRight: "30px" }}>
        <Navbar.Brand to="#home">Ecommerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink style={{textDecoration:"none" , color:"#69717F"}} to="/"> Home </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink style={{textDecoration:"none" , color:"#69717F"}} to="/products">Products</NavLink>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                localStorage.removeItem("Token");
                localStorage.removeItem("userName");
                localStorage.removeItem("userRole");
                navigation("/");
              }}
              to="#products"
            >
              Logout
            </Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item to="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item to="#orders">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <h5>Welcome {localStorage.getItem("userName")}</h5>
        <NavLink style={{textDecoration:"none" , color:"#69717F"}} to="/mycart">
          <AiOutlineShoppingCart
            style={{ marginLeft: "20px", cursor: "pointer" }}
            size="3vw"
          />
        </NavLink>
        <span
          style={{
            // backgroundColor: "warmwhite",
            boxShadow: "5px 5px 5px lightblue",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "-10px",
            left: "-10px",
            fontWeight: 900,
          }}
        >
          {cartItems.length}
        </span>
      </Navbar>
    </>
  );
}
