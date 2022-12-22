import { useSelector } from "react-redux";
import { IChef } from "../../../Interfaces/IChef";
import RestaurantsCards from "../RestaurantsCards/RestaurantCard";

import {
  CardsContainer,
  CardContent,
  CardInfo,
  ChefName,
  ChefsDescription,
  CardImage,
  CardsFrame,
  RestaurantsContainer,
  SubTitle,
} from "./style";

interface Params {
  chefOfTheWeek?: boolean;
  filter?: string;
}

const ChefCard = (chefProps: Params) => {
  const data = useSelector((state: any) => state.chefs.value);
  let filteredData: IChef[] = data;
  let i = 0;

  const renderSwitch = () => {
    switch (chefProps.filter) {
      case "New":
        filteredData = data.filter((chef: IChef) => chef.new === true);
        break;
      case "Most Viewed":
        filteredData = data.filter((chef: IChef) => chef.viewed === true);
        break;
      default:
        break;
    }
  };

  const renderData = (
    <>
      {renderSwitch()}

      {filteredData.slice(i, i + 5).map((chef: IChef, key: number) => (
        <CardContent key={key} regular={true}>
          <CardImage src={chef.image} regular={true} />
          <CardInfo>
            <ChefName>{chef.name}</ChefName>
          </CardInfo>
        </CardContent>
      ))}
    </>
  );

  const renderChefOfTheWeek = (
    <>
      {data
        .filter((chef: IChef) => chef.chefOfTheWeek === true)
        .map((chef: IChef, key: number) => (
          <>
            <CardsContainer key={key}>
              <CardContent>
                <CardImage src={chef.image} />
                <CardInfo>
                  <ChefName>{chef.name}</ChefName>
                </CardInfo>
              </CardContent>
              <ChefsDescription> {chef.description}</ChefsDescription>
            </CardsContainer>
            <RestaurantsContainer>
              <SubTitle>{chef.name.split(" ")[0]}`s Restaurants</SubTitle>
              <CardsFrame>
                <RestaurantsCards size="Small" /> {/* Chefs's restaurants */}
              </CardsFrame>
            </RestaurantsContainer>
          </>
        ))}
    </>
  );

  return <>{chefProps.chefOfTheWeek ? renderChefOfTheWeek : renderData}</>;
};

export default ChefCard;
