import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { onCheckoutClick } from "../../services/fetchData";

import { LockIcon, PrimaryBtnTitle, PrimaryGrayBtnFrame } from "../buttons";
import DishCard from "../Cart/DishCard";
import { SummaryFrame } from "../Cart/style";
import { PrimaryFrame } from "../SignIn/style";
import MyInput from "./Input";
import { DetailsContainer, InfoFrame, Title } from "./style";

interface Params {
  page?: string;
}

const Details = (detailsProps: Params) => {
  const restaurantsArray = useSelector((state: any) => state.checkout.orders);
  const ordersData = useSelector((state: any) => state.orders.allOrders);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  let totalPrice = 0;

  const args = {
    fullName,
    address,
    phone,
    cardNumber,
    nameOnCard,
    cvv,
    expiryDate,
  };

  const validInputs = () => {
    if (
      fullName &&
      address &&
      phone &&
      cardNumber &&
      nameOnCard &&
      cvv &&
      expiryDate
    )
      onCheckoutClick(args);
    else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
    }

  };

  const buttonStyle = {
    width: "335px",
    background: `${
      fullName &&
      address &&
      phone &&
      cardNumber &&
      nameOnCard &&
      cvv &&
      expiryDate
        ? "#000000"
        : "#979797"
    }`,
  };

  const calculateTotalPrice = () => {
    totalPrice = 0;
    ordersData.map(
      (order: any) => (totalPrice += order.price * order.quantity)
    );
  };

  return (
    <>
      <DetailsContainer page={detailsProps.page}>
        {detailsProps.page === "Desktop" ? <></> : ""}

        <InfoFrame>
          <>
            <Title>delivery details</Title>

            <MyInput
              myConst={fullName}
              myPlaceholder="Full Name"
              myFunc={setFullName}
            ></MyInput>

            <MyInput
              myConst={address}
              myPlaceholder="Address"
              myFunc={setAddress}
            ></MyInput>

            <MyInput
              myConst={phone}
              myPlaceholder="Phone"
              myFunc={setPhone}
            ></MyInput>
          </>
        </InfoFrame>
        <Title style={{ textAlign: "start", margin: "0 0 0 20px" }}>
          payment details
        </Title>

        <InfoFrame style={{ padding: "0" }}>
          <MyInput
            myConst={cardNumber}
            myPlaceholder="Card Number"
            myFunc={setCardNumber}
          ></MyInput>

          <MyInput
            myConst={nameOnCard}
            myPlaceholder="Name On Card"
            myFunc={setNameOnCard}
          ></MyInput>

          <MyInput myConst={cvv} myPlaceholder="CVV" myFunc={setCVV}></MyInput>

          <MyInput
            myConst={expiryDate}
            myPlaceholder="Expiry Date"
            myFunc={setExpiryDate}
          ></MyInput>

          {/* 
          <InputFiled style={{ marginBottom: "0" }}>
            */}
        </InfoFrame>

        <Title style={{ margin: "0" }}>My Order</Title>

        {restaurantsArray.map((restaurant: any, key: number) => (
          <>{<DishCard restaurant={restaurant} type={"Mobile"} key={key} />}</>
        ))}
        {calculateTotalPrice()}
        <SummaryFrame style={{ margin: "0" }}>
          <Title style={{ margin: "0", fontWeight: "400" }}>
            total - ₪{totalPrice}
          </Title>
        </SummaryFrame>

        <PrimaryFrame>
          <PrimaryGrayBtnFrame style={buttonStyle} onClick={validInputs}>
            <LockIcon />
            <PrimaryBtnTitle style={{ marginLeft: "0" }}>
              Complete payment
            </PrimaryBtnTitle>
          </PrimaryGrayBtnFrame>
        </PrimaryFrame>
      </DetailsContainer>
    </>
  );
};

export default Details;
