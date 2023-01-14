// Do not check please
import { toast } from "react-toastify";
import { ClearBtnFrame, ClearBtnTitle } from "../../buttons";
import { DistanceContainer, Title } from "./style";

interface Params {
  page?: string;
}

const Distance = (distanceProps: Params) => {
  return (
    <>
      <DistanceContainer>
        <Title>Distance</Title>

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
      </DistanceContainer>
    </>
  );
};

export default Distance;
