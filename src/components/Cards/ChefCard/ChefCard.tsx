import React from "react";
import { useSelector } from "react-redux";
import { IChef } from "../../../Interfaces/IChef";

import { CardContent, CardInfo, ChefName } from "./style";

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
      <CardContent imgUrl={"../../../assets/chefs/Yossi_Shitrit.png"}>
        <CardInfo>
          <ChefName>Yossi Shitrit</ChefName>
        </CardInfo>
      </CardContent>
    </>
  );

  return <>{props.chefOfTheWeek ? renderOneChef : renderData}</>;
};

export default ChefCard;
