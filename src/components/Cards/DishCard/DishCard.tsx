import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  CardContent,
  CardFrame,
  CardImage,
  CardInfo,
  CurrencyIcon,
  DishDescription,
  DishName,
  Price,
  PriceFrame,
  SpicyIcon,
  SlideRow,
} from "../DishCard/style";
import { IDish } from "../../../Interfaces/IDish";

interface Params {
  Size: string;
  Page?: string;
}

const DishesCards = (props: Params) => {
  const data = useSelector((state: any) => state.dishes.value);

  const renderData = (
    <>
      {data.map((dish: IDish, key: number) => (
        <SwiperSlide key={key}>
          <CardContent size={props.Size}>
            <CardImage size={props.Size} />

            <CardFrame size={props.Size}>
              <CardInfo>
                <DishName>{dish.name}</DishName>
                <DishDescription size={props.Size}>
                  {dish.description}
                </DishDescription>
                <SpicyIcon />
              </CardInfo>

              <PriceFrame size={props.Size}>
                <CurrencyIcon />
                <Price>{dish.price}</Price>
              </PriceFrame>
            </CardFrame>
          </CardContent>
        </SwiperSlide>
      ))}
    </>
  );

  const renderSwiperData = (
    <>
      <Swiper spaceBetween={24} slidesPerView={1.5}>
        <SlideRow type="Dish">{renderData}</SlideRow>
      </Swiper>
    </>
  );

  return <>{props.Page === "Restaurant" ? renderData : renderSwiperData}</>;
};

export default DishesCards;
