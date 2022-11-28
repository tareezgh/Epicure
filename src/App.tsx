import React from "react";

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "./components/Header/HeaderDesktop/HeaderDesktop";
import Footer from "./components/Footer/Footer";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePageMobile/HomePage";
import AllRestaurantsPage from "./pages/AllRestaurantsMobile/AllRestaurantsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChefs, setDishes, setRestaurants } from "./helpers/Slicers";
import { AllChefs, AllDishes, AllRestaurants } from "./services/Data";
import RestaurantPage from "./pages/AllRestaurantsMobile/RestaurantPage";
import ChefsPage from "./pages/ChefsMobile/ChefsPage";
import SetWindowSize from "./helpers/SetWindowSize";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestaurants(AllRestaurants));
    dispatch(setDishes(AllDishes));
    dispatch(setChefs(AllChefs));
  }, []);

  const windowSize = SetWindowSize();

  return (
    <>
      {windowSize < 700 ? <HeaderMobile /> : <HeaderDesktop />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AllRestaurants" element={<AllRestaurantsPage />} />
          <Route path="/Restaurant:name" element={<RestaurantPage />} />
          <Route path="/Chefs" element={<ChefsPage />} />
        </Routes>
      </BrowserRouter>

      {windowSize < 700 ? (
        <Footer Type={"Mobile"} />
      ) : (
        <Footer Type={"Desktop"} />
      )}
    </>
  );
}

export default App;
