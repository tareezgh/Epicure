import styled from "styled-components";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PriceContainer = styled.div`
  width: 353px;
  height: auto;
  position: absolute;
  margin-top: 60px;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const TitleFrame = styled(FlexContainerColumn)`
  gap: 12px;
  margin-bottom: 22px;
`;

export const Title = styled.h3`
  height: 21px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 1.92px;
  margin: 12px auto 0 auto;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PricesFrame = styled(FlexContainerRow)`
  margin: 0 auto;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Price1 = styled.div`
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: 1.97px;
`;

export const Frame = styled(FlexContainerColumn)`
  width: 309px;
  height: 56px;
  margin: 0 auto 20px auto;

  background: #f9f4ea;
  border-radius: 8px;
`;

export const SubTitles = styled(FlexContainerRow)`
  width: 300px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Sub = styled.h4`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.97px;
`;

export const Sub1 = styled(Sub)`
  margin: 7px 215px 0 14px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Sub2 = styled(Sub)`
  margin: 8px 0 0 0;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Circles = styled(FlexContainerRow)`
  width: 300px;
  margin-left: 14px;
  position: relative;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Line = styled.div`
  width: 230px;
  height: 0px;
  border: 3px solid rgba(151, 151, 151, 0.5);
  border-radius: 2px;
`;

export const BigCircle = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #000000;
`;
