import { useSelector } from "react-redux";
import { IDish } from "../../../../Interfaces/IDish";
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
  SignatureIcon,
  SlideRow,
  RowSpace,
} from "./style";

interface Params {
  size: string;
  page?: string;
  filter?: string;
  toggleOrder: (name: string) => void;
}

const DishesCards = (dishesProps: Params) => {
  const allDishesData = useSelector((state: any) => state.dishes.allDishes);
  const dishesData = useSelector((state: any) => state.restaurants.dishes);
  let filteredData: IDish[] = dishesData;

  const renderSwitch = () => {
    switch (dishesProps.filter) {
      case "Breakfast":
        filteredData = dishesData.filter(
          (dish: IDish) => dish.type === "Breakfast"
        );
        break;
      case "Lunch":
        filteredData = dishesData.filter(
          (dish: IDish) => dish.type === "Lunch"
        );
        break;
      case "Dinner":
        filteredData = dishesData.filter(
          (dish: IDish) => dish.type === "Dinner"
        );
        break;
      default:
        break;
    }
    if (dishesProps.page === "HomePageMobile")
      // in home page display 3 cards only
      filteredData = allDishesData.slice(0, 3);
  };

  const renderIconCardData = (signature: string) => (
    <>
      <SignatureIcon
        src={require(`../../../../assets/${signature}-icon-small.svg`)}
      />
    </>
  );

  const renderData = (
    <>
      {renderSwitch()}
      {filteredData.map((dish: IDish, key: number) => (
        <SwiperSlide key={key}>
          <CardContent
            size={dishesProps.size}
            onClick={() => dishesProps.toggleOrder(dish.name)}
          >
            <CardImage size={dishesProps.size} src={dish.image} />

            <CardFrame size={dishesProps.size}>
              <CardInfo>
                <DishName>{dish.name}</DishName>
                <DishDescription size={dishesProps.size}>
                  {dish.description}
                </DishDescription>
                <>
                  {dishesProps.page === "Restaurant"
                    ? ""
                    : renderIconCardData(dish.signature)}
                </>
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
