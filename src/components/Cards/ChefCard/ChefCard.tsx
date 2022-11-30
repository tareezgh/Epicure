import React from "react";
import { useSelector } from "react-redux";
import { IChef } from "../../../Interfaces/IChef";

import { CardContent, CardInfo, ChefName } from "./style";

import chefImg from "../../../assets/chefs/Yossi_Shitrit.png";

interface Params {
  chefOfTheWeek?: boolean;
}

const ChefCard = (props: Params) => {
  const data = useSelector((state: any) => state.chefs.value);

  const renderData = (
    <>
      {data.map((chef: IChef, key: number) => (
        <CardContent key={key} imgUrl={chef.img}>
          <CardInfo>
            <ChefName>{chef.name}</ChefName>
          </CardInfo>
        </CardContent>
      ))}
    </>
  );

  const renderOneChef = (
    <>
      {/* {data.every((chef: IChef) => chef.chefOfTheWeek === true)} */}
      <CardContent imgUrl={chefImg}>
        <CardInfo>
          <ChefName>Yossi Shitrit</ChefName>
        </CardInfo>
      </CardContent>
    </>
  );

  return <>{props.chefOfTheWeek ? renderOneChef : renderData}</>;
};

export default ChefCard;
