import styled from "styled-components";

import plusIcon from "../../../assets/plus-icon.svg";
import whiteCloseIcon from "../../../assets/white-close-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const OrderContainer = styled(FlexContainerColumn)`
  position: absolute;
  width: 573px;
  margin: 700px 50% 0 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding-bottom: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
`;

export const CloseNavbar = styled.div`
  position: fixed;
  width: 100%;
  height: 28px;
  z-index: 10000;
  background: transparent;
`;

export const CloseIcon = styled.img.attrs({
  src: whiteCloseIcon,
})`
  width: 24px;
  height: 24px;
  margin: 10px;

  cursor: pointer;
`;

export const AllInfoContainer = styled(FlexContainerColumn)`
  width: 232px;
  height: 616px;
`;

export const DishImage = styled.img`
  width: 100%;
  height: 292px;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

export const InfoFrame = styled(FlexContainerColumn)`
  width: 232px;
  gap: 14px;

  margin: 32px auto 0 auto;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  width: 232px;
  font-weight: 400;
  font-size: 32px;
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
  width: 232px;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.97px;
  text-align: center;
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
  width: 200px;
  padding: 8px 20px 0 0;
  gap: 24px;

  margin: 32px 0 0 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CheckFrame = styled(FlexContainerColumn)`
  width: 200px;
  gap: 24px;

  margin: 32px 20px 0 0px;
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

export const Icon = styled.input`
  width: 18px;
  height: 18px;

  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;


export const Content = styled.label`
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

export const Minus = styled.div`
  width: 19px;
  height: 0;
  margin: auto;

  border: 1px solid #000000;
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
})`
  width: 19px;
  height: 20px;
  margin: auto;

  cursor: pointer;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
