import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SlidingNavbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

function SlidingNavbar() {
  const { cartItems } = useSelector((store) => store.cart);
  const [width, setWidth] = useState(0);

  const openNav = (event) => {
    setWidth("100%");
  };

  const closeNav = (event) => {
    setWidth("0%");
  };

  return (
    <Fragment>
      <nav>
        <div style={{ width: width }} className="overlay">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>

          <div className="overlay-content">
            <div className="left-navbar-item-container">
              <h1>
                Pizza
                <img
                  src={process.env.PUBLIC_URL + "/pizzaLogo.png"}
                  alt="Pizza"
                />
                Shop
              </h1>
            </div>
            <div className="middle-navbar-item-container">
              <ul>
                <li>
                  <NavLink to="/" onClick={closeNav}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={closeNav}>
                    MENU
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={closeNav}>
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={closeNav}>
                    STORES
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={closeNav}>
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="right-navbar-item-container">
              <div className="cart-icon-container">
                {cartItems && (
                  <div>
                    <NavLink to="/cart" onClick={closeNav}>
                      <ShoppingCartIcon fontSize="large" />
                    {cartItems.length > 0 ? <p>{cartItems.reduce((acc, i) => acc + i.quantity, 0)}</p> : ""}
                    </NavLink>
                  </div>
                )}
              </div>
              <div>
                <button className="btn-login">LOGIN</button>
              </div>
              <div>
                <button className="btn-signup">SIGNUP</button>
              </div>
            </div>
          </div>
        </div>
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
      </nav>
    </Fragment>
  );
}

export default SlidingNavbar;
