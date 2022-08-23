import React from "react";

function Footer() {
  return (
    <div className="wrapper">
      <div className="row footer">
        <div className="social-icons">
          <span className="icon">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </span>
          <span className="icon">
            <a href="#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </span>
          <span className="icon">
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </span>
        </div>
        <div className="logo">
          <p>
            <a href="#">&copy; SWEETS SHOP.</a>
          </p>
        </div>
        <div className="footer-links">
          <ul className="row">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            {/* <li>
                <a href="#">Contact</a>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
