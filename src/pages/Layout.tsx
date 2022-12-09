import SetWindowSize from "../helpers/SetWindowSize";
import HomePageDesktop from "./HomePageDesktop/HomePage";
import HomePageMobile from "./HomePageMobile/HomePage";

const Layout = () => {
  const windowSize = SetWindowSize();
  return <>{windowSize < 600 ? <HomePageMobile /> : <HomePageDesktop />}</>;
};

export default Layout;
