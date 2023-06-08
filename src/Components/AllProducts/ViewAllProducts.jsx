import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchProduct } from "../Action/Product";
import { FetchCategories } from "../Action/Categories";
import { Form } from "react-bootstrap";

export default function ViewAllProducts() {
  const dispatch = useDispatch();
  const Response = useSelector((st) => st.Products);
  const Categories = useSelector((st) => st.Categories);
  const [priceFilterData, setPriceFilterData] = useState(Response.data);
  const [filterBox, setFilterBox] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState("allProducts");

  const navigation = useNavigate();
  useEffect(() => {
    dispatch(FetchProduct());
    dispatch(FetchCategories());
    setPriceFilterData(Response.data);
  }, []);
  const priceFilterHandler = (e) => {
    if (e.target.value == "noFilter") {
      setPriceFilterData(Response.data);
    } else if (e.target.value == "highToLow") {
      setPriceFilterData(Response.data.sort((a, b) => b.price - a.price));
    } else if (e.target.value == "lowToHigh") {
      setPriceFilterData(Response.data.sort((a, b) => a.price - b.price));
    } else {
      setPriceFilterData(Response.data);
    }
  };

  if (!Response.isLoading) {
    return (
      <div style={{ position: "relative" }}>
        <button
          className="btn btn-primary"
          onClick={() => {
            setFilterBox(true);
          }}
        >
          Apply Filter
        </button>
        {filterBox && (
          <div
            style={{
              position: "relative",
              backgroundColor: "",
              // border: "2px solid black",
              boxShadow: "10px 20px 50px rgba(0, 0, 0, 0.455)",
              width: "50%",
              height: "25vh",
              left: "50%",
              top: "20px",
              transform: "translate(-50%,0%)",
              marginBottom: "20vh",
            }}
          >
            <center>
              <h3>Filter</h3>=
              <Form.Select
                style={{ width: "50%" }}
                aria-label="Default select example"
                onChange={(e) => {
                  setCategoriesFilter(e.target.value);
                }}
              >
                <option value="allProducts" selected>
                  All Products
                </option>
                {Categories.data.map((cat) => {
                  return (
                    <option value={cat.categoryName}>{cat.categoryName}</option>
                  );
                })}
              </Form.Select>{" "}
              <br />
              <Form.Select
                style={{ width: "50%" }}
                aria-label="Default select example"
                onChange={priceFilterHandler}
              >
                <option value="noFilter" selected>
                  No Filter
                </option>

                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </Form.Select>
            </center>
            <button
              onClick={() => {
                setFilterBox(false);
              }}
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        )}
        {Response.data.map((product) => {
          if (categoriesFilter == "allProducts") {
            return (
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6" style={{ height: "50vh" }}>
                    <img
                      style={{
                        height: "100%",
                        width: "50%",
                        objectFit: "fill",
                      }}
                      src={product.imageURL}
                      className="img-fluid"
                      alt={product.productName}
                    />
                  </div>
                  <div className="col-md-6">
                    <h2>{product.productName}</h2>
                    <p className="text-muted">{product.categoryName}</p>
                    <h3> ₹ {product.price}</h3>
                    <p>{product.productDescription}</p>

                    <button
                      onClick={() => {
                        navigation(
                          `/products/${product.productName}/${product.id}`,
                          {
                            state: Response.data,
                          }
                        );
                      }}
                      className="btn btn-primary"
                    >
                      View Details{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          } else if (categoriesFilter == product.categoryName) {
            return (
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6" style={{ height: "50vh" }}>
                    <img
                      style={{
                        height: "100%",
                        width: "50%",
                        objectFit: "fill",
                      }}
                      src={product.imageURL}
                      className="img-fluid"
                      alt={product.productName}
                    />
                  </div>
                  <div className="col-md-6">
                    <h2>{product.productName}</h2>
                    <p className="text-muted">{product.categoryName}</p>
                    <h3> ₹ {product.price}</h3>
                    <p>{product.productDescription}</p>

                    <button
                      onClick={() => {
                        navigation(
                          `/products/${product.productName}/${product.id}`,
                          {
                            state: Response.data,
                          }
                        );
                      }}
                      className="btn btn-primary"
                    >
                      View Details{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
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
