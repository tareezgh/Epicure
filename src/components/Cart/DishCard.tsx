import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrdersNumber } from "../../redux/Slicers";
import { deleteOrderByID } from "../../services/fetchData";
import { Plus } from "../Order/OrderDesktop/style";
import {
  CardContent,
  CardFrame,
  CardImage,
  ChangesFrame,
  CurrencyIcon,
  DeleteIcon,
  DishName,
  DishNameDesktop,
  MainFrame,
  Minus,
  NameFrame,
  OperationFrame,
  Price,
  PriceDesktop,
  PriceFrame,
  Quantity,
  InfoFrame,
  InfoFrameDesktop,
  QuantityDesktop,
  QuantityFrame,
  RestaurantName,
} from "./style";

interface Params {
  restaurant: string;
  type: string;
}

const DishCard = (cardProps: Params) => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state: any) => state.orders.allOrders);
  const ordersNumber = useSelector((state: any) => state.orders.counter);
  const [quantityOpen, setQuantityOpen] = useState<boolean>(false);
  const cardContentStyle = {
    width: `${quantityOpen ? "386px" : "342px"}`,
  };
  const cardFrameStyle = {
    width: `${quantityOpen ? "290px" : "246px"}`,
  };

  const toggleQuantity = () => {
    setQuantityOpen(!quantityOpen);
  };

  const clickedDelete = (orderId: string, dishName: string) => {
    deleteOrderByID(orderId, dishName).then((res) =>
      dispatch(setOrdersNumber(ordersNumber - 1))
    );
  };

  const renderQuantityFrame = (order: any) => (
    <>
      <QuantityFrame>
        <OperationFrame>
          <Minus />
        </OperationFrame>
        <Quantity
          onClick={toggleQuantity}
          style={{ color: "#DE9200", fontSize: "18.1191px" }}
        >
          {order.quantity}
        </Quantity>
        <OperationFrame>
          <Plus
            style={{
              width: "13px",
              height: "13px",
              padding: "4px",
            }}
          />
        </OperationFrame>
        <DeleteIcon onClick={() => clickedDelete(order._id, order.name)} />
      </QuantityFrame>
    </>
  );

  const renderMobileCart = (
    <>
      <MainFrame style={{ marginTop: "-8px" }}>
        <RestaurantName>{cardProps.restaurant}</RestaurantName>
      </MainFrame>

      {ordersData
        .filter((order: any) => order.restaurant === cardProps.restaurant)
        .map((order: any, key: number) => (
          <CardContent key={key}>
            <CardImage src={order.image} />

            <CardFrame>
              <InfoFrame>
                <Quantity>{order.quantity}x</Quantity>
                <DishName>{order.name}</DishName>
              </InfoFrame>

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

  const renderDesktopCart = (
    <>
      <MainFrame style={{ marginTop: "-3px" }}>
        <RestaurantName>{cardProps.restaurant}</RestaurantName>
      </MainFrame>

      {ordersData
        .filter((order: any) => order.restaurant === cardProps.restaurant)
        .map((order: any, key: number) => (
          <CardContent key={key} style={cardContentStyle}>
            <CardImage src={order.image} />

            <CardFrame style={cardFrameStyle}>
              <InfoFrameDesktop>
                {quantityOpen ? (
                  <>{renderQuantityFrame(order)}</>
                ) : (
                  <>
                    <QuantityDesktop onClick={toggleQuantity}>
                      {order.quantity}
                    </QuantityDesktop>
                  </>
                )}

                <NameFrame>
                  <DishNameDesktop>{order.name}</DishNameDesktop>
                  <PriceFrame
                    style={{ justifyContent: "flex-start", order: "1" }}
                  >
                    <PriceDesktop>₪{order.price}</PriceDesktop>
                  </PriceFrame>
                </NameFrame>
              </InfoFrameDesktop>

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

  return (
    <>{cardProps.type === "Mobile" ? renderMobileCart : renderDesktopCart}</>
  );
};

export default DishCard;
