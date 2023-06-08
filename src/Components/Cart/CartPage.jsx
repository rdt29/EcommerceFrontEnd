import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cartItems = useSelector((st) => st.cartManager);

  const renderCartItems = () => {
    // const uniqueItems = new Set(cartItems);
    const uniqueArray = cartItems.filter(
      (item, index, arr) => index === arr.findIndex((o) => o.id === item.id)
    );

    console.log("uniqueArray: ", uniqueArray);

    return Array.from(uniqueArray).map((unique, index) => {
      let count = 0;
      cartItems.map((item, index) => {
        if (item.id === unique.id) {
          count++;
        }
      });
      return (
        <tr key={index}>
          <td>
            <img
              src={unique.imageURL}
              height={"100px"}
              width={"100px"}
              style={{ borderRadius: "20px" }}
              alt={unique.productName}
            />
          </td>
          <td>{unique.productName}</td>
          <td> {unique.price}</td>
          <td>{count}</td>
          <td
            style={{
              display: "flex",
              justifyContent: "space-between",
            //   alignItems: "center",
            }}
          >
            <button style={{}} className="btn btn-sm btn-outline-danger">
              -
            </button>{" "}
            <center>
              {unique.price}
              {""}
            </center>
            <button style={{}} className="btn btn-sm btn-outline-success">
              +
            </button>{" "}
          </td>

          <td>
            <Button
              variant="danger"
              //onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      {" "}
      <Container>
        <h1>Cart</h1>
        {cartItems.length == 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Table  bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderCartItems()}</tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
