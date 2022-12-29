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

export const RatingContainer = styled.div`
  width: 353px;
  // height: 324px;
  position: absolute;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h3`
  width: 62px;
  height: 21px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 1.92px;
  margin: 12px auto 0 auto;
`;

export const Rows = styled(FlexContainerColumn)`
  width: 251px;
  height: 248px;
  margin: 20px auto 0 auto;
  gap: 12px;
`;

export const RowFrame = styled(FlexContainerRow)`
  padding: 0px;
  gap: 12px;

  margin: 0;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
