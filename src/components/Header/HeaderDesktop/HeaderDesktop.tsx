import React, { useState } from "react";

import { SearchField, InputLine, SearchInput } from "../../Search/style";
import Cart from "../Cart/Cart";
import {
  CartIcon,
  EpicureLogo,
  EpicureLogoContainer,
  EpicureTitle,
  Filter,
  FiltersFrame,
  IconsContainer,
  NavbarContainer,
  NavbarContent,
  SearchIcon,
  UserIcon,
} from "./style";

const HeaderDesktop = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleUser = () => {
    setUserOpen(!userOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const renderSearchInput = (
    <>
      <SearchField>
        <InputLine />
        <SearchInput />
        <SearchIcon />
      </SearchField>
    </>
  );

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <EpicureLogoContainer>
            <EpicureLogo />
            <EpicureTitle>Epicure</EpicureTitle>
          </EpicureLogoContainer>

          <FiltersFrame>
            <Filter active={true}>Restaurants</Filter>
            <Filter active={false}>Chefs</Filter>
          </FiltersFrame>

          <IconsContainer>
            <SearchIcon onClick={toggleSearch} />
            {searchOpen && <>{renderSearchInput}</>}
            <UserIcon />
            <CartIcon onClick={toggleCart} />
          </IconsContainer>

          {cartOpen && <Cart />}
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default HeaderDesktop;
