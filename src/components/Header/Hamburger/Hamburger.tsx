import React from "react";
import Footer from "../../Footer/Footer";

import { CloseNavbar, CloseIcon } from "../style";
import {
  HamburgerContainer,
  RestaurantsLink,
  ChefsLink,
  SpaceLine,
} from "./style";

type Props = {
  toggleHamburger: () => void;
};

const Hamburger = (props: Props) => {
  return (
    <>
      <CloseNavbar>
        <CloseIcon onClick={() => props.toggleHamburger()} />
      </CloseNavbar>

      <HamburgerContainer>
        <RestaurantsLink>Restaurants</RestaurantsLink>
        <ChefsLink>Chefs</ChefsLink>
        <SpaceLine />
        <Footer />
      </HamburgerContainer>
    </>
  );
};

export default Hamburger;
