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
import { fetchOrdersDataForUser } from "../../services/fetchData";
import { setUserOrders } from "../../redux/Slicers";

const OrderHistoryPageDesktop = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.currentUser.email);
  const userOrders = useSelector((state: any) => state.orders.userOrders);
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  const backgroundStyle = {
    opacity: `${summaryOpen ? "0.2" : "1"}`,
  };

  useEffect(() => {
    userOrders ? (
      <> </>
    ) : (
      fetchOrdersDataForUser(currentUser).then((res) =>
        dispatch(setUserOrders(res))
      )
    );
  }, []);

  const toggleSummary = () => {
    setSummaryOpen(!summaryOpen);
  };

  const splitDate = (dateAndTime: string) => {
    const text = dateAndTime.split("T");
    let date = text[0].split("-");
    const finalDate = date[2] + "-" + date[1] + "-" + date[0];
    let time = text[1].split(":");
    const finalTime = time[0] + ":" + time[1];

    return (
      <>
        <DateAndTime>{finalDate + " " + finalTime}</DateAndTime>
      </>
    );
  };

  const renderFrames = (
    <>
      {userOrders.map((order: any, key: number) => (
        <Frame onClick={toggleSummary} key={key}>
          <RestaurantName>{order.restaurant}</RestaurantName>
          <>{splitDate(order.createdAt)}</>

          <PriceFrame>
            <CurrencyIcon />
            <Price>{order.price}</Price>
            <ArrowIcon />
          </PriceFrame>
        </Frame>
      ))}
    </>
  );

  return (
    <>
      {summaryOpen && (
        <>
          <OrderSummary toggleOrder={toggleSummary} />
        </>
      )}

      <HistoryInfo style={backgroundStyle}>
        <Title>Your order history</Title>
        <HistoryFrame>{renderFrames}</HistoryFrame>
      </HistoryInfo>
    </>
  );
};

export default OrderHistoryPageDesktop;
