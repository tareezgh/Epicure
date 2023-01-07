import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import FilterFunction from "../../components/Filters/FilterFunction";
import DishesCards from "../../components/CardsMobile/DishCard/DishCard";
import { IRestaurant } from "../../Interfaces/IRestaurant";
import Order from "../../components/OrderMobile/OrderMobile";
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

// const restaurant = useSelector((state: any) => state.restaurants.restaurant);
// const [myRestaurant, setMyRestaurant] = useState<any>();

const RestaurantPageMobile = () => {
  const restaurantNameByParams = useParams();
  const dispatch = useDispatch();
  const restaurantsData = useSelector((state: any) => state.restaurants.value);

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

  // useEffect(() => {
  // fetchRestaurantData("Claro").then((res) => dispatch(setRestaurant(res)));
  // console.log(restaurant);
  // setMyRestaurant(data);
  // }, []);

  const renderData = (
    <>
      {restaurantsData
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
                toggleOrder={toggleOrder}
              />
            </DishesSection>
          </RestaurantInfo>
        ))}
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
