import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
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
  Badge,
} from "./style";

import Hamburger from "../../Hamburger/Hamburger";
import Search from "../../Search/Search";
import Cart from "../../Cart/Cart";
import SignIn from "../../SignIn/SignIn";
import Details from "../../Details/Details";

const HeaderMobile = () => {
  const navigate = useNavigate();
  const ordersNumber = useSelector((state: any) => state.orders.counter);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    if (cartOpen) toggleCart();
    if (userOpen) toggleUser();
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleSearch = () => {
    if (cartOpen) toggleCart();
    if (userOpen) toggleUser();
    setSearchOpen(!searchOpen);
  };

  const toggleUser = () => {
    if (cartOpen) toggleCart();
    if (searchOpen) toggleSearch();
    setUserOpen(!userOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleCheckout = () => {
    setCheckoutOpen(!checkoutOpen);
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
          <UserIcon onClick={toggleUser} />
          {ordersNumber ? <Badge>{ordersNumber}</Badge> : ""}
          <CartIcon onClick={toggleCart} />
        </NavbarRightSideContainer>

        {/* Pop Ups */}

        {hamburgerOpen && <Hamburger toggleHamburger={toggleHamburger} />}
        {cartOpen && (
          <Cart toggleCart={toggleCart} toggleCheckout={toggleCheckout} />
        )}

        {userOpen && (
          <>
            <CloseNavbar>
              <CloseIcon onClick={toggleUser} />
            </CloseNavbar>
            <SignIn toggleUser={toggleUser} />
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

        {checkoutOpen && (
          <>
            <CloseNavbar>
              <CloseIcon onClick={toggleCheckout} />
            </CloseNavbar>
            <Details />
          </>
        )}
      </NavbarContainer>
    </>
  );
};

export default HeaderMobile;
