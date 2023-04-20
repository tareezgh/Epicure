import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  SecondaryFrame,
  SecondaryBtnTitle,
  PrimaryBtnFrame,
  PrimaryBtnTitle,
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

interface Params {
  totalPrice: number;
  toggleCart: () => void;
  toggleCheckout: () => void;
}

const DesktopCart = (cartProps: Params) => {
  const navigate = useNavigate();
  const restaurantsArray = useSelector((state: any) => state.checkout.orders);

  const navigateToHistory = () => {
    cartProps.toggleCart();
    navigate(`/OrderHistory`);
  };

  const navigateToCheckout = () => {
    cartProps.toggleCart();
    navigate(`/Checkout`);
  };

  const renderData = (
    <>
      <MainFrame>
        <Title page={"Desktop"}>My Order</Title>
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
          <Price style={{ width: "auto" }}>{cartProps.totalPrice}</Price>
        </PriceAndIcon>
        <Line second={true} />
      </PriceFrame>

      <Title style={{ fontSize: "18px" }}>Add A Comment</Title>

      <CommentInput placeholder="Special requests, allergies, dietary restrictions, etc." />

      <PrimaryBtnFrame style={{ marginLeft: 0 }} onClick={navigateToCheckout}>
        <PrimaryBtnTitle>
          Checkout {cartProps.totalPrice > 0 ? "- " + cartProps.totalPrice : ""}
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

  return <>{renderData}</>;
};

export default DesktopCart;
