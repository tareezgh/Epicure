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
  Container,
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
      {data
        .filter((chef: IChef) => chef.isChefOfTheWeek === true)
        .map((chef: IChef, key: number) => (
          <>
            <Container key={key}>
              <CardsContainer>
                <CardContent>
                  <CardImage src={chef.image} />
                  <CardInfo>
                    <ChefName>{chef.chefName}</ChefName>
                  </CardInfo>
                </CardContent>
                <ChefsDescription> {chef.description}</ChefsDescription>
              </CardsContainer>
              <RestaurantsContainer>
                <SubTitle>{chef.chefName.split(" ")[0]}`s Restaurants</SubTitle>
                <CardsFrame>
                  <RestaurantsCards size="Small" /> {/* Chefs's restaurants */}
                </CardsFrame>
              </RestaurantsContainer>
            </Container>
          </>
        ))}
    </>
  );

  return <>{chefProps.chefOfTheWeek ? renderChefOfTheWeek : renderData}</>;
};

export default ChefCard;
