import styled from "styled-components";

import cartIcon from "../../assets/cart-icon.svg";
import currencyIcon from "../../assets/currency-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CartContainer = styled(FlexContainerColumn)<{
  page?: string;
}>`
  width: ${(props) => (props.page === "Desktop" ? "497px" : "100%")};
  top: ${(props) => (props.page === "Desktop" ? "64px" : "46px")};

  right: ${(props) => (props.page === "Desktop" ? "0" : "")};

  height: 514px;
  gap: 20px;
  position: absolute;
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
  overflow-y: scroll;
`;

export const CartIcon = styled.img.attrs({
  src: cartIcon,
})`
  width: 45px;
  height: 45px;
  margin-top: 63px;
`;

export const CartStatus = styled.h3`
  width: 145px;
  height: 19px;

  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 1.97px;
  text-transform: uppercase;

  color: #000000;
`;

export const Frame = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 4px;
  margin-top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SummaryFrame = styled(FlexContainerRow)`
  padding: 0px;
  gap: 4px;
  margin-top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  align-items: center;
  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantName = styled.h3`
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.97px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardContent = styled(FlexContainerRow)`
  width: 340px;
  height: 96px;
  padding: 0px;
  justify-content: flex-start;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardImage = styled.img<{
  size?: string;
}>`
  width: 96px;
  height: 96px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardFrame = styled(FlexContainerColumn)`
  padding: 12px 12px 12px 24px;
  gap: 8px;
  width: 208px;
  height: 72px;
  align-items: flex-start;
  background: #f9f4ea;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const QuantityAndNameFrame = styled(FlexContainerRow)`
  gap: 10px;
  text-align: flex-start;
  letter-spacing: 2.67px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Quantity = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DishName = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  margin: 0;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ChangesFrame = styled(FlexContainerRow)`
  width: auto;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 1.23px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const PriceFrame = styled(FlexContainerRow)<{
  changeOrder?: Boolean;
}>`
  justify-content: flex-end;

  padding: 0px;
  gap: 2px;

  // width: 208px;
  height: 14px;
  margin-right: 12px;
  flex: none;

  order: ${(props) => (props.changeOrder ? "0" : "2")};
  order: 2;
  align-self: stretch;
  flex-grow: 1;
`;

export const CurrencyIcon = styled.img.attrs({
  src: currencyIcon,
})`
  width: 8px;
  height: 22px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Price = styled.div`
  width: 20px;
  height: 18px;

  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  letter-spacing: 1.97px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

////

export const DishDescription = styled.p<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 295px;
      height: 176px;
      font-size: 24px;
      line-height: 30px;
  `
      : `width: 222px;
      font-size: 20px;
      line-height: 24px;
      `};

  // height: 136.27px;
  text-align: center;
  letter-spacing: 1.97px;

  margin: 8px 0 0 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
