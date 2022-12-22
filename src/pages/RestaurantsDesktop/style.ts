import styled from "styled-components";

import clockIcon from "../../assets/clock-icon.svg";
import arrowIcon from "../../assets/arrow-down-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const FiltersFrame = styled(FlexContainerRow)`
  width: 525px;
  height: 22px;
  margin: 112px auto 40px auto;
  padding: 0px;
  gap: 40px;
`;

export const Frame = styled(FlexContainerRow)`
  width: 100%;
  height: 60px;
  background: #fafafa;
`;

export const Group = styled(FlexContainerRow)`
  width: 474.5px;
  height: 60px;
  margin: 0 auto 0 auto;
`;

export const InsiderFrame = styled(FlexContainerColumn)`
  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 186px;
  height: 60px;
`;

export const ComponentFrame = styled(FlexContainerRow)`
  justify-content: center;

  padding: 0px;
  gap: 8px;

  width: 142px;
  height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  line-height: 22px;
  letter-spacing: 1.92px;
  margin: 0;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Arrow = styled.img.attrs({
  src: arrowIcon,
})`
  width: 24px;
  height: 24px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const RestaurantsSection = styled(FlexContainerColumn)`
  width: 1185px;
  padding: 0px;
  gap: 40px;

  margin: 40px auto 0 auto;
`;

export const RowSection = styled(FlexContainerRow)`
  flex-wrap: wrap;
  padding: 0px;
  gap: 24px;
`;

export const RestaurantInfo = styled.div`
  width: 1186px;
  margin: 0 auto 0 auto;
  justify-content: center;
  align-items: center;
`;

export const RestaurantImage = styled.img`
  width: 1186px;
  height: 425px;

  margin: 64px auto 32px auto;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

export const RestaurantName = styled.h3`
  width: max-content;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 3.67px;
  margin: 0 auto 0 auto;
`;

export const RestaurantManager = styled.h4`
  width: max-content;
  font-size: 32px;
  line-height: 36px;

  letter-spacing: 1.97px;

  margin: 24px auto 33px auto;
`;

export const Hours = styled(FlexContainerRow)`
  width: max-content;
  align-items: center;
  padding: 0px;
  gap: 8px;

  margin: 0 auto 0 auto;

  height: 20px;
`;

export const ClockIcon = styled.img.attrs({
  src: clockIcon,
})`
  width: 17px;
  height: 18px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const HourStatus = styled.h4`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 1.97px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const FiltersFrame2 = styled(FlexContainerRow)`
  width: 316px;
  height: 29px;
  margin: 48px auto 47px auto;
  padding: 0px;
  gap: 32px;
`;

export const DishesSection = styled(FlexContainerColumn)`
  width: 1184px;
  padding: 0px;
  gap: 32px;
  margin-bottom: 50px;
`;
