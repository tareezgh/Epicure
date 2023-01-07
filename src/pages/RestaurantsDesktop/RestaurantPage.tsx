import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/CardsDesktop/DishCard/DishCard";
import { IRestaurant } from "../../Interfaces/IRestaurant";
import Order from "../../components/OrderDesktop/OrderDesktop";

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
  const dispatch = useDispatch();
  const restaurantsData = useSelector((state: any) => state.restaurants.value);
  const [orderOpen, setOrderOpen] = useState<boolean>(false);
  const [dish, setDish] = useState<string>(" ");

  const [dishesFilter, setDishesFilter] = useState<string>("Breakfast");
  const filters = ["Breakfast", "Launch", "Dinner"];

  const backgroundStyle = {
    opacity: `${orderOpen ? "0.5" : ""}`,
  };

  // BUG
  const toggleOrder = (name: string) => {
    const temp = dish;
    setDish(name);
    setOrderOpen(!orderOpen);
    // if (name !== " " || name === dish) { }
  };

  const handleData = (filter: string) => {
    setDishesFilter(filter);
  };

  const renderData = (
    <>
      {restaurantsData
        .filter(
          (restaurant: IRestaurant) =>
            restaurant.name === restaurantNameByParams.name
        )
        .map((restaurant: IRestaurant, key: number) => (
          <RestaurantInfo key={key} style={backgroundStyle}>
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
                  toggleOrder={toggleOrder}
                />
              </RowSection>
            </DishesSection>
          </RestaurantInfo>
        ))}
    </>
  );

  return (
    <>
      {orderOpen && (
        <>
          <Order dishName={dish} toggleOrder={toggleOrder} />
        </>
      )}
      {renderData}
    </>
  );
};

export default RestaurantPageDesktop;
