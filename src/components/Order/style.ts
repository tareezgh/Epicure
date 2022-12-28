import styled from "styled-components";

import radioIcon from "../../assets/radioButton-icon-off.svg";
import checkboxIcon from "../../assets/checkBox-icon-off.svg";
import plusIcon from "../../assets/plus-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const OrderContainer = styled(FlexContainerColumn)<{
  page?: string;
}>`
  position: absolute;
  width: ${(props) => (props.page === "Desktop" ? "573px" : "100%")};
  height: 950px;
  margin: ${(props) => (props.page === "Desktop" ? "auto" : "")};
  z-index: 1;
  padding-bottom: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
`;

export const DishImage = styled.img`
  width: 100%;
  height: 271px;
  margin-top: 46px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

export const InfoFrame = styled(FlexContainerColumn)`
  width: 318px;
  gap: 14px;

  margin: 32px auto 0 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  width: 100%;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Description = styled.h4`
  width: 100%;
  font-size: 16px;
  line-height: 18px;

  letter-spacing: 1.97px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SubTitle = styled.h4`
  font-size: 20px;
  line-height: 18px;

  letter-spacing: 1.97px;
  margin: 0;
  border-bottom: 1px solid rgba(222, 146, 0, 0.9);
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const RadioFrame = styled(FlexContainerColumn)`
  padding: 8px 0px 0px;
  gap: 24px;

  margin: 32px 0 0 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CheckFrame = styled(FlexContainerColumn)`
  gap: 24px;

  margin: 32px 20px 0 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const QuantityFrame = styled(FlexContainerColumn)`
  padding: 8px 0px 0px;
  gap: 24px;

  margin: 32px 0 0 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RowFrame = styled(FlexContainerRow)`
  padding: 0px;
  gap: 12px;

  height: 18px;
  margin: 0;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const RadioIcon = styled.img.attrs({
  src: radioIcon,
})`
  width: 18px;
  height: 18px;

  // background-repeat: no-repeat;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
// &:active{
//   background-image: url(${(props) => props.src});
// }

export const CheckBoxIcon = styled.img.attrs({
  src: checkboxIcon,
})`
  width: 18px;
  height: 18px;

  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Content = styled.h4`
  line-height: 18px;

  text-align: center;
  letter-spacing: 1.97px;

  flex: none;
  order: 1;
  flex-grow: 0;

  margin: 0;
`;

export const InsideFrame = styled(FlexContainerRow)`
  justify-content: space-between;

  // width: 113px;
  height: 20px;
  gap: 32px;

  padding: 0px;

  flex: none;
  order: 1;

  flex-grow: 0;
`;

export const Minus = styled.div<{
  active?: boolean;
}>`
  width: 19px;
  height: 0;
  margin: auto;
  opacity: ${(props) => (props.active ? "1" : "0.3")};

  border: 1.2px solid #000000;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Quantity = styled.div`
  width: 19px;
  height: 20px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Plus = styled.img.attrs({
  src: plusIcon,
})<{
  active?: boolean;
}>`
  width: 19px;
  height: 20px;
  margin: auto;
  opacity: ${(props) => (props.active ? "1" : "0.3")};

  cursor: pointer;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
