import React from "react";

import {
  CardContent,
  CardFrame,
  CardImage,
  CardInfo,
  CurrencyIcon,
  DishDescription,
  DishName,
  Price,
  PriceFrame,
  SpicyIcon,
} from "../DishCard/style";

interface Params {
  Size: string;
}

const DishCard = (props: Params) => {
  return (
    <>
      <CardContent size={props.Size}>
        <CardImage size={props.Size} />

        <CardFrame size={props.Size}>
          <CardInfo>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription size={props.Size}>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic
              Chili Brown Coconut
            </DishDescription>
            <SpicyIcon />
          </CardInfo>

          <PriceFrame size={props.Size}>
            <CurrencyIcon />
            <Price>88</Price>
          </PriceFrame>
        </CardFrame>
      </CardContent>

    </>
  );
};

export default DishCard;
