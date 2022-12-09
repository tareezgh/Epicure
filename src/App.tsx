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
import AllRestaurantsPage from "./pages/RestaurantsMobile/AllRestaurantsPage";
import RestaurantPage from "./pages/RestaurantsMobile/RestaurantPage";
import ChefsPage from "./pages/ChefsMobile/ChefsPage";

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
          <Route path="/AllRestaurants" element={<AllRestaurantsPage />} />
          <Route path="/Restaurant:name" element={<RestaurantPage />} />
          <Route path="/Chefs" element={<ChefsPage />} />
        </Routes>

        {windowSize < 700 ? (
          <Footer windowType={"Mobile"} />
        ) : (
          <Footer windowType={"Desktop"} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
