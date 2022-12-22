import { useState } from "react";
import { useNavigate } from "react-router";
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
import SignIn from "../SignIn/SignIn";

const HeaderMobile = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false); // not implemented yet
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    if (cartOpen) toggleCart();
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleSearch = () => {
    if (cartOpen) toggleCart();
    setSearchOpen(!searchOpen);
  };

  const toggleUser = () => {
    setUserOpen(!userOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLeftSideContainer onClick={toggleHamburger}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </NavbarLeftSideContainer>

        <EpicureLogoContainer>
          <EpicureLogo onClick={() => navigate(`/`)} />
        </EpicureLogoContainer>
        <NavbarRightSideContainer>
          <SearchIcon onClick={toggleSearch} />
          <UserIcon onClick={toggleUser}/>
          <CartIcon onClick={toggleCart} />
        </NavbarRightSideContainer>

        {/* Pop Ups */}

        {hamburgerOpen && <Hamburger toggleHamburger={toggleHamburger} />}
        {cartOpen && <Cart />}

        {userOpen && (
          <>
            <CloseNavbar>
              <CloseIcon onClick={toggleUser} />
            </CloseNavbar>
            <SignIn/>
          </>
        )}

        {searchOpen && (
          <>
            <CloseNavbar>
              <CloseIcon onClick={toggleSearch} />
              <CloseNavbarTitle>Search</CloseNavbarTitle>
            </CloseNavbar>
            <SearchContainer>
              <Search toggleSearch={toggleSearch} />
            </SearchContainer>
          </>
        )}
      </NavbarContainer>
    </>
  );
};

export default HeaderMobile;
