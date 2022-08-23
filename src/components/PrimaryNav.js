import React, { useContext } from "react";
import SweetContext from "../SweetContext";
import { Routes, Route, Link } from "react-router-dom";

function PrimaryNav() {
  const { cart, handleSearchClick } = useContext(SweetContext);

  return (
    <div className="wrapper">
      <div className="row navbar">
        <div className="social-icons">
          <span className="icon">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </span>
          <span className="icon">
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </span>
          <span className="icon">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
        </div>
        <div className="logo">
          <h2>
            <Link to="/">SWEETS SHOP</Link>
          </h2>
        </div>
        <div className="right-icons">
          <a href="#/" onClick={handleSearchClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <Link to="/cart" className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i> ({cart.length})
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrimaryNav;
