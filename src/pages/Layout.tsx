import React from "react";
import SetWindowSize from "../helpers/SetWindowSize";
import HomePage from "./HomePageMobile/HomePage";

const Layout = () => {
  const windowSize = SetWindowSize();
  return <>{windowSize < 600 ? <HomePage /> : <HomePage />}</>;
};

export default Layout;
