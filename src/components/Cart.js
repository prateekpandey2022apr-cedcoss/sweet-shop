import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SweetContext from "../SweetContext";
import { CartTotal } from "../Utils";
import Footer from "./Footer";
import PrimaryNav from "./PrimaryNav";
import SearchForm from "./SearchForm";
import SecondaryNav from "./SecondaryNav";

function Cart() {
  const { cart, handleQtyUpdate } = useContext(SweetContext);

  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
      <div className="wrapper cart-container">
        {cart.length > 0 ? (
          cart.map((item, idx) => {
            return (
              <>
                <div className="row" key={idx}>
                  <div className="col-4 cart-item">
                    <div className="item-img">
                      <img
                        alt={item.name}
                        src={item.image}
                        style={{ backgroundColor: item.bgColor }}
                      />
                    </div>

                    <div className="item-desc">
                      <h3>{item.name}</h3>
                      <p>&#8377; {item.price.toFixed(2)}</p>
                    </div>

                    <div className="item-btn">
                      <button
                        className="dec"
                        data-id={item.id}
                        // onClick={props.handleQtyUpdate}
                        onClick={(event) => {
                          if (item.quantity !== 1) {
                            handleQtyUpdate(event, item.id, "-");
                          } else if (window.confirm("Are you sure")) {
                            handleQtyUpdate(event, item.id, "-");
                            // onClick={(event) => handleQtyUpdate(event, item.id)}
                          }
                        }}
                      >
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="inc"
                        // data-id={item.id}
                        onClick={(event) =>
                          handleQtyUpdate(event, item.id, "+")
                        }
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="row">
            <div className="col-4 center">
              <p className="">Cart Empty &#128532;</p>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="row subtotal center">
              <div className="col-4">
                <h4>Subtotal: &#8377; {CartTotal(cart).toFixed(2)}</h4>
              </div>
            </div>
          </>
        )}

        {cart.length > 0 && (
          <>
            <div>
              <div className="wrapper btn-container center">
                <div className="row proceed-checkout">
                  <div className="col-4">
                    <p>
                      <Link to="/checkout" className="btn">
                        Proceed to Checkout{" "}
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
