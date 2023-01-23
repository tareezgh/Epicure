import { useSelector } from "react-redux";
import { IDish } from "../../../../Interfaces/IDish";

import {
  CardContent,
  CardFrame,
  CardImage,
  CurrencyIcon,
  DishDescription,
  DishName,
  Line,
  Price,
  PriceFrame,
  PriceAndIcon,
  SignatureIcon,
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

  const renderIconCardData = (signature: string) => (
    <>
      <SignatureIcon
        src={require(`../../../../assets/${signature}-icon-big.svg`)}
      />
    </>
  );

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
    if (dishesProps.page === "HomePageDesktop")
      // in home page display 3 cards only
      filteredData = allDishesData.slice(0, 3);
  };

  const renderPrice = (dish: IDish) => {
    return (
      <>
        <PriceFrame size={dishesProps.size}>
          <Line size={dishesProps.size} />
          <PriceAndIcon>
            <CurrencyIcon size={dishesProps.size} />
            <Price size={dishesProps.size}>{dish.price}</Price>
          </PriceAndIcon>
          <Line size={dishesProps.size} second={true} />
        </PriceFrame>
      </>
    );
  };

  const renderCard = (
    <>
      {renderSwitch()}
      {filteredData.map((dish: IDish, key: number) => (
        <CardContent
          key={key}
          size={dishesProps.size}
          onClick={() => dishesProps.toggleOrder(dish.name)}
        >
          <CardImage size={dishesProps.size} src={dish.image} />

          <CardFrame size={dishesProps.size}>
            <DishName size={dishesProps.size}>{dish.name}</DishName>
            <DishDescription size={dishesProps.size}>
              {dish.description}
            </DishDescription>

            {dishesProps.page === "HomePageDesktop" && key !== 1 ? (
              renderIconCardData(dish.signature)
            ) : (
              <>{renderPrice(dish)}</>
            )}
          </CardFrame>
        </CardContent>
      ))}
    </>
  );

  return <>{renderCard}</>;
};

export default DishesCards;
