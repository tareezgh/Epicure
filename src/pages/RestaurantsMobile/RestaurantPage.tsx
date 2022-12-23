import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/CardsMobile/DishCard/DishCard";
import { IRestaurant } from "../../Interfaces/IRestaurant";
import {
  RestaurantInfo,
  RestaurantImage,
  RestaurantName,
  RestaurantManager,
  InfoSection,
  ClockIcon,
  Hours,
  HourStatus,
  FiltersFrame,
  DishesSection,
} from "./style";
import axios from "axios";

const RestaurantPageMobile = () => {
  const restaurantNameByParams = useParams();
  const url = "http://localhost:3001/api";
  const data = useSelector((state: any) => state.restaurants.value);
  // const [restaurant, setRestaurant] = useState<IRestaurant>();

  const [dishesFilter, setDishesFilter] = useState<string>("Breakfast");
  const filters = ["Breakfast", "Launch", "Dinner"];

  const handleData = (filter: string) => {
    setDishesFilter(filter);
  };

  const fetchRestaurantData = async () => {
    return await axios
      .get(`${url}/restaurants/getRestaurant`, {
        params: {
          name: restaurantNameByParams.name,
        },
      })
      .then((response) => console.log("data " + response.data.name));
  };

  useEffect(() => {
    fetchRestaurantData(); // Not found
  }, []);

  const renderData = (
    <>
      {data
        .filter(
          (restaurant: IRestaurant) =>
            restaurant.name === restaurantNameByParams.name
        )
        .map((restaurant: IRestaurant, key: number) => (
          <RestaurantInfo key={key}>
            <RestaurantImage src={restaurant.image} />

            <InfoSection>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantManager>{restaurant.chefName}</RestaurantManager>

              <Hours>
                <ClockIcon />
                <HourStatus>Open Now</HourStatus>
              </Hours>
            </InfoSection>

            <FiltersFrame>
              <FilterFunction myFilters={filters} handleData={handleData} />
            </FiltersFrame>

            <DishesSection>
              <DishesCards
                size={"Default"}
                page={"Restaurant"}
                filter={dishesFilter}
              />
            </DishesSection>
          </RestaurantInfo>
        ))}
    </>
  );

  return <>{renderData}</>;
};

export default RestaurantPageMobile;
