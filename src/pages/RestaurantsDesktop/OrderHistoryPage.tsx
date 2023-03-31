import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {} from "./style";
import {
  ArrowIcon,
  CurrencyIcon,
  DateAndTime,
  Frame,
  HistoryFrame,
  HistoryInfo,
  Price,
  PriceFrame,
  RestaurantName,
  Title,
} from "./OrderHistoryStyle";
import OrderSummary from "../../components/Cart/OrderSummary";

const OrderHistoryPageDesktop = () => {
  const dispatch = useDispatch();
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  const backgroundStyle = {
    opacity: `${summaryOpen ? "0.2" : "1"}`,
  };

  useEffect(() => {
    // fetchRestaurantData(restaurantName).then((res) =>
    //   dispatch(setRestaurant(res))
    // );
    // fetchRestaurantDishesData(restaurantName).then((res) =>
    //   dispatch(setRestaurantDishes(res))
    // );
  }, []);

  const toggleSummary = () => {
    setSummaryOpen(!summaryOpen);
  };

  const renderFrame = (
    <>
      <Frame onClick={toggleSummary}>
        <RestaurantName>Messa</RestaurantName>
        <DateAndTime>29-03-2022, 11:54</DateAndTime>
        <PriceFrame>
          <CurrencyIcon />
          <Price>122</Price>
          <ArrowIcon />
        </PriceFrame>
      </Frame>
    </>
  );

  const renderData = (
    <>
      <HistoryInfo style={backgroundStyle}>
        <Title>Your order history</Title>

        <HistoryFrame>
          {renderFrame}
          {renderFrame}
          {renderFrame}
        </HistoryFrame>
      </HistoryInfo>
    </>
  );

  return (
    <>
      {summaryOpen && (
        <>
          <OrderSummary toggleOrder={toggleSummary} />
        </>
      )}
      {renderData}
    </>
  );
};

export default OrderHistoryPageDesktop;
