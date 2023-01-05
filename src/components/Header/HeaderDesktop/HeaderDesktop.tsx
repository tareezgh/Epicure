import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import FilterFunction from "../../Filters/FilterFunction";
import Search from "../../Search/Search";
import SignIn from "../SignIn/SignIn";
import Cart from "../Cart/Cart";

import {
  Badge,
  CartIcon,
  CloseIcon,
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
  const filters = ["Restaurants", "Chefs"];

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

  const handleData = (filter: string) => {
    switch (filter) {
      case "Restaurants":
        navigate(`/AllRestaurants`);
        break;

      case "Chefs":
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
              window.location.reload(); // reload the page
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

          {/* Pop Ups */}

          {cartOpen && <Cart page="Desktop" />}

          {userOpen && (
            <>
              <CloseIcon onClick={toggleUser} />
              <SignIn page="Desktop" />
            </>
          )}
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default HeaderDesktop;
