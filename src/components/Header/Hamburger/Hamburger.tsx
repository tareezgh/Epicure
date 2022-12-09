import Footer from "../../Footer/Footer";

import { CloseNavbar, CloseIcon } from "../HeaderMobile/style";
import {
  HamburgerContainer,
  RestaurantsLink,
  ChefsLink,
  SpaceLine,
} from "./style";

type Params = {
  toggleHamburger: () => void;
};

const Hamburger = (HamburgerProps: Params) => {
  return (
    <>
      <CloseNavbar>
        <CloseIcon onClick={() => HamburgerProps.toggleHamburger()} />
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
