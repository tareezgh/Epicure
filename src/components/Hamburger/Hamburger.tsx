import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";

import { CloseNavbar, CloseIcon } from "../Header/HeaderMobile/style";
import {
  HamburgerContainer,
  RestaurantsLink,
  ChefsLink,
  SpaceLine,
  AdminLink,
} from "./style";

interface Params {
  toggleHamburger: () => void;
}

const Hamburger = (hamburgerProps: Params) => {
  const userAuth = localStorage.getItem("authentication");
  return (
    <>
      <CloseNavbar>
        <CloseIcon onClick={() => hamburgerProps.toggleHamburger()} />
      </CloseNavbar>

      <HamburgerContainer>
        <RestaurantsLink>Restaurants</RestaurantsLink>
        <ChefsLink>Chefs</ChefsLink>
        {userAuth === "Admin" ? <AdminLink>Admin</AdminLink> : <></>}
        <SpaceLine />
        <Footer windowType={"Mobile"} />
      </HamburgerContainer>
    </>
  );
};

export default Hamburger;
