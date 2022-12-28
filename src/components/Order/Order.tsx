import { useState } from "react";
import { useSelector } from "react-redux";

import { IDish } from "../../Interfaces/IDish";
import { createOrder } from "../../services/fetchData";
import { PrimaryBtnFrame, PrimaryBtnTitle } from "../buttons";

import {
  CheckBoxIcon,
  CheckFrame,
  Content,
  Description,
  DishImage,
  InfoFrame,
  InsideFrame,
  Minus,
  OrderContainer,
  Plus,
  Quantity,
  QuantityFrame,
  RadioFrame,
  RadioIcon,
  RowFrame,
  SubTitle,
  Title,
} from "./style";

interface Params {
  page?: string;
  dishName: string;
}

const Order = (orderProps: Params) => {
  const data = useSelector((state: any) => state.dishes.value);
  const [selectRadioBtn, setSelectRadioBtn] = useState("optionA");

  let [quantity, setQuantity] = useState<number>(1);

  // const handleSelectChange = event => {
  //   const value = event.target.value;
  //   setSelectRadioBtn(value);
  // };

  const clickPlus = () => {
    setQuantity(quantity++);
  };

  const clickMinus = () => {
    setQuantity(quantity--);
  };

  const clickAddToBag = (dish: IDish) => {
    createOrder(dish);
  };

  const renderRadioBtn = (str: string) => (
    <>
      <RowFrame>
        <RadioIcon />
        <Content>{str}</Content>
      </RowFrame>
    </>
  );

  const renderCheckBoxBtn = (str: string) => (
    <>
      <RowFrame>
        <CheckBoxIcon />
        <Content>{str}</Content>
      </RowFrame>
    </>
  );

  const renderData = (
    <>
      {data
        .filter((dish: IDish) => dish.name === orderProps.dishName)
        .map((dish: IDish, key: number) => (
          <OrderContainer key={key} page={orderProps.page}>
            <DishImage src={dish.image} />
            <InfoFrame>
              <Title>{dish.name}</Title>
              <Description>{dish.description}</Description>
            </InfoFrame>

            <RadioFrame>
              <SubTitle>Choose a side</SubTitle>
              {renderRadioBtn("White bread")}
              {renderRadioBtn("Sticky rice")}
            </RadioFrame>

            <CheckFrame>
              <SubTitle>Changes</SubTitle>
              {renderCheckBoxBtn("Without peanuts")}
              {renderCheckBoxBtn("Sticky Less spicy")}
            </CheckFrame>

            <QuantityFrame>
              <SubTitle>Quantity</SubTitle>
              <InsideFrame>
                <Minus active={false} onClick={clickMinus} />
                <Quantity>{quantity}</Quantity>
                <Plus active={true} onClick={clickPlus} />
              </InsideFrame>
            </QuantityFrame>

            <PrimaryBtnFrame onClick={() => clickAddToBag(dish)}>
              <PrimaryBtnTitle>Add to bag</PrimaryBtnTitle>
            </PrimaryBtnFrame>
          </OrderContainer>
        ))}
    </>
  );

  return <>{renderData}</>;
};

export default Order;
