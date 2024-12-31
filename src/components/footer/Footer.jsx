import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              Shop the best products at unbeatable prices. Your one-stop
              destination for all your needs.
            </p>
          </div>
          {/* Customer Service */}
          <div className="col-md-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none" aria-label="Help Center">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none" aria-label="Shipping Policy">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none" aria-label="Returns">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none" aria-label="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none" aria-label="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-light text-decoration-none" aria-label="Products">
                  Products
                </a>
              </li>
              <li>
                <a href="/login" className="text-light text-decoration-none" aria-label="Login">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none" aria-label="Deals">
                  Deals
                </a>
              </li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none" aria-label="Facebook">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none" aria-label="Twitter">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none" aria-label="Instagram">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">
            &copy; 2024 Your E-Commerce Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
