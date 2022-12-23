import { PriceContainer } from "./style";

interface Params {
  page?: string;
}

const Price = (priceProps: Params) => {
  return (
    <>
      <PriceContainer></PriceContainer>
    </>
  );
};

export default Price;
