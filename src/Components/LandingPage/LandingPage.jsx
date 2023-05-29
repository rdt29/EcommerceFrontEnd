import React from "react";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <section className="hero text-center">
        <div className="container mt-5">
          <h1>Welcome to My Ecommerce Store</h1>
          <p>Discover amazing products at unbeatable prices.</p>
          <NavLink to = "/products" className="btn btn-primary btn-lg mb-5 mt-5">
            Shop Now
          </NavLink>
        </div>
      </section>

      <section className="products mt-5 mb-5">
        <div className="container">
          <h2 className="text-center mt-5 mb-5">Featured Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="product1.jpg"
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <NavLink to = "" className="btn btn-primary">
                    Add to Cart
                  </NavLink>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="product2.jpg"
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <NavLink to = "" className="btn btn-primary">
                    Add to Cart
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="product3.jpg"
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <NavLink to = "" className="btn btn-primary">
                    Add to Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 My Ecommerce Store. All rights reserved.</p>
      </footer>
    </>
  );
}
