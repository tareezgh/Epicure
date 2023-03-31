// Do not check please
import { toast } from "react-toastify";
import { ClearBtnFrame, ClearBtnTitle } from "../../buttons";
import {
  Circles,
  DistanceContainer,
  Frame,
  Title,
  SubTitles,
  Sub1,
  Sub2,
  SmallCircle,
  Line,
  BigCircle,
} from "./style";

interface Params {
  page?: string;
}

const Distance = (distanceProps: Params) => {
  return (
    <>
      <DistanceContainer>
        <Title>Distance</Title>

        <Frame>
          <SubTitles>
            <Sub1>My location</Sub1>
            <Sub2>4km</Sub2>
          </SubTitles>
          <Circles>
            <SmallCircle />
            <Line />
            <BigCircle />
          </Circles>
        </Frame>

        {/* if clicked */}
        <ClearBtnFrame onClick={() => {}}>
          <ClearBtnTitle>clear</ClearBtnTitle>
        </ClearBtnFrame>
      </DistanceContainer>
    </>
  );
};

export default Distance;
