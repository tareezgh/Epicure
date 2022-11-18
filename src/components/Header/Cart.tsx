import React from "react";

import "./Cart.css"
const Cart = () => {
  return (
    <>
      <div className="cart-content">
        <img
          className="cart-icon"
          alt="cart"
          src={require("../../assets/cart-icon.png")}
        />
        <h2 className="cart-description">YOUR BAG IS EMPTY</h2>
      </div>
    </>
  );
};

export default Cart;
