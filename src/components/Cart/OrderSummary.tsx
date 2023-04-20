import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import DishCard from "./DishCard";


import {
  PrimaryBtnFrame,
  PrimaryBtnTitle,
  SecondaryBtnTitle,
  SecondaryFrame,
} from "../buttons";

import {
  PriceAndIcon,
  PriceFrame,
  CurrencyIcon,
  Price,
  Line,
} from "../Cards/CardsDesktop/DishCard/style";
import {
  OrderSummaryContainer,
  MainFrame,
  Title,
  DishesContainer,
  CommentInput,
} from "./style";
import { CloseNavbar } from "../Order/OrderDesktop/style";
import { CloseIcon } from "../SignIn/style";

interface Params {
  toggleOrder: () => void;
}

const OrderSummary = (orderProps: Params) => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state: any) => state.orders.userOrders);
  const ordersCounter = useSelector((state: any) => state.orders.counter);
  let restaurantsSet = new Set<string>();
  let restaurantsArray = new Array<string>();
  let totalPrice = 0;

  useEffect(() => {

  }, []);

  const calculateTotalPrice = () => {
    totalPrice = 0;
    ordersData.map(
      (order: any) => (totalPrice += order.price * order.quantity)
    );
  };

  const prepareSetAndArray = () => {
    ordersData.map((order: any) => restaurantsSet.add(order.restaurant));
    restaurantsArray = Array.from(restaurantsSet);
  };

  const renderDesktopCart = (
    <>
      <OrderSummaryContainer>
        <CloseNavbar>
          <CloseIcon onClick={orderProps.toggleOrder} />
        </CloseNavbar>
        <>
          <MainFrame>
            <Title>Order summary</Title>
          </MainFrame>

          {prepareSetAndArray()}
          <DishesContainer>
            {restaurantsArray.map((restaurant, key: number) => (
              <>
                {
                  <DishCard
                    restaurant={restaurant}
                    type={"Desktop"}
                    key={key}
                  />
                }
              </>
            ))}
          </DishesContainer>
          {calculateTotalPrice()}

          <PriceFrame style={{ order: "0" }}>
            <Line />
            <PriceAndIcon>
              <CurrencyIcon />
              <Price style={{ width: "auto" }}>{totalPrice}</Price>
            </PriceAndIcon>
            <Line second={true} />
          </PriceFrame>

          <Title style={{ fontSize: "18px" }}>Add A Comment</Title>

          <CommentInput placeholder="Special requests, allergies, dietary restrictions, etc." />

          <PrimaryBtnFrame style={{ marginLeft: 0 }}>
            <PrimaryBtnTitle>Order again</PrimaryBtnTitle>
          </PrimaryBtnFrame>

          <SecondaryFrame style={{ marginBottom: "24px" }} onClick={() => {}}>
            <SecondaryBtnTitle>Order history</SecondaryBtnTitle>
          </SecondaryFrame>
        </>
      </OrderSummaryContainer>
    </>
  );

  return <>{renderDesktopCart}</>;
};

export default OrderSummary;
