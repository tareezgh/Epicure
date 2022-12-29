import { ClearBtnFrame, ClearBtnTitle } from "../../buttons";
import { PriceContainer, Title } from "./style";

interface Params {
  page?: string;
}

const Price = (priceProps: Params) => {
  return (
    <>
      <PriceContainer>
        <Title>Price Range Selected</Title>

        {/* if clicked */}
        <ClearBtnFrame>
          <ClearBtnTitle>clear</ClearBtnTitle>
        </ClearBtnFrame>
      </PriceContainer>
    </>
  );
};

export default Price;
