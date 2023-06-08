import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { json, useLocation, useNavigate, useParams } from "react-router-dom";
import { lorem } from "../Lorem";
import AlertLineIcon from "remixicon-react/AlertLineIcon";
import ShoppingCartFillIcon from "remixicon-react/ShoppingCartFillIcon";
import { ToastContainer, toast } from "react-toastify";
import LoginModel from "../LandingPage/LoginModel";
import { addCartItems } from "../Action/Cart";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const productDetails = useParams();
  const navigation = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    location.state == null
      ? navigation("/products")
      : setProduct(
          location.state.filter((elem) => elem.id == productDetails.id)
        );
  }, []);

  const addToCart = () => {
    if (localStorage.getItem("Token")) {
      dispatch(addCartItems(product[0]));
    } else {
      toast.error("Login required! Please log in to continue", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      {product.map((elem) => {
        return (
          <Container>
            <Row>
              <Col md={6}>
                <Image
                  style={{ height: "90vh", width: "50vw" }}
                  src={elem.imageURL}
                  fluid
                />
              </Col>
              <Col md={6}>
                <h2>{elem.productName}</h2>
                <p>{elem.productDescription}</p>
                <p>{lorem}</p>
                <h4>Price: ₹ {elem.price}</h4>
                <div className="form-group mb-5 mt-5">
                  <label for="quantity">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    value="1"
                  />
                </div>

                <Button onClick={addToCart} variant="primary">
                  Add to Cart <ShoppingCartFillIcon />
                </Button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
