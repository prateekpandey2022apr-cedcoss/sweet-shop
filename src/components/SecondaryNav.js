import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SweetContext from "../SweetContext";

function SecondaryNav() {
  const { loggedIn, handleLogoutClick } = useContext(SweetContext);

  return (
    <div className="sec-nav-container">
      <div className="wrapper">
        <ul className="row sec-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          {loggedIn && (
            <li>
              <a href="#/" onClick={handleLogoutClick}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SecondaryNav;
