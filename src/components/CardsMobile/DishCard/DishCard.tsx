import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
  let filteredData: IDish[] = data;
  const navigate = useNavigate();

  const renderSwitch = () => {
    switch (dishesProps.filter) {
      case "Breakfast":
        filteredData = data.filter((dish: IDish) => dish.type === "Breakfast");
        break;
      case "Launch":
        filteredData = data.filter((dish: IDish) => dish.type === "Launch");
        break;
      case "Dinner":
        filteredData = data.filter((dish: IDish) => dish.type === "Dinner");
        break;
      default:
        break;
    }
    if (dishesProps.page === "HomePageMobile")
      // in home page display 3 cards only
      filteredData = data.slice(0, 3);
  };

  const renderData = (
    <>
      {renderSwitch()}
      {filteredData.map((dish: IDish, key: number) => (
        <SwiperSlide key={key}>
          <CardContent size={dishesProps.size}>
            <CardImage size={dishesProps.size} src={dish.image} />

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
    <>{dishesProps.page === "Restaurant" ? renderData : renderSwiperData}</>
  );
};

export default DishesCards;
