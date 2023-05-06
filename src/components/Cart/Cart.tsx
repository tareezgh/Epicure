import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetWindowSize from "../../helpers/SetWindowSize";
import {
  setCheckoutRestaurants,
  setCheckoutTotalPrice,
  setUserOrders,
} from "../../redux/Slicers";
import { fetchOrdersDataForUser } from "../../services/fetchData";
import { CartContainer } from "./style";

import EmptyCart from "./EmptyCart";
import MobileCart from "./MobileCart";
import DesktopCart from "./DesktopCart";

interface Params {
  page?: string;
  checkout?: boolean;
  toggleCart: () => void;
  toggleCheckout: () => void;
}

const Cart = (cartProps: Params) => {
  const windowSize = SetWindowSize();
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("username");
  const ordersData = useSelector((state: any) => state.orders.userOrders);
  const ordersCounter = useSelector((state: any) => state.orders.counter);
  let restaurantsSet = new Set<string>();
  let restaurantsArray = new Array<string>();
  let totalPrice = 0;

  useEffect(() => {
    fetchOrdersDataForUser(currentUser!).then((res) =>
      dispatch(setUserOrders(res))
    );
  }, [currentUser, dispatch, ordersCounter]);

  const calculateTotalPrice = () => {
    totalPrice = 0;
    ordersData.map(
      (order: any) => (totalPrice += order.price * order.quantity)
    );
    dispatch(setCheckoutTotalPrice(totalPrice));
  };

  const prepareSetAndArray = () => {
    ordersData.map((order: any) => restaurantsSet.add(order.restaurant));
    restaurantsArray = Array.from(restaurantsSet);
    dispatch(setCheckoutRestaurants(restaurantsArray));
  };

  const chooseCartType = (
    <>
      {prepareSetAndArray()}
      {calculateTotalPrice()}
      <CartContainer page={cartProps.page} checkout={cartProps.checkout}>
        {windowSize < 600 ? (
          <MobileCart
            toggleCart={cartProps.toggleCart}
            toggleCheckout={cartProps.toggleCheckout}
          />
        ) : (
          <DesktopCart
            checkout={cartProps.checkout}
            toggleCart={cartProps.toggleCart}
            toggleCheckout={cartProps.toggleCheckout}
          />
        )}
      </CartContainer>
    </>
  );

  return (
    <>
      {ordersCounter >= 1 ? (
        chooseCartType
      ) : (
        <EmptyCart page={cartProps.page} toggleCart={cartProps.toggleCart} />
      )}
    </>
  );
};

export default Cart;
