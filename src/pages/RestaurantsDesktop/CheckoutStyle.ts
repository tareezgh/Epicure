import styled from "styled-components";

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

export const CheckoutInfo = styled(FlexContainerRow)`
  margin: 111px auto 0 auto;
  justify-content: center;
  align-items: center;
`;



export const CheckoutFrame = styled(FlexContainerColumn)`
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



