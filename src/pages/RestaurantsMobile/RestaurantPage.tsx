// render data by filters not implemented yet

import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/Cards/DishCard/DishCard";
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

const RestaurantPage = () => {
  const restaurantNameByParams = useParams();
  const data = useSelector((state: any) => state.restaurants.value);

  const [dishesFilter, setDishesFilter] = useState<string>("Breakfast");
  const filters = ["Breakfast", "Launch", "Dinner"];

  const handleData = (filter: string) => {
    setDishesFilter(filter);
  };

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
              <RestaurantManager>{restaurant.chef.name}</RestaurantManager>

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

export default RestaurantPage;
