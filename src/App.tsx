import React from "react";

import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "./components/Header/HeaderDesktop/HeaderDesktop";
import Footer from "./components/Footer/Footer";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePageMobile/HomePage";
import RestaurantPage from "./pages/AllRestaurantsMobile/RestaurantPage";
import AllRestaurantsPage from "./pages/AllRestaurantsMobile/AllRestaurantsPage";
import ChefsPage from "./pages/ChefsMobile/ChefsPage";
import SetWindowSize from "./helpers/SetWindowSize";
import { setChefs, setDishes, setRestaurants } from "./helpers/Slicers";
import { AllChefs, AllDishes, AllRestaurants } from "./services/Data";

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
      <BrowserRouter>
        {windowSize < 700 ? <HeaderMobile /> : <HeaderDesktop />}

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AllRestaurants" element={<AllRestaurantsPage />} />
          <Route path="/Restaurant:name" element={<RestaurantPage />} />
          <Route path="/Chefs" element={<ChefsPage />} />
        </Routes>

        {windowSize < 700 ? (
          <Footer Type={"Mobile"} />
        ) : (
          <Footer Type={"Desktop"} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
