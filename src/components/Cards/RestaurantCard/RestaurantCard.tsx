import React from "react";


import {
  CardContent,
  CardImage,
  CardFrame,
  CardInfo,
  RestaurantName,
  RestaurantManager,
} from "./style";

interface Params {
  Size: string;
}

const RestaurantCard = (props: Params) => {
  return (
    <>
      <CardContent size={props.Size}>
        <CardImage size={props.Size} />

        <CardFrame size={props.Size}>
          <CardInfo>
            <RestaurantName>Claro</RestaurantName>
            <RestaurantManager>Ran Shmueli</RestaurantManager>
          </CardInfo>
        </CardFrame>
      </CardContent>

    </>
  );
};

export default RestaurantCard;
