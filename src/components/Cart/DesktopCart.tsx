import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  SecondaryFrame,
  SecondaryBtnTitle,
  PrimaryBtnFrame,
  PrimaryBtnTitle,
  PrimaryGrayBtnFrame,
  LockIcon,
} from "../buttons";
import { CommentInput, DishesContainer, MainFrame, Title } from "./style";

import {
  PriceAndIcon,
  PriceFrame,
  CurrencyIcon,
  Price,
  Line,
} from "../Cards/CardsDesktop/DishCard/style";
import DishCard from "./DishCard";
import { PrimaryFrame } from "../SignIn/style";

interface Params {
  checkout?: boolean;
  toggleCart: () => void;
  toggleCheckout: () => void;
}

const DesktopCart = (cartProps: Params) => {
  const navigate = useNavigate();
  const totalPrice = useSelector((state: any) => state.checkout.totalPrice);
  const restaurantsArray = useSelector(
    (state: any) => state.checkout.restaurants
  );

  const navigateToHistory = () => {
    cartProps.toggleCart();
    navigate(`/OrderHistory`);
  };

  const navigateToCheckout = () => {
    cartProps.toggleCart();
    navigate(`/Checkout`);
  };

  const buttonStyle = {
    width: "215px",
    background: "#979797",
    marginTop: "35px",
  };

  const renderButtons = (
    <>
      <PrimaryBtnFrame style={{ marginLeft: 0 }} onClick={navigateToCheckout}>
        <PrimaryBtnTitle>
          Checkout {totalPrice > 0 ? "- " + totalPrice : ""}
        </PrimaryBtnTitle>
      </PrimaryBtnFrame>

      <SecondaryFrame
        style={{ marginBottom: "24px" }}
        onClick={navigateToHistory}
      >
        <SecondaryBtnTitle>Order history</SecondaryBtnTitle>
      </SecondaryFrame>
    </>
  );

  const renderPayButton = (
    <>
      <PrimaryFrame>
        <PrimaryGrayBtnFrame style={buttonStyle}>
          <LockIcon />
          <PrimaryBtnTitle style={{ marginLeft: "0" }}>
            Pay {totalPrice > 0 ? "- " + totalPrice : ""}
          </PrimaryBtnTitle>
        </PrimaryGrayBtnFrame>
      </PrimaryFrame>
    </>
  );

  const renderData = (
    <>
      <MainFrame>
        {cartProps.checkout ? (
          <Title page={"Desktop"}>Your Order</Title>
        ) : (
          <Title page={"Desktop"}>My Order</Title>
        )}
      </MainFrame>

      <DishesContainer>
        {restaurantsArray.map((restaurant: any, key: number) => (
          <>{<DishCard restaurant={restaurant} type={"Desktop"} key={key} />}</>
        ))}
      </DishesContainer>

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

      {cartProps.checkout ? <>{renderPayButton}</> : <>{renderButtons}</>}
    </>
  );

  return <>{renderData}</>;
};

export default DesktopCart;
