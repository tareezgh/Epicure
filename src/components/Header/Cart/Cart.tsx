import { CartContainer, CartStatus, CartIcon } from "./style";

interface Params {
  page?: string;
}

const Cart = (cartProps: Params) => {
  return (
    <>
      <CartContainer page={cartProps.page}>
        <CartIcon />
        <CartStatus>YOUR BAG IS EMPTY</CartStatus>
      </CartContainer>
    </>
  );
};

export default Cart;
