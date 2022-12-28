import styled from "styled-components";

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PrimaryBtnFrame = styled(FlexContainerRow)`
  padding: 5px 24px;
  gap: 10px;

  width: 206px;
  height: 48px;

  background: #000000;
  margin: 40px 0 0 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PrimaryBtnTitle = styled.h3`
  font-weight: 400;
  line-height: 20px;

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: auto;
  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
