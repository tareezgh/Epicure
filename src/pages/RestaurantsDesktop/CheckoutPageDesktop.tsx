import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckoutInfo } from "./CheckoutStyle";
import Details from "../../components/Details/Details";
import DesktopCart from "../../components/Cart/DesktopCart";

const CheckoutPageDesktop = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const renderFrame = <></>;

  const renderData = (
    <>
      <CheckoutInfo>
        {/* <Details />
        <DesktopCart
          totalPrice={0}
          toggleCart={() => {}}
          toggleCheckout={() => {}}
        /> */}
      </CheckoutInfo>
    </>
  );

  return <>{renderData}</>;
};

export default CheckoutPageDesktop;
