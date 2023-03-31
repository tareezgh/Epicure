import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import FilterFunction from "../../Filters/FilterFunction";
import Search from "../../Search/Search";
import SignIn from "../../SignIn/SignIn";
import Cart from "../../Cart/Cart";

import {
  Badge,
  CartIcon,
  EpicureLogo,
  EpicureLogoContainer,
  EpicureTitle,
  FiltersFrame,
  IconsContainer,
  NavbarContainer,
  NavbarContent,
  SearchIcon,
  UserIcon,
} from "./style";

const HeaderDesktop = () => {
  const navigate = useNavigate();
  const ordersNumber = useSelector((state: any) => state.orders.counter);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const filters = ["Restaurants", "Chefs"];

  const toggleAll = () => {
    if (searchOpen) toggleSearch();
    if (cartOpen) toggleCart();
    if (userOpen) toggleUser();
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
    if (userOpen) toggleUser();
    if (searchOpen) toggleSearch();
    setCartOpen(!cartOpen);
  };

  const toggleCheckout = () => {
    setCheckoutOpen(!checkoutOpen);
  };

  const handleData = (filter: string) => {
    switch (filter) {
      case "Restaurants":
        toggleAll();
        navigate(`/AllRestaurants`);
        break;

      case "Chefs":
        toggleAll();
        navigate(`/Chefs`);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <EpicureLogoContainer
            onClick={() => {
              navigate(`/`);
              window.location.reload(); // need to FIX
            }}
          >
            <EpicureLogo />
            <EpicureTitle>Epicure</EpicureTitle>
          </EpicureLogoContainer>

          <FiltersFrame>
            <FilterFunction
              myFilters={filters}
              handleData={handleData}
              page={"Header"}
            />
          </FiltersFrame>

          <IconsContainer>
            <>
              {searchOpen ? (
                <Search page="HeaderDesktop" toggleSearch={toggleSearch} />
              ) : (
                <SearchIcon onClick={toggleSearch} />
              )}
            </>

            <UserIcon onClick={toggleUser} />
            {ordersNumber ? <Badge>{ordersNumber}</Badge> : ""}
            <CartIcon onClick={toggleCart} />
          </IconsContainer>

          {cartOpen && (
            <Cart
              page="Desktop"
              toggleCart={toggleCart}
              toggleCheckout={toggleCheckout}
            />
          )}
          {userOpen && (
            <>
              <SignIn page="Desktop" toggleUser={toggleUser} />
            </>
          )}
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default HeaderDesktop;
