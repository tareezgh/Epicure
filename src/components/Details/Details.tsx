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
  page: string;
}

const Details = (detailsProps: Params) => {
  const restaurantsArray = useSelector(
    (state: any) => state.checkout.restaurants
  );
  const totalPrice = useSelector((state: any) => state.checkout.totalPrice);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

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

  const renderOrderSummary = (
    <>
      <Title style={{ margin: "0" }}>My Order</Title>

      {restaurantsArray.map((restaurant: any, key: number) => (
        <>{<DishCard restaurant={restaurant} type={"Mobile"} key={key} />}</>
      ))}

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
    </>
  );

  return (
    <>
      <DetailsContainer page={detailsProps.page}>
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
        <Title style={{ textAlign: "center", margin: "0 0 0 20px" }}>
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
        </InfoFrame>

        {detailsProps.page === "Mobile" ? <>{renderOrderSummary}</> : ""}
      </DetailsContainer>
    </>
  );
};

export default Details;
