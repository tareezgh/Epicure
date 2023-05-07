import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { PrimaryBtnFrame, PrimaryBtnTitle } from "../buttons";
import { MainFrame, SummaryFrame, Title } from "./style";
import DishCard from "./DishCard";

interface Params {
  toggleCart: () => void;
  toggleCheckout: () => void;
}

const MobileCart = (cartProps: Params) => {
  const totalPrice = useSelector((state: any) => state.checkout.totalPrice);
  const restaurantsArray = useSelector(
    (state: any) => state.checkout.restaurants
  );

  const navigateToCheckout = () => {
    cartProps.toggleCart();
    cartProps.toggleCheckout();
  };

  const renderData = (
    <>
      <MainFrame>
        <Title>My Order</Title>
      </MainFrame>

      {restaurantsArray.map((restaurant: any, key: number) => (
        <>{<DishCard restaurant={restaurant} type={"Mobile"} key={key} />}</>
      ))}

      <SummaryFrame>
        <Title>total - ₪{totalPrice}</Title>
      </SummaryFrame>

      <PrimaryBtnFrame
        style={{ marginTop: 0, marginBottom: "24px" }}
        onClick={navigateToCheckout}
      >
        <PrimaryBtnTitle>Checkout</PrimaryBtnTitle>
      </PrimaryBtnFrame>
    </>
  );

  return <>{renderData}</>;
};

export default MobileCart;
