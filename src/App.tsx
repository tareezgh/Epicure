import React from "react";

import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import SetWindowSize from "./helpers/SetWindowSize";
import { setChefs, setDishes, setRestaurants } from "./helpers/Slicers";
import { AllChefs, AllDishes, AllRestaurants } from "./services/Data";

import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "./components/Header/HeaderDesktop/HeaderDesktop";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePageMobile/HomePage";
import AllRestaurantsPageMobile from "./pages/RestaurantsMobile/AllRestaurantsPage";
import AllRestaurantsPageDesktop from "./pages/RestaurantsDesktop/AllRestaurantsPage";
import RestaurantPageMobile from "./pages/RestaurantsMobile/RestaurantPage";
import RestaurantPageDesktop from "./pages/RestaurantsDesktop/RestaurantPage";
import ChefsPageMobile from "./pages/ChefsMobile/ChefsPage";
import ChefsPageDesktop from "./pages/ChefsDesktop/ChefsPage";

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
        {windowSize < 600 ? <HeaderMobile /> : <HeaderDesktop />}

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route
            path="/AllRestaurants"
            element={
              windowSize < 600 ? (
                <AllRestaurantsPageMobile />
              ) : (
                <AllRestaurantsPageDesktop />
              )
            }
          />
          <Route
            path="/Restaurant:name"
            element={
              windowSize < 600 ? (
                <RestaurantPageMobile />
              ) : (
                <RestaurantPageDesktop />
              )
            }
          />
          <Route
            path="/Chefs"
            element={
              windowSize < 600 ? <ChefsPageMobile /> : <ChefsPageDesktop />
            }
          />
        </Routes>

        {windowSize < 600 ? (
          <Footer windowType={"Mobile"} />
        ) : (
          <Footer windowType={"Desktop"} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
