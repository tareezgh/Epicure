import { useEffect } from "react";

import { CheckoutInfo } from "./CheckoutStyle";
import Details from "../../components/Details/Details";
import Cart from "../../components/Cart/Cart";

const CheckoutPageDesktop = () => {
  useEffect(() => {}, []);

  const renderData = (
    <>
      <CheckoutInfo>
        <Details page="Desktop" />
        <Cart
          page="Desktop"
          checkout={true}
          toggleCart={() => {}}
          toggleCheckout={() => {}}
        />
      </CheckoutInfo>
    </>
  );

  return <>{renderData}</>;
};

export default CheckoutPageDesktop;
