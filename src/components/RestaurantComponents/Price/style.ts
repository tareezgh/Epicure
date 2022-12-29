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
  position: absolute;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h3`
  height: 21px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 1.92px;
  margin: 12px auto 0 auto;
`;
