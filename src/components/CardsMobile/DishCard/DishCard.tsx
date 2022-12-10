import { useSelector } from "react-redux";
import { IDish } from "../../../Interfaces/IDish";
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
} from "./style";

interface Params {
  size: string;
  page?: string;
  filter?: string;
}

const DishesCards = (dishesProps: Params) => {
  const data = useSelector((state: any) => state.dishes.value);

  const renderData = (
    <>
      {data.map((dish: IDish, key: number) => (
        <SwiperSlide key={key}>
          <CardContent size={dishesProps.size}>
            <CardImage size={dishesProps.size} src={dish.image}/>

            <CardFrame size={dishesProps.size}>
              <CardInfo>
                <DishName>{dish.name}</DishName>
                <DishDescription size={dishesProps.size}>
                  {dish.description}
                </DishDescription>
                <>{dishesProps.page === "Restaurant" ? "" : <SpicyIcon />}</>
              </CardInfo>

              <PriceFrame size={dishesProps.size}>
                <CurrencyIcon />
                <Price>{dish.price}</Price>
                <>{dishesProps.page === "Restaurant" ? <RowSpace /> : ""}</>
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

  return (
    <>
      {dishesProps.page === "Restaurant" ? renderData : renderSwiperData}
    </>
  );
};

export default DishesCards;
