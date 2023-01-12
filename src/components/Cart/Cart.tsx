import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetWindowSize from "../../helpers/SetWindowSize";
import DishCard from "./DishCard";
import { setOrders } from "../../redux/Slicers";
import { fetchAllOrdersData } from "../../services/fetchData";
import {
  PrimaryBtnFrame,
  PrimaryBtnTitle,
  SecondaryBtnTitle,
  SecondaryFrame,
} from "../buttons";

import {
  CartContainer,
  CartIcon,
  CartStatus,
  MainFrame,
  SummaryFrame,
  Title,
} from "./style";

import {
  PriceAndIcon,
  PriceFrame,
  CurrencyIcon,
  Price,
  Line,
} from "../Cards/CardsDesktop/DishCard/style";

interface Params {
  page?: string;
}

const Cart = (cartProps: Params) => {
  const windowSize = SetWindowSize();
  const dispatch = useDispatch();
  const ordersData = useSelector((state: any) => state.orders.allOrders);
  const ordersCounter = useSelector((state: any) => state.orders.counter);
  let restaurantsSet = new Set<string>();
  let restaurantsArray = new Array<string>();
  let totalPrice = 0;

  useEffect(() => {
    fetchAllOrdersData().then((res) => dispatch(setOrders(res)));
  }, []);

  const calculateTotalPrice = () => {
    ordersData.map(
      (order: any) => (totalPrice += order.price * order.quantity)
    );
  };

  const prepareSetAndArray = () => {
    ordersData.map((order: any) => restaurantsSet.add(order.restaurant));
    restaurantsArray = Array.from(restaurantsSet);
  };

  const renderEmptyCart = (
    <>
      <CartContainer page={cartProps.page} type={"Empty"}>
        <CartIcon page={cartProps.page} />
        <CartStatus>YOUR BAG IS EMPTY</CartStatus>
        {cartProps.page === "Desktop" ? (
          <>
            <SecondaryFrame style={{ marginTop: "150px" }}>
              <SecondaryBtnTitle>Order history</SecondaryBtnTitle>
            </SecondaryFrame>
          </>
        ) : (
          ""
        )}
      </CartContainer>
    </>
  );

  const renderMobileCart = (
    <>
      <MainFrame>
        <Title>My Order</Title>
      </MainFrame>

      {prepareSetAndArray()}
      {restaurantsArray.map((restaurant) => (
        <>{<DishCard restaurant={restaurant} type={"Mobile"} />}</>
      ))}
      {calculateTotalPrice()}
      <SummaryFrame>
        <Title>total - ₪{totalPrice}</Title>
      </SummaryFrame>

      <PrimaryBtnFrame style={{ marginTop: 0, marginBottom: "24px" }}>
        <PrimaryBtnTitle>Checkout</PrimaryBtnTitle>
      </PrimaryBtnFrame>
    </>
  );

  const renderDesktopCart = (
    <>
      <MainFrame>
        <Title page={cartProps.page}>My Order</Title>
      </MainFrame>

      {prepareSetAndArray()}
      {restaurantsArray.map((restaurant) => (
        <>{<DishCard restaurant={restaurant} type={"Desktop"} />}</>
      ))}
      {calculateTotalPrice()}

      <PriceFrame style={{ order: "0" }}>
        <Line />
        <PriceAndIcon>
          <CurrencyIcon />
          <Price style={{ width: "auto" }}>{totalPrice}</Price>
        </PriceAndIcon>
        <Line second={true} />
      </PriceFrame>

      <PrimaryBtnFrame style={{ marginLeft: 0 }}>
        <PrimaryBtnTitle>Checkout</PrimaryBtnTitle>
      </PrimaryBtnFrame>

      <SecondaryFrame style={{ marginBottom: "24px" }}>
        <SecondaryBtnTitle>Order history</SecondaryBtnTitle>
      </SecondaryFrame>
    </>
  );

  const chooseCartType = (
    <>
      <CartContainer page={cartProps.page}>
        {windowSize < 600 ? renderMobileCart : renderDesktopCart}
      </CartContainer>
    </>
  );

  return <>{ordersCounter >= 1 ? chooseCartType : renderEmptyCart}</>;
};

export default Cart;
