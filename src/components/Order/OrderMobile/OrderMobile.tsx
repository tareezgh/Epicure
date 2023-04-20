import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setOrdersNumber } from "../../../redux/Slicers";

import { IDish } from "../../../Interfaces/IDish";
import { createOrder } from "../../../services/fetchData";
import { PrimaryBtnFrame, PrimaryBtnTitle } from "../../buttons";

import {
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
} from "./style";

interface Params {
  dishName: string;
  toggleOrder: (str: string) => void;
}

const Order = (orderProps: Params) => {
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("username");
  const dishesData = useSelector((state: any) => state.dishes.allDishes);
  const ordersNumber = useSelector((state: any) => state.orders.counter);

  const [selectRadioBtn, setSelectRadioBtn] = useState("");
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(""));
  const selectCheckBoxBtn: string[] = [];
  let [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const orderArgs = JSON.parse(localStorage.getItem(orderProps.dishName) || "[]");
    if (orderProps.dishName === orderArgs?.dish?.name) {
      setSelectRadioBtn(orderArgs.selectRadioBtn);
      setCheckedState(orderArgs.selectCheckBoxBtn);
      setQuantity(orderArgs.quantity);
    }
  }, []);

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

  const renderCheckBoxBtn = (str: string) => (
    <>
      <RowFrame>
        <Icon
          type="checkbox"
          value={str}
          onChange={handleCheckBoxOptionChange}
        />
        <Content>{str}</Content>
      </RowFrame>
    </>
  );

  const handleCheckBoxOptionChange = (event: any) => {
    const value = event.target.value;
    setCheckedCheckbox(!checkedCheckbox);
    if (selectCheckBoxBtn.includes(value)) {
      let index = selectCheckBoxBtn.indexOf(value);
      selectCheckBoxBtn.splice(index, 1);
    } else {
      selectCheckBoxBtn.push(value);
    }
    setCheckedState(selectCheckBoxBtn);
  };
  // ------------ //

  const renderData = (
    <>
      {dishesData
        .filter((dish: IDish) => dish.name === orderProps.dishName)
        .map((dish: IDish, key: number) => (
          <OrderContainer key={key}>
            <DishImage src={dish.image} />
            <InfoFrame>
              <Title>{dish.name}</Title>
              <Description>{dish.description}</Description>
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
