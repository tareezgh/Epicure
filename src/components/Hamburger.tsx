import React from "react";
import Footer from "./Footer";

import "./style.css";

const Hamburger = () => {
  return (
    <>
      {/* <div className="hamburger-nav">
        <img className="hamburger-close-icon" alt="close" src={require('../assets/close-black-icon.png')}/>
      </div> */}
      <div className="hamburger-content">
        <a className="hamburger-link" href="#">
          Restaurants
        </a>
        <a className="hamburger-link" href="#">
          Chefs
        </a>
        <div className="space-line" />
        <Footer />
      </div>
    </>
  );
};

export default Hamburger;
