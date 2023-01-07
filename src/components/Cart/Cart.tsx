import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders, setOrdersNumber } from "../../helpers/Slicers";
import { fetchAllOrdersData } from "../../services/fetchData";
import { PrimaryBtnFrame, PrimaryBtnTitle } from "../buttons";

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
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.orders.value);

  let restaurantsSet = new Set<string>();
  let totalPrice = 0; // data.map((d: any) => (totalPrice = d.price * d.quantity));

  useEffect(() => {
    // dispatch(setOrdersNumber(data.length));
    data.map((order: any) => restaurantsSet.add(order.restaurant));
    console.log(restaurantsSet);
  }, []);

  const renderEmptyCart = (
    <>
      <CartIcon />
      <CartStatus>YOUR BAG IS EMPTY</CartStatus>
    </>
  );

  const renderOrderDishes = (restaurant: any) => {
    return (
      <>
        <Frame style={{ marginTop: "-8px" }}>
          <RestaurantName>{restaurant}</RestaurantName>
        </Frame>

        {data
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

  const renderCartOrders = (
    <>
      <Frame>
        <Title>My Order</Title>
      </Frame>

      {renderOrderDishes("Claro")}
      {renderOrderDishes("Kab kem")}

      <SummaryFrame>
        <Title>total - ₪{totalPrice}</Title>
      </SummaryFrame>

      <PrimaryBtnFrame style={{ marginTop: 0, marginBottom: "24px" }}>
        <PrimaryBtnTitle>Checkout</PrimaryBtnTitle>
      </PrimaryBtnFrame>

      {/* {(totalPrice += order.price)} */}
    </>
  );

  return (
    <>
      <CartContainer page={cartProps.page}>
        {data ? renderCartOrders : renderEmptyCart}
      </CartContainer>
    </>
  );
};

export default Cart;
