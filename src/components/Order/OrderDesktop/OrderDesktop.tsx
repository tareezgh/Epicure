import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setOrdersNumber } from "../../../redux/Slicers";

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
  const currentUser = localStorage.getItem("username");
  const dishesData = useSelector((state: any) => state.dishes.allDishes);
  const ordersData = useSelector((state: any) => state.orders.userOrders);
  const ordersNumber = useSelector((state: any) => state.orders.counter);

  const [selectRadioBtn, setSelectRadioBtn] = useState("");
  const [checkedState, setCheckedState] = useState(new Array(2).fill(""));
  const selectCheckBoxBtn: Array<string> = [];
  let [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const orderArgs = JSON.parse(
      localStorage.getItem(orderProps.dishName) || "[]"
    );
    if (orderProps.dishName === orderArgs?.dish?.name) {
      setSelectRadioBtn(orderArgs.selectRadioBtn);
      setCheckedState(orderArgs.selectCheckBoxBtn);
      setQuantity(orderArgs.quantity);
    }
  }, []);

  // ------------ //

  const clickPlus = () => {
    setQuantity(quantity++);
  };

  const clickMinus = () => {
    if (quantity > 0) setQuantity(quantity--);
  };

  // ------------ //

  const clickAddToBag = (dish: IDish) => {
    if (selectRadioBtn !== "" && currentUser) {
      createOrder(
        dish,
        selectRadioBtn,
        checkedState,
        quantity,
        currentUser!
      ).then((res) => {
        orderProps.toggleOrder(" ");
        dispatch(setOrdersNumber(ordersNumber + 1));
      });
    } else {
      const args = { dish, selectRadioBtn, checkedState, quantity };
      localStorage.setItem(orderProps.dishName, JSON.stringify(args));
      if (selectRadioBtn === "")
        toast.error("Should choose a side first!", {
          hideProgressBar: true,
          position: "bottom-center",
        });
      else
        toast.error("Need to sign in first", {
          hideProgressBar: true,
          position: "bottom-center",
        });
    }
  };

  // -----Radio button------- //

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

  const handleRadioOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectRadioBtn(value);
  };

  // ------Checkbox button------ //

  const renderCheckBoxBtn = (str: string, key: number) => (
    <>
      <RowFrame>
        <Icon type="checkbox" value={str} onChange={handleOnChange} />
        <Content>{str}</Content>
      </RowFrame>
    </>
  );

  //BUG
  const handleOnChange = (event: any) => {
    const value = event.target.value;

    if (selectCheckBoxBtn.includes(value)) {
      let index = selectCheckBoxBtn.indexOf(value);
      selectCheckBoxBtn.splice(index, 1);
    } else {
      selectCheckBoxBtn.push(value);
    }
    setCheckedState(selectCheckBoxBtn);
  };

  // ------------ //

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

  // ------------ //

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
                {renderCheckBoxBtn("Without peanuts", 0)}
                {renderCheckBoxBtn("Sticky Less spicy", 1)}
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
