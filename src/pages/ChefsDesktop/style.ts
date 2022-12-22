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

export const FiltersFrame = styled(FlexContainerRow)`
  width: 248px;
  height: 22px;
  gap: 40px;
  margin: 112px auto 40px auto;
  padding: 0px;
`;

export const ChefsSection = styled(FlexContainerColumn)`
  width: 1182px;
  padding: 0px;
  gap: 40px;
  margin: 0 auto 80px auto;
`;

export const RowSection = styled(FlexContainerRow)`
  width: 1182px;
  flex-wrap: wrap;
  padding: 0px;
  gap: 24px;
`;
