import { Console } from "console";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import DishesCards from "../../components/Cards/DishCard/DishCard";
import { IRestaurant } from "../../Interfaces/IRestaurant";
import {
  RestaurantImage,
  RestaurantName,
  RestaurantManager,
  InfoSection,
  ClockIcon,
  Hours,
  HourStatus,
  Filter,
  FiltersFrame,
  DishesSection,
} from "./style";

const RestaurantPage = () => {
  const restaurantName = useParams();
  const data = useSelector((state: any) => state.restaurants.value);
  let restaurantData: IRestaurant;

  useEffect(() => {
    data.map((restaurant: any) => {
      if (restaurant.name === restaurantName.name) restaurantData = restaurant;
    });
    console.log(restaurantData);
  }, []);

  return (
    <>
      <RestaurantImage />
      <InfoSection>
        <RestaurantName>Claro</RestaurantName>
        <RestaurantManager>Ran Shmueli</RestaurantManager>

        <Hours>
          <ClockIcon />
          <HourStatus>Open Now</HourStatus>
        </Hours>
      </InfoSection>

      <FiltersFrame>
        <Filter active={true}>Breakfast</Filter>
        <Filter active={false}>Lanch</Filter>
        <Filter active={false}>Dinner</Filter>
      </FiltersFrame>


      <DishesSection>
        <DishesCards Size={"Default"} Page={"Restaurant"}/>
      </DishesSection>

      {/* {data.map((restaurant: any) => {
        if (restaurant.name === restaurantName.name) {
        
        }
      })} */}

     
    </>
  );
};

export default RestaurantPage;
