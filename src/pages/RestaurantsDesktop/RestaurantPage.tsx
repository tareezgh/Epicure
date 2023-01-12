import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchRestaurantData,
  fetchRestaurantDishesData,
} from "../../services/fetchData";
import { setRestaurant, setRestaurantDishes } from "../../redux/Slicers";
import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/Cards/CardsDesktop/DishCard/DishCard";

import Order from "../../components/Order/OrderDesktop/OrderDesktop";

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
  const dispatch = useDispatch();
  const restaurantNameByParams = useParams();
  const restaurantName = restaurantNameByParams.name!;
  const restaurant = useSelector((state: any) => state.restaurants.restaurant);
  const [orderOpen, setOrderOpen] = useState<boolean>(false);
  const [dish, setDish] = useState<string>(" ");

  const [dishesFilter, setDishesFilter] = useState<string>("Breakfast");
  const filters = ["Breakfast", "Launch", "Dinner"];

  const backgroundStyle = {
    opacity: `${orderOpen ? "0.5" : ""}`,
  };

  // BUG
  const toggleOrder = (name: string) => {
    setDish(name);
    setOrderOpen(!orderOpen);
    // if (name !== " " || name === dish) { }
  };

  useEffect(() => {
    fetchRestaurantData(restaurantName).then((res) =>
      dispatch(setRestaurant(res))
    );
    fetchRestaurantDishesData(restaurantName).then((res) =>
      dispatch(setRestaurantDishes(res))
    );
  }, []);

  const handleData = (filter: string) => {
    setDishesFilter(filter);
  };

  const renderData = (
    <>
      <RestaurantInfo style={backgroundStyle}>
        <RestaurantImage src={restaurant.image} />

        <RestaurantName>{restaurant.name}</RestaurantName>
        <RestaurantManager>{restaurant.chefName}</RestaurantManager>

        <Hours>
          <ClockIcon />
          <HourStatus>Open Now</HourStatus>
          {/* need to FIX */}
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
