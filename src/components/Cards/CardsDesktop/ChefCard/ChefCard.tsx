import { useSelector } from "react-redux";
import { IChef } from "../../../../Interfaces/IChef";
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
  Container,
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
      {filteredData.map((chef: any, key: number) => (
        <CardContent key={key} regular={true}>
          <CardImage src={`${chef.image}`} regular={true} />
          <CardInfo>
            <ChefName>{chef.chefName}</ChefName>
          </CardInfo>
        </CardContent>
      ))}
    </>
  );

  const renderChefOfTheWeek = (
    <>
      <Container>
        <CardsContainer>
          <CardContent>
            <CardImage src={chefOfTheWeek.image} />
            <CardInfo>
              <ChefName>{chefOfTheWeek.chefName}</ChefName>
            </CardInfo>
          </CardContent>
          <ChefsDescription> {chefOfTheWeek.description}</ChefsDescription>
        </CardsContainer>
        <RestaurantsContainer>
          <SubTitle>
            {chefOfTheWeek.chefName?.split(" ")[0]}`s Restaurants
          </SubTitle>
          <CardsFrame>
            <RestaurantsCards size="Small" />
            {/* need to FIX */}
          </CardsFrame>
        </RestaurantsContainer>
      </Container>
    </>
  );

  return <>{chefProps.chefOfTheWeek ? renderChefOfTheWeek : renderData}</>;
};

export default ChefCard;
