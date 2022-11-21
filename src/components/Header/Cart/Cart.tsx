import React from "react";

import { CartContainer, CartStatus, CartIcon } from "./style";

const Cart = () => {
  return (
    <>
      <CartContainer>
        <CartIcon />
        <CartStatus>YOUR BAG IS EMPTY</CartStatus>
      </CartContainer>
    </>
  );
};

export default Cart;
