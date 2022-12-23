import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IRestaurant } from "../../../Interfaces/IRestaurant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  CardContent,
  CardImage,
  CardFrame,
  CardInfo,
  RestaurantName,
  RestaurantManager,
  SlideRow,
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
    if (restaurantProps.page === "HomePageMobile")
      // in home page display 3 cards only
      filteredData = data.slice(0, 3);
  };

  const renderData = (
    <>
      {renderSwitch()}
      {filteredData.map((restaurant: IRestaurant, key: number) => (
        <SwiperSlide key={key}>
          <CardContent
            size={restaurantProps.size}
            onClick={() => navigate(`/Restaurant${restaurant.name}`)}
          >
            <CardImage size={restaurantProps.size} src={restaurant.image} />
            <CardFrame size={restaurantProps.size}>
              <CardInfo>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantManager>{restaurant.chefName}</RestaurantManager>
              </CardInfo>
            </CardFrame>
          </CardContent>
        </SwiperSlide>
      ))}
    </>
  );

  const renderSwiperData = (
    <>
      <Swiper spaceBetween={24} slidesPerView={1.5}>
        <SlideRow type="Restaurants">{renderData}</SlideRow>
      </Swiper>
    </>
  );

  return (
    <>
      {restaurantProps.page === "AllRestaurants"
        ? renderData
        : renderSwiperData}
    </>
  );
};

export default RestaurantsCards;
