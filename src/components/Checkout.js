import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SweetContext from "../SweetContext";
import Login from "./Login";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

function Checkout() {
  const { loggedIn, makePayment } = useContext(SweetContext);

  console.log(loggedIn);

  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
      {loggedIn ? (
        <>
          <div className="wrapper">
            <div className="row">
              {/* <div> */}
              <form onSubmit={makePayment}>
                <p>
                  <label>Enter Address</label>
                  <br />
                  <textarea rows={10} cols={50} required></textarea>
                </p>
                <p>Choose a payment method</p>
                <p>
                  <label>
                    <input type="radio" name="payment" id="debit" />
                    &nbsp; Debit/Credit/ATM Card
                  </label>
                </p>

                <p>
                  <label>
                    <input type="radio" name="payment" id="net-banking" />
                    &nbsp; Net Banking
                  </label>
                </p>

                <p>
                  <label>
                    <input type="radio" name="payment" id="upi" />
                    &nbsp; Other UPI Apps
                  </label>
                </p>

                <p>
                  <label>
                    <input type="radio" name="payment" id="cod" />
                    &nbsp; Pay on Delivery
                  </label>
                </p>

                <p>
                  <button className="btn">Make Payment</button>
                  {/* <input type="submit" className="btn" to="/success">
                    Make Payment
                  </Link> */}
                </p>
              </form>
              {/* </div> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="wrapper">
            <div className="row">
              <div className="col-4 center">
                <p>
                  <Link to="/login?from=checkout" className="btn">
                    Login to continue
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;
