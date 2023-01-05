import styled from "styled-components";

import epicureLogo from "../../../assets/Epicure-logo.png";
import searchIcon from "../../../assets/search-icon.svg";
import userIcon from "../../../assets/user-icon.svg";
import cartIcon from "../../../assets/cart-icon.svg";
import blackCloseIcon from "../../../assets/black-close-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 46px;
  top: 0;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0);
`;

export const NavbarLeftSideContainer = styled(FlexContainerColumn)`
  height: 16px;
  margin-left: 24px;
  padding-top: 15px;
  justify-content: space-around;
  cursor: pointer;
`;

export const HamburgerLine = styled.div`
  width: 16px;
  height: 0px;
  margin: 4px 0 4px 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.9);
`;

export const EpicureLogoContainer = styled.div`
  margin-left: 20%;
  padding-top: 7px;
`;

export const EpicureLogo = styled.img.attrs({
  src: epicureLogo,
})`
  width: 32.93px;
  height: 32px;
`;

export const NavbarRightSideContainer = styled.div`
  margin-right: 14px;
`;

const NavbarIcons = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  padding-top: 13px;
  cursor: pointer;
`;

export const SearchIcon = styled(NavbarIcons).attrs({
  src: searchIcon,
})``;

export const UserIcon = styled(NavbarIcons).attrs({
  src: userIcon,
})``;

export const CartIcon = styled(NavbarIcons).attrs({
  src: cartIcon,
})``;

export const Badge = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  background: #000000;
  width: 14px;
  height: 14px;
  margin: 0;
  top: -18px;
  left: 30px;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 1.29px;

  text-align: center;
  color: #ffffff;
`;

export const CloseNavbar = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  width: 100%;
  height: 46px;
  z-index: 10000;
  background: #ffffff;
`;

export const CloseIcon = styled.img.attrs({
  src: blackCloseIcon,
})`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  padding-top: 15px;
  cursor: pointer;
`;

export const CloseNavbarTitle = styled.h3`
  width: 63px;
  height: 22px;
  line-height: 22px;
  letter-spacing: 1.92px;
  text-align: center;
`;

export const SearchContainer = styled(FlexContainerColumn)`
  align-items: center;
  padding: 40px 0 0 0;
  gap: 24px;

  position: fixed;
  width: 100%;
  height: 327px;

  top: 46px;

  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`;
