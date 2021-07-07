import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import iconhamburger from "../assets/shared/tablet/icon-hamburger.svg";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={iconhamburger} alt="Open Menu"></img>
      </div>
      <div>
        <img src={logo} alt=""></img>
      </div>
      <div>
        <img src={cart} alt="View Cart"></img>
      </div>
    </div>
  );
}

export default Header;
