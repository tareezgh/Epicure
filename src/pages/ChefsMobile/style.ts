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

export const ChefsSection = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 25px;

  margin: 37px 0 0 0;
`;
