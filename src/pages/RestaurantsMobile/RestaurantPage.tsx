import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setRestaurant, setRestaurantDishes } from "../../redux/Slicers";
import {
  fetchRestaurantData,
  fetchRestaurantDishesData,
} from "../../services/fetchData";
import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/Cards/CardsMobile/DishCard/DishCard";

import Order from "../../components/Order/OrderMobile/OrderMobile";
import {
  CloseIcon,
  CloseNavbar,
} from "../../components/Header/HeaderMobile/style";

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

const RestaurantPageMobile = () => {
  const dispatch = useDispatch();
  const restaurantNameByParams = useParams();
  const restaurantName = restaurantNameByParams.name!;
  const restaurant = useSelector((state: any) => state.restaurants.restaurant);
  const [orderOpen, setOrderOpen] = useState<boolean>(false);
  const [dish, setDish] = useState<string>(" ");

  const [dishesFilter, setDishesFilter] = useState<string>("Breakfast");
  const filters = ["Breakfast", "Launch", "Dinner"];

  const toggleOrder = (name: string) => {
    setDish(name);
    setOrderOpen(!orderOpen);
  };

  const handleData = (filter: string) => {
    setDishesFilter(filter);
  };

  useEffect(() => {
    fetchRestaurantData(restaurantName).then((res) =>
      dispatch(setRestaurant(res))
    );
    fetchRestaurantDishesData(restaurantName).then((res) =>
      dispatch(setRestaurantDishes(res))
    );
  }, [restaurantNameByParams]);

  const renderData = (
    <>
      <RestaurantInfo>
        <RestaurantImage src={restaurant.image} />

        <InfoSection>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantManager>{restaurant.chefName}</RestaurantManager>

          <Hours>
            <ClockIcon />
            <HourStatus>Open Now</HourStatus>
            {/* need to FIX */}
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
            toggleOrder={toggleOrder}
          />
        </DishesSection>
      </RestaurantInfo>
    </>
  );

  return (
    <>
      {orderOpen && (
        <>
          <CloseNavbar>
            <CloseIcon onClick={() => toggleOrder(" ")} />
          </CloseNavbar>
          <Order dishName={dish} toggleOrder={toggleOrder} />
        </>
      )}
      {renderData}
    </>
  );
};

export default RestaurantPageMobile;
