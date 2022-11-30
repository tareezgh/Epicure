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

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarContainer = styled(FlexContainerRow)`
  width: 100%;
  height: 64px;
  top: 0;
  position: fixed;
  z-index: 1000;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0);
`;

export const NavbarContent = styled(FlexContainerRow)`
  width: 100%;
  height: 36px;
  margin: 0 10% 0 10%;
  align-items: center;
  padding: 0px;
  gap: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0);
`;

export const EpicureLogoContainer = styled(FlexContainerRow)`
  flex: none;
  order: 0;
  flex-grow: 0;
  gap: 15px;
  cursor: pointer;
`;

export const EpicureLogo = styled.img.attrs({
  src: epicureLogo,
})`
  width: 32.93px;
  height: 32px;
`;

export const EpicureTitle = styled.h2`
  height: 33px;
  margin: 0;
  font-size: 27px;
  line-height: 33px;
  letter-spacing: 1.35px;
  text-transform: uppercase;
`;

export const FiltersFrame = styled(FlexContainerRow)`
  width: 193px;
  height: 22px;
  margin: 0 0 0 32px;
  padding: 0px;
  gap: 32px;
  align-items: flex-start;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Filter = styled.a<{
  active?: boolean;
}>`
  line-height: 22px;
  letter-spacing: 1.92px;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
  ${(props) =>
    props.active && `border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);`};
`;

export const IconsContainer = styled(FlexContainerRow)`
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: 60%;
  height: 36px;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
`;

const NavbarIconsGeneral = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
`;

export const SearchIcon = styled(NavbarIconsGeneral).attrs({
  src: searchIcon,
})``;

export const UserIcon = styled(NavbarIconsGeneral).attrs({
  src: userIcon,
})``;

export const CartIcon = styled(NavbarIconsGeneral).attrs({
  src: cartIcon,
})``;
