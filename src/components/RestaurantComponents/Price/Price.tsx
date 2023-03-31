// Do not check please
import { toast } from "react-toastify";
import { ClearBtnFrame, ClearBtnTitle } from "../../buttons";
import {
  BigCircle,
  Circles,
  Frame,
  TitleFrame,
  Line,
  PriceContainer,
  Sub1,
  Sub2,
  SubTitles,
  Title,
  PricesFrame,
  Price1,
} from "./style";

interface Params {
  page?: string;
}

const Price = (priceProps: Params) => {
  return (
    <>
      <PriceContainer>
        <TitleFrame>
          <Title>Price Range Selected</Title>
          <PricesFrame>
            <Price1>₪12</Price1>-<Price1> ₪357</Price1>
          </PricesFrame>
        </TitleFrame>

        <Frame>
          <SubTitles>
            <Sub1>₪12</Sub1>
            <Sub2>₪357</Sub2>
          </SubTitles>
          <Circles>
            <BigCircle />
            <Line />
            <BigCircle />
          </Circles>
        </Frame>

        {/* if clicked */}
        <ClearBtnFrame onClick={() => {}}>
          <ClearBtnTitle>clear</ClearBtnTitle>
        </ClearBtnFrame>
      </PriceContainer>
    </>
  );
};

export default Price;
