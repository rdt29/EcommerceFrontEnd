import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ViewAllProducts() {
  useEffect(() => {
    product();
  }, []);

  const [Products, setProducts] = useState([]);
  const [Loader, setLoader] = useState("false");
  const product = async () => {
    setLoader("true");
    setInterval(async () => {
      await axios
        .get("https://localhost:7277/api/Product/view-all-products")
        .then((data) => data.data)
        .then((data) => {
          setProducts(data);
          setLoader("false");
        })
        .catch((error) => console.log(error));
    }, 3000);
  };

  if (Loader == "false") {
    return (
      <div>
        {Products.map((product) => {
          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6" style={{ height: "50vh" }}>
                  <img
                    style={{ height: "100%", width: "50%", objectFit: "fill" }}
                    src={product.imageURL}
                    className="img-fluid"
                    alt={product.productName}
                  />
                </div>
                <div className="col-md-6">
                  <h2>{product.productName}</h2>
                  <p className="text-muted">Product Category</p>
                  <h3> ₹ {product.price}</h3>
                  <p>{product.productDescription}</p>
                  <div className="form-group">
                    <label for="quantity">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      value="1"
                    />
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.455)",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
}
