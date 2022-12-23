import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/CardsDesktop/DishCard/DishCard";
import { IRestaurant } from "../../Interfaces/IRestaurant";
import {
  RestaurantInfo,
  RestaurantImage,
  RestaurantName,
  RestaurantManager,
  ClockIcon,
  Hours,
  HourStatus,
  FiltersFrame2,
  DishesSection,
  RowSection,
} from "./style";

const RestaurantPageDesktop = () => {
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

            <RestaurantName>{restaurant.name}</RestaurantName>
            <RestaurantManager>{restaurant.chefName}</RestaurantManager>

            <Hours>
              <ClockIcon />
              <HourStatus>Open Now</HourStatus>
            </Hours>

            <FiltersFrame2>
              <FilterFunction
                myFilters={filters}
                handleData={handleData}
                page={"Desktop"}
              />
            </FiltersFrame2>

            <DishesSection>
              <RowSection>
                <DishesCards
                  size={"Small"}
                  page={"Restaurant"}
                  filter={dishesFilter}
                />
              </RowSection>
            </DishesSection>
          </RestaurantInfo>
        ))}
    </>
  );

  return <>{renderData}</>;
};

export default RestaurantPageDesktop;
