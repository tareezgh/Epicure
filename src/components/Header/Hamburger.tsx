import React from "react";
import Footer from "../Footer/Footer";

import "./Hamburger.css";

type Props = {
  toggleHamburger: () => void;
};

const Hamburger = (props: Props) => {
  return (
    <>
      <div className="close-navbar">
        <img
          className="close-icon"
          alt="close"
          src={require("../../assets/close-black-icon.png")}
          onClick={() => props.toggleHamburger()}
        />
      </div>

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
