import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

function Success() {
  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
      <div className="wrapper">
        <div className="center">
          <h2>Order Successfull &#127881;</h2>
          <p>
            <Link to="/" className="btn">
              Go back to Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Success;
