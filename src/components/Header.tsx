import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <img
          className="navbar-hamburger"
          src={require("../assets/hamburger.png")}
        />
        <div>
          <img
            className="navbar-logo"
            src={require("../assets/Epicure_logo.png")}
          />
        </div>
        <div>
          <img
            className="search-icon"
            src={require("../assets/search_icon.png")}
            alt="search"
          />
          <img
            className="user-icon"
            src={require("../assets/user_icon.png")}
            alt="user"
          />
          <img
            className="cart-icon"
            src={require("../assets/cart_icon.png")}
            alt="cart"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
