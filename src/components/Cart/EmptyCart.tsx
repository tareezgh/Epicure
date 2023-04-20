import { useNavigate } from "react-router";
import { SecondaryFrame, SecondaryBtnTitle } from "../buttons";
import { CartContainer, CartIcon, CartStatus } from "./style";

interface Params {
  page?: string;
  toggleCart: () => void;
}

const EmptyCart = (cartProps: Params) => {
  const navigate = useNavigate();

  const navigateToHistory = () => {
    cartProps.toggleCart();
    navigate(`/OrderHistory`);
  };

  const renderData = (
    <>
      <CartContainer page={cartProps.page} type={"Empty"}>
        <CartIcon page={cartProps.page} />
        <CartStatus>YOUR BAG IS EMPTY</CartStatus>
        {cartProps.page === "Desktop" ? (
          <>
            <SecondaryFrame
              style={{ marginTop: "150px" }}
              onClick={navigateToHistory}
            >
              <SecondaryBtnTitle>Order history</SecondaryBtnTitle>
            </SecondaryFrame>
          </>
        ) : (
          ""
        )}
      </CartContainer>
    </>
  );

  return <>{renderData}</>;
};

export default EmptyCart;
