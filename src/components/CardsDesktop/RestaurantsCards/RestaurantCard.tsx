import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IRestaurant } from "../../../Interfaces/IRestaurant";

import {
  CardContent,
  CardFrame,
  CardImage,
  CardInfo,
  RestaurantManager,
  RestaurantName,
  Star,
  StarsFrame,
} from "./style";

interface Params {
  size: string;
  page?: string;
  filter?: string;
}

const RestaurantsCards = (restaurantProps: Params) => {
  const data = useSelector((state: any) => state.restaurants.value);
  let filteredData: IRestaurant[] = data;
  const navigate = useNavigate();

  const renderSwitch = () => {
    switch (restaurantProps.filter) {
      case "New":
        filteredData = data.filter(
          (restaurant: IRestaurant) => restaurant.isNewRestaurant === true
        );
        break;
      case "Most Popular":
        filteredData = data.filter(
          (restaurant: IRestaurant) => restaurant.isPopular === true
        );
        break;
      case "Open Now":
        filteredData = data.filter(
          (restaurant: IRestaurant) => restaurant.isOpen === true
        ); // need to check by date exactly
        break;
      default:
        break;
    }
    if (restaurantProps.page === "HomePageDesktop")
      // in home page display 3 cards only
      filteredData = data.slice(0, 3);
  };

  const renderBigCard = (
    <>
      {renderSwitch()}
      {filteredData.map((restaurant: IRestaurant, key: number) => (
        <CardContent
          key={key}
          size={restaurantProps.size}
          onClick={() => navigate(`/Restaurant${restaurant.name}`)}
        >
          <CardImage size={restaurantProps.size} src={restaurant.image} />
          <CardFrame size={restaurantProps.size}>
            <CardInfo>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantManager>{restaurant.chefName}</RestaurantManager>
            </CardInfo>
            <StarsFrame>
              {[...new Array(5)].map((arr, index) => {
                return (
                  <Star
                    key={index}
                    active={index < restaurant.restaurantRating ? true : false}
                  />
                );
              })}
            </StarsFrame>
          </CardFrame>
        </CardContent>
      ))}
    </>
  );

  const renderSmallCard = (
    <>
      {filteredData.slice(0, 3).map((restaurant: IRestaurant, key: number) => (
        <CardContent
          key={key}
          size={restaurantProps.size}
          onClick={() => navigate(`/Restaurant${restaurant.name}`)}
        >
          <CardImage size={restaurantProps.size} src={restaurant.image} />
          <CardFrame size={restaurantProps.size}>
            <RestaurantName size={restaurantProps.size}>
              {restaurant.name}
            </RestaurantName>
          </CardFrame>
        </CardContent>
      ))}
    </>
  );

  return (
    <>{restaurantProps.size === "Big" ? renderBigCard : renderSmallCard}</>
  );
};

export default RestaurantsCards;
