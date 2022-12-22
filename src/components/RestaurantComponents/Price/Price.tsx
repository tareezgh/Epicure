import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  PriceContainer,
} from "./style";

interface Params {
  page?: string;
}

const Price = (priceProps: Params) => {
  // const restaurantsData = useSelector((state: any) => state.restaurants.value);
  // const dishesData = useSelector((state: any) => state.dishes.value);
  // const [searchResult, setSearchResult] = useState("");
  // const navigate = useNavigate();





  return (
    <>
     <PriceContainer>

     </PriceContainer>
    </>
  );
};

export default Price;
