import Footer from "../../Footer/Footer";

import { CloseNavbar, CloseIcon } from "../HeaderMobile/style";
import {
  HamburgerContainer,
  RestaurantsLink,
  ChefsLink,
  SpaceLine,
} from "./style";

interface Params {
  toggleHamburger: () => void;
};

const Hamburger = (hamburgerProps: Params) => {
  return (
    <>
      <CloseNavbar>
        <CloseIcon onClick={() => hamburgerProps.toggleHamburger()} />
      </CloseNavbar>

      <HamburgerContainer>
        <RestaurantsLink>Restaurants</RestaurantsLink>
        <ChefsLink>Chefs</ChefsLink>
        <SpaceLine />
        <Footer windowType={"Mobile"} />
      </HamburgerContainer>
    </>
  );
};

export default Hamburger;
