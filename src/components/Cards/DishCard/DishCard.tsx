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
  RowSpace,
} from "../DishCard/style";
import { IDish } from "../../../Interfaces/IDish";

interface Params {
  Size: string;
  Page?: string;
}

const DishesCards = (props: Params) => {
  const data = useSelector((state: any) => state.dishes.value);

  // Dublicates *******
  const renderDataDefault = (
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
              </CardInfo>

              <PriceFrame size={props.Size}>
                <CurrencyIcon />
                <Price>{dish.price}</Price>
                <RowSpace />
              </PriceFrame>
            </CardFrame>
          </CardContent>
        </SwiperSlide>
      ))}
    </>
  );

  const renderDataSmall = (
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
        <SlideRow type="Dish">{renderDataSmall}</SlideRow>
      </Swiper>
    </>
  );

  return (
    <>{props.Page === "Restaurant" ? renderDataDefault : renderSwiperData}</>
  );
};

export default DishesCards;
