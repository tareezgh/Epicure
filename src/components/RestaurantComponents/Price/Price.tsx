// Do not check please
import { toast } from "react-toastify";
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
        <ClearBtnFrame
          onClick={() =>
            toast.warn("Not Implemented yet!", {
              hideProgressBar: true,
              position: "bottom-center",
            })
          }
        >
          <ClearBtnTitle>clear</ClearBtnTitle>
        </ClearBtnFrame>
      </PriceContainer>
    </>
  );
};

export default Price;
