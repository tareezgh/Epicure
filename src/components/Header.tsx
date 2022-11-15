import React, { useState } from "react";

import "./style.css";

import Hamburger from "./Hamburger";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-hamburger" onClick={toggleHamburger}>
          <div className="hamburger-line" />
          <div className="hamburger-line hamburger-middle-line" />
          <div className="hamburger-line" />
        </div>

        <div>
          <img
            className="navbar-logo"
            src={require("../assets/Epicure-logo.png")}
          />
        </div>
        <div>
          <img
            className="navbar-search-icon"
            src={require("../assets/search-icon.png")}
            alt="search"
            onClick={toggleSearch}
          />
          <img
            className="navbar-user-icon"
            src={require("../assets/user-icon.png")}
            alt="user"
          />
          <img
            className="navbar-cart-icon"
            src={require("../assets/cart-icon.png")}
            alt="cart"
            onClick={toggleCart}
          />
        </div>

        {hamburgerOpen && (
          <>
            <div className="close-navbar">
              <img
                className="close-icon"
                alt="close"
                src={require("../assets/close-black-icon.png")}
                onClick={toggleHamburger}
              />
            </div>
            <Hamburger />
          </>
        )}

        {searchOpen && (
          <>
            <div className="close-navbar">
              <img
                className="close-icon"
                alt="close"
                src={require("../assets/close-black-icon.png")}
                onClick={toggleSearch}
              />
              <h3 className="close-navbar-title">Search</h3>
            </div>

            <div className="search-content">
              <div className="search-filed">
                <img
                  className="search-icon-input"
                  alt="search"
                  src={require("../assets/search-icon.png")}
                />
                <div className="input-line"></div>
                <input
                  className="search-input"
                  placeholder="Search for restaurant cuisine, chef"
                />
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
