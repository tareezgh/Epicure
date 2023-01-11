import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setOrdersNumber } from "../../../helpers/Slicers";

import { IDish } from "../../../Interfaces/IDish";
import { createOrder } from "../../../services/fetchData";
import { PrimaryBtnFrame, PrimaryBtnTitle } from "../../buttons";

import {
  AllInfoContainer,
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
  Icon,
  RowFrame,
  SubTitle,
  Title,
  CloseIcon,
  CloseNavbar,
} from "./style";
import {
  PriceAndIcon,
  PriceFrame,
  CurrencyIcon,
  Price,
  Line,
  SignatureIcon,
} from "../../Cards/CardsDesktop/DishCard/style";

interface Params {
  dishName: string;
  toggleOrder: (str: string) => void;
}

const Order = (orderProps: Params) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.currentUser.email);
  const dishesData = useSelector((state: any) => state.dishes.allDishes);
  const ordersNumber = useSelector((state: any) => state.orders.counter);
  const [selectRadioBtn, setSelectRadioBtn] = useState("");
  const selectCheckBoxBtn: string[] = [];
  let [quantity, setQuantity] = useState<number>(1);

  const handleRadioOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectRadioBtn(value);
  };

  const renderIconCardData = (signature: string) => (
    <>
      <SignatureIcon
        src={require(`../../../assets/${signature}-icon-small.svg`)}
      />
    </>
  );

  const renderPrice = (dish: IDish) => {
    return (
      <>
        <PriceFrame>
          <Line />
          <PriceAndIcon>
            <CurrencyIcon />
            <Price>{dish.price}</Price>
          </PriceAndIcon>
          <Line second={true} />
        </PriceFrame>
      </>
    );
  };

  const handleCheckBoxOptionChange = (event: any) => {
    const value = event.target.value;
    if (selectCheckBoxBtn.includes(value)) {
      let index = selectCheckBoxBtn.indexOf(value);
      selectCheckBoxBtn.splice(index, 1);
    } else {
      selectCheckBoxBtn.push(value);
    }
    console.log(selectCheckBoxBtn);
  };

  const clickPlus = () => {
    setQuantity(quantity++);
  };

  const clickMinus = () => {
    if (quantity > 0) setQuantity(quantity--);
  };

  const clickAddToBag = (dish: IDish) => {
    if (selectRadioBtn !== "") {
      createOrder(
        dish,
        selectRadioBtn,
        selectCheckBoxBtn,
        quantity,
        currentUser
      ).then(() => {
        orderProps.toggleOrder(" ");
        dispatch(setOrdersNumber(ordersNumber + 1));
      });
    } else {
      toast.error("Should choose a side first!", {
        hideProgressBar: true,
        position: "bottom-center",
      });
    }
  };

  const renderRadioBtn = (str: string) => (
    <>
      <RowFrame>
        <Icon
          type="radio"
          value={str}
          checked={selectRadioBtn === str}
          onChange={handleRadioOptionChange}
        />
        <Content>{str}</Content>
      </RowFrame>
    </>
  );

  const renderCheckBoxBtn = (str: string) => (
    <>
      <RowFrame>
        <Icon
          type="checkbox"
          value={str}
          onChange={handleCheckBoxOptionChange}
          checked={selectCheckBoxBtn.includes(str)}
        />
        <Content>{str}</Content>
      </RowFrame>
    </>
  );

  const renderData = (
    <>
      {dishesData
        .filter((dish: IDish) => dish.name === orderProps.dishName)
        .map((dish: IDish, key: number) => (
          <OrderContainer key={key}>
            <CloseNavbar>
              <CloseIcon onClick={() => orderProps.toggleOrder(" ")} />
            </CloseNavbar>
            <DishImage src={dish.image} />
            <AllInfoContainer>
              <InfoFrame>
                <Title>{dish.name}</Title>
                <Description>{dish.description}</Description>
                <>{renderIconCardData(dish.signature)}</>

                <>{renderPrice(dish)}</>
              </InfoFrame>

              <RadioFrame>
                <SubTitle>Choose a side*</SubTitle>
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
                  <Minus
                    style={{ opacity: `${quantity <= 1 ? "0.3" : "0.8"}` }}
                    onClick={clickMinus}
                  />
                  <Quantity>{quantity}</Quantity>
                  <Plus onClick={clickPlus} />
                </InsideFrame>
              </QuantityFrame>
            </AllInfoContainer>
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
