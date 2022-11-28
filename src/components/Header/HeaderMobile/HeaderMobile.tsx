import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarLeftSideContainer,
  HamburgerLine,
  EpicureLogoContainer,
  EpicureLogo,
  NavbarRightSideContainer,
  SearchIcon,
  UserIcon,
  CartIcon,
  CloseIcon,
  CloseNavbar,
  CloseNavbarTitle,
  SearchContainer,
} from "./style";

import Hamburger from "../Hamburger/Hamburger";
import Search from "../../Search/Search";
import Cart from "../Cart/Cart";

const HeaderMobile = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    if (cartOpen) toggleCart();
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleSearch = () => {
    if (cartOpen) toggleCart();
    setSearchOpen(!searchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const renderHamburger = (
    <>
      <NavbarLeftSideContainer onClick={toggleHamburger}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </NavbarLeftSideContainer>
    </>
  );

  const renderLogo = (
    <>
      <EpicureLogoContainer>
        <EpicureLogo />
      </EpicureLogoContainer>
    </>
  );

  const renderIcons = (
    <>
      <NavbarRightSideContainer>
        <SearchIcon onClick={toggleSearch} />
        <UserIcon />
        <CartIcon onClick={toggleCart} />
      </NavbarRightSideContainer>
    </>
  );

  const renderCloseNavbar = (
    <>
      <CloseNavbar>
        <CloseIcon onClick={toggleSearch} />
        <CloseNavbarTitle>Search</CloseNavbarTitle>
      </CloseNavbar>
    </>
  );

  return (
    <>
      <NavbarContainer>
        {renderHamburger}
        {renderLogo}
        {renderIcons}

        {/* Pop Ups */}

        {hamburgerOpen && <Hamburger toggleHamburger={toggleHamburger} />}
        {cartOpen && <Cart />}

        {searchOpen && (
          <>
            {renderCloseNavbar}
            <SearchContainer>
              <Search />
            </SearchContainer>
          </>
        )}
      </NavbarContainer>
    </>
  );
};

export default HeaderMobile;
