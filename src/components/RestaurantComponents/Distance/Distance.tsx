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
        <ClearBtnFrame>
          <ClearBtnTitle>clear</ClearBtnTitle>
        </ClearBtnFrame>
      </DistanceContainer>
    </>
  );
};

export default Distance;
