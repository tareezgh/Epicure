import React, { useState } from "react";

import "./Header.css";

import Hamburger from "./Hamburger";
import Search from "../Search/Search";
import Cart from "./Cart";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    if (cartOpen) toggleCart();
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleSearch = () => {
    if (cartOpen) toggleCart();
    setSearchOpen(!searchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <nav className="navbar sticky">
        <div className="navbar-hamburger" onClick={toggleHamburger}>
          <div className="hamburger-line" />
          <div className="hamburger-line hamburger-middle-line" />
          <div className="hamburger-line" />
        </div>

        <div>
          <img
            className="navbar-logo"
            src={require("../../assets/Epicure-logo.png")}
          />
        </div>

        <div>
          <img
            className="navbar-search-icon"
            src={require("../../assets/search-icon.png")}
            alt="search"
            onClick={toggleSearch}
          />
          <img
            className="navbar-user-icon"
            src={require("../../assets/user-icon.png")}
            alt="user"
          />
          <img
            className="navbar-cart-icon"
            src={require("../../assets/cart-icon.png")}
            alt="cart"
            onClick={toggleCart}
          />
        </div>

        {/* Pop Ups */}

        {hamburgerOpen && <Hamburger toggleHamburger={toggleHamburger} />}

        {searchOpen && (
          <>
            <div className="close-navbar">
              <img
                className="close-icon"
                alt="close"
                src={require("../../assets/close-black-icon.png")}
                onClick={toggleSearch}
              />
              <h3 className="close-navbar-title">Search</h3>
            </div>
            <div className="search-content">
              <Search />
            </div>
          </>
        )}

        {cartOpen && <Cart />}
      </nav>
    </>
  );
};

export default Header;
