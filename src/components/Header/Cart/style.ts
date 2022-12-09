import styled from "styled-components";

import cartIcon from "../../../assets/cart-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartContainer = styled(FlexContainerColumn)<{
  page?: string;
}>`
  ${(props) =>
    props.page === "Desktop"
      ? `
      width: 497px;
      height: 586px;
      top: 64px;
      right: 0;
      `
      : `
      width: 100%;
      height: 218px;
      top: 46px;
      `};

  // width: 100%;
  // height: 218px;
  // left: 0px;
  // top: 46px;
  gap: 20px;
  position: fixed;
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
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
