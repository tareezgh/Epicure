import { useSelector } from "react-redux";
import { IDish } from "../../../Interfaces/IDish";
import DishesCards from "../../CardsDesktop/DishCard/DishCard";
import {
  CartContainer,
  CartStatus,
  CartIcon,
  CardContent,
  CardImage,
  CardFrame,
  DishDescription,
  DishName,
  Quantity,
  QuantityAndNameFrame,
  ChangesFrame,
  PriceFrame,
  CurrencyIcon,
  Price,
} from "./style";

interface Params {
  page?: string;
}

const Cart = (cartProps: Params) => {
  const data = useSelector((state: any) => state.dishes.value); // order

  const renderEmptyCart = (
    <>
      <CartIcon />
      <CartStatus>YOUR BAG IS EMPTY</CartStatus>
    </>
  );

  const renderCard = (
    <>
      {data.map((dish: IDish, key: number) => (
        <CardContent key={key}>
          <CardImage src={dish.image} />

          <CardFrame>
            <QuantityAndNameFrame>
              <Quantity>1x</Quantity>
              <DishName>{dish.name}</DishName>
            </QuantityAndNameFrame>

            <ChangesFrame>White bread | Less spicy</ChangesFrame>

            <PriceFrame>
              <CurrencyIcon />
              <Price>{dish.price}</Price>
            </PriceFrame>
          
          </CardFrame>
        </CardContent>
      ))}
    </>
  );

  return (
    <>
      <CartContainer page={cartProps.page}>{renderCard}</CartContainer>
    </>
  );
};

export default Cart;
