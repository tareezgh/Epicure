import { useSelector } from "react-redux";
import { IDish } from "../../../Interfaces/IDish";
import spicyIcon from "../../../assets/spicy-icon-big.svg";

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
  SpicyIcon,
} from "./style";

interface Params {
  size: string;
  page?: string;
  filter?: string;
  toggleDish: () => void;
}

const DishesCards = (dishesProps: Params) => {
  const data = useSelector((state: any) => state.dishes.value);
  let filteredData: IDish[] = data;


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
    if (dishesProps.page === "HomePageDesktop")
      // in home page display 3 cards only
      filteredData = data.slice(0, 3);
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
        <CardContent key={key} size={dishesProps.size}>
          <CardImage
            size={dishesProps.size}
            onClick={() => ""}
            src={dish.image}
          />

          <CardFrame size={dishesProps.size}>
            <DishName size={dishesProps.size}>{dish.name}</DishName>
            <DishDescription size={dishesProps.size}>
              {dish.description}
            </DishDescription>

            {dishesProps.page === "HomePageDesktop" && key !== 1 ? (
              <SpicyIcon src={spicyIcon} />
            ) : (
              <>{renderPrice(dish)}</>
            )}
          </CardFrame>
        </CardContent>
      ))}
    </>
  );

  const renderCartCard = <>
  
  </>;

  return <>{dishesProps.page === "Cart" ? renderCartCard : renderCard}</>;
};

export default DishesCards;
