import { useSelector } from "react-redux";
import SetWindowSize from "../../helpers/SetWindowSize";
import {
  PrimaryBtnFrame,
  PrimaryBtnTitle,
  SecondaryBtnTitle,
  SecondaryFrame,
} from "../buttons";

import {
  CardContent,
  CardFrame,
  CardImage,
  CartContainer,
  CartIcon,
  CartStatus,
  ChangesFrame,
  CurrencyIcon,
  DishName,
  Frame,
  Price,
  PriceFrame,
  Quantity,
  QuantityAndNameFrame,
  RestaurantName,
  SummaryFrame,
  Title,
} from "./style";

interface Params {
  page?: string;
}

const Cart = (cartProps: Params) => {
  const windowSize = SetWindowSize();
  const ordersData = useSelector((state: any) => state.orders.allOrders);
  const ordersCounter = useSelector((state: any) => state.orders.counter);
  let restaurantsSet = new Set<string>();
  let restaurantsArray = new Array<string>();
  let totalPrice = 0;

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

  const renderOrderDishes = (restaurant: any) => {
    return (
      <>
        <Frame style={{ marginTop: "-8px" }}>
          <RestaurantName>{restaurant}</RestaurantName>
        </Frame>

        {ordersData
          .filter((order: any) => order.restaurant === restaurant)
          .map((order: any, key: number) => (
            <CardContent key={key}>
              <CardImage src={order.image} />

              <CardFrame>
                <QuantityAndNameFrame>
                  <Quantity>{order.quantity}x</Quantity>
                  <DishName>{order.name}</DishName>
                </QuantityAndNameFrame>

                <ChangesFrame>
                  {order.side} | {order.changes}
                </ChangesFrame>

                <PriceFrame>
                  <CurrencyIcon />
                  <Price>{order.price * order.quantity}</Price>
                </PriceFrame>
              </CardFrame>
            </CardContent>
          ))}
      </>
    );
  };

  const renderMobileCart = (
    <>
      <Frame>
        <Title>My Order</Title>
      </Frame>

      {prepareSetAndArray()}
      {restaurantsArray
        .reverse()
        .map((restaurant) => renderOrderDishes(restaurant))}
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
      <Frame>
        <Title page={cartProps.page}>My Order</Title>
      </Frame>

      <PrimaryBtnFrame style={{ marginLeft: 0 }}>
        <PrimaryBtnTitle>Checkout</PrimaryBtnTitle>
      </PrimaryBtnFrame>

      <SecondaryFrame>
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
