import styled from "styled-components";

import lockIcon from "../assets/lock-icon.svg";

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PrimaryBtnFrame = styled(FlexContainerRow)`
  // padding: 5px 24px;
  gap: 10px;
  width: 206px;
  height: 48px;
  background: #000000;
  margin: 40px 0 0 20px;
  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: #515151;
  }
`;

export const LockIcon = styled.img.attrs({
  src: lockIcon,
})`
  width: 21px;
  height: 24px;
  margin: 0 0 0 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PrimaryBtnTitle = styled.h3<{
  lock?: boolean;
}>`
  font-weight: 400;
  line-height: 20px;

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: auto;
  color: #ffffff;

  flex: none;
  order: ${(props) => (props.lock ? "1" : "0")};
  flex-grow: 0;
`;

export const PrimaryGrayBtnFrame = styled(FlexContainerRow)`
  // padding: 5px 24px;
  gap: 10px;

  width: 206px;
  height: 48px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SecondaryFrame = styled(FlexContainerRow)`
  // padding: 5px 15px;
  gap: 10px;

  width: 206px;
  height: 48px;

  border: 1px solid #000000;

  flex: none;
  order: 3;
  flex-grow: 0;
`;

export const SecondaryBtnTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ClearBtnFrame = styled(FlexContainerRow)`
  padding: 5px 15px;
  gap: 10px;

  width: 112px;
  height: 30px;

  border: 1px solid #000000;
  margin: 20px auto 16px auto;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ClearBtnTitle = styled.h3`
  width: 43px;
  height: 20px;

  font-weight: 400;
  font-size: 10px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;

  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
