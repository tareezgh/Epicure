import { useSelector } from "react-redux";
import { IChef } from "../../../../Interfaces/IChef";
import { ChefsTitle } from "../../../../pages/HomePageMobile/style";
import RestaurantsCards from "../RestaurantsCards/RestaurantCard";

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
  const chefData = useSelector((state: any) => state.chefs.allChefs);
  const chefOfTheWeek = useSelector((state: any) => state.chefs.chefOfTheWeek);
  let filteredData: IChef[] = chefData;

  const renderSwitch = () => {
    switch (chefProps.filter) {
      case "New":
        filteredData = chefData.filter(
          (chef: IChef) => chef.isNewChef === true
        );
        break;
      case "Most Viewed":
        filteredData = chefData.filter((chef: IChef) => chef.isViewed === true);
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
      {chefOfTheWeek.map((chef: any, key: number) => (
        <CardsContainer>
          <CardContent imgUrl={chef.image}>
            <CardInfo>
              <ChefName>{chef.chefName}</ChefName>
            </CardInfo>
          </CardContent>
          <ChefsDescription> {chef.description}</ChefsDescription>
          <ChefsTitle>Chef of the week:</ChefsTitle>
          <RestaurantsCards
            size="Small"
            page="HomePageMobile"
            chefsRestaurants={chef.restaurants}
            isChefOfTheWeek={true}
          />
        </CardsContainer>
      ))}
    </>
  );

  return <>{chefProps.chefOfTheWeek ? renderChefOfTheWeek : renderData}</>;
};

export default ChefCard;
