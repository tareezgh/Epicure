import { useState } from "react";
import { useNavigate } from "react-router";
import FilterFunction from "../../Filters/FilterFunction";
import Search from "../../Search/Search";
import SignIn from "../SignIn/SignIn";
import Cart from "../Cart/Cart";

import {
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
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const filters = ["Restaurants", "Chefs"];

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleUser = () => {
    // not implemented yet
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

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
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
            <CartIcon onClick={toggleCart} />
          </IconsContainer>

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
