import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
import { IRestaurant } from "../../../Interfaces/IRestaurant";

interface Params {
  Size: string;
  Page?: string;
}

const RestaurantsCards = (props: Params) => {
  const data = useSelector((state: any) => state.restaurants.value);
  const navigate = useNavigate();
  const renderData = (
    <>
      {data.map((restaurant: IRestaurant, key: number) => (
        <SwiperSlide key={key}>
          <CardContent
            size={props.Size}
            onClick={() => navigate(`/Restaurant${restaurant.name}`)}
          >
            <CardImage size={props.Size} />
            <CardFrame size={props.Size}>
              <CardInfo>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantManager>{restaurant.chef.name}</RestaurantManager>
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
  return <>{props.Page === "AllRestaurants" ? renderData : renderSwiperData}</>;
};

export default RestaurantsCards;
