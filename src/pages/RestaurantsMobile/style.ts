import styled from "styled-components";

import clockIcon from "../../assets/clock-icon.svg";

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

export const PageTitle = styled.h2`
  height: 22px;
  margin: 60px 0 0 19.89px;
  line-height: 22px;
  letter-spacing: 1.92px;
  text-transform: uppercase;
`;

export const FiltersFrame = styled(FlexContainerRow)`
  width: 342px;
  height: 27px;
  margin: 24px 0 0 19.89px;
  padding: 0px;
  gap: 20px;
`;

export const RestaurantInfo = styled.div``;

export const RestaurantsSection = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 25px;

  margin: 37px 0 0 0;
`;

// *********//

export const RestaurantImage = styled.img`
  width: 100%;
  height: 272px;
  margin-top: 46px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

export const InfoSection = styled.section`
  margin: 24px 0 0 20px;
`;

export const RestaurantName = styled.h3`
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 2.67px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantManager = styled.h4`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.82px;

  margin: 24px 0 0 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Hours = styled(FlexContainerRow)`
  align-items: center;
  padding: 0px;
  gap: 8px;

  margin: 16px 0 32px 0;

  height: 20px;
  left: 20px;
  top: 415px;
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
  line-height: 20px;
  letter-spacing: 1.97px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DishesSection = styled(FlexContainerColumn)`
  margin: 24px 0 0 0;
  align-items: center;
  padding: 0px;
  gap: 22px;
`;
