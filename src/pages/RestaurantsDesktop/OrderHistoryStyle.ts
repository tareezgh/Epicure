import styled from "styled-components";

import currencyIcon from "../../assets/currency-icon.svg";
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

export const HistoryInfo = styled.div`
  margin: 111px auto 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  width: auto;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export const HistoryFrame = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 30px;
  width: 859px;
  height: 605px;
  overflow-y: scroll;
  margin: 65px auto 0 auto;
`;

export const Frame = styled(FlexContainerRow)`
  padding: 0px;
  gap: 220px;
  height: 35px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantName = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: justify;
  letter-spacing: 1.25px;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DateAndTime = styled.h4`
  font-size: 24px;
  line-height: 35px;
  text-align: justify;
  letter-spacing: 1.25px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const PriceFrame = styled(FlexContainerRow)`
  padding: 0px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const CurrencyIcon = styled.img.attrs({
  src: currencyIcon,
})`
  width: 10px;
  height: 45px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Price = styled.div`
  width: 43px;
  height: 35px;
  font-size: 24px;
  line-height: 35px;
  text-align: justify;
  letter-spacing: 1.25px;
  margin-right: 21px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ArrowIcon = styled.img.attrs({
  src: arrowIcon,
})`
  width: 24px;
  height: 35px;
  transform: rotate(-90deg);
  flex: none;
  order: 2;
  flex-grow: 0;
`;
