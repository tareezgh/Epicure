import { useSelector } from "react-redux";
import { IChef } from "../../../Interfaces/IChef";

import {
  CardsContainer,
  CardContent,
  CardInfo,
  ChefName,
  ChefsDescription,
} from "./style";

interface Params {
  chefOfTheWeek?: boolean;
  filter?: string;
}

const ChefCard = (chefProps: Params) => {
  const data = useSelector((state: any) => state.chefs.value);
  let filteredData: IChef[] = data;

  const renderSwitch = () => {
    switch (chefProps.filter) {
      case "New":
        filteredData = data.filter((chef: IChef) => chef.isNewChef === true);
        break;
      case "Most Viewed":
        filteredData = data.filter((chef: IChef) => chef.isViewed === true);
        break;
      default:
        break;
    }
  };

  const renderData = (
    <>
      {renderSwitch()}
      {filteredData.map((chef: IChef, key: number) => (
        <CardContent key={key} imgUrl={chef.image}>
          <CardInfo>
            <ChefName>{chef.chefName}</ChefName>
          </CardInfo>
        </CardContent>
      ))}
    </>
  );

  const renderChefOfTheWeek = (
    <>
      {data
        .filter((chef: IChef) => chef.isChefOfTheWeek === true)
        .map((chef: IChef, key: number) => (
          <CardsContainer key={key}>
            <CardContent imgUrl={chef.image}>
              <CardInfo>
                <ChefName>{chef.chefName}</ChefName>
              </CardInfo>
            </CardContent>
            <ChefsDescription> {chef.description}</ChefsDescription>
          </CardsContainer>
        ))}
    </>
  );

  return <>{chefProps.chefOfTheWeek ? renderChefOfTheWeek : renderData}</>;
};

export default ChefCard;
