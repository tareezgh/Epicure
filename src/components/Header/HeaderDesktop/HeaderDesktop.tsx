// DO NOT CHECK PLEASE //

import { useState } from "react";
import { useNavigate } from "react-router";
import FilterFunction from "../../Filters/FilterFunction";
import Search from "../../Search/Search";

import Cart from "../Cart/Cart";
import {
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
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [headerFilter, setHeaderFilter] = useState<string>("");
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
    setHeaderFilter(filter);
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
          <EpicureLogoContainer onClick={() => navigate(`/`)}>
            <EpicureLogo />
            <EpicureTitle>Epicure</EpicureTitle>
          </EpicureLogoContainer>

          <FiltersFrame>
            <FilterFunction myFilters={filters} handleData={handleData} />
          </FiltersFrame>

          <IconsContainer>
            <>
              {searchOpen ? (
                <Search page="HeaderDesktop" toggleSearch={toggleSearch} />
              ) : (
                <SearchIcon onClick={toggleSearch} />
              )}
            </>

            <UserIcon />
            <CartIcon onClick={toggleCart} />
          </IconsContainer>

          {cartOpen && <Cart page="Desktop" />}
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default HeaderDesktop;
