import React from "react";

import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import SetWindowSize from "./helpers/SetWindowSize";
import { setChefs, setDishes, setRestaurants } from "./helpers/Slicers";

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
import {
  fetchAllChefsData,
  fetchAllDishesData,
  fetchAllRestaurantsData,
} from "./services/fetchData";

function App() {
  const windowSize = SetWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllRestaurantsData().then((res) => dispatch(setRestaurants(res)));
    fetchAllDishesData().then((res) => dispatch(setDishes(res)));
    fetchAllChefsData().then((res) => dispatch(setChefs(res)));
  }, []);

  // const fetchAllChefsData = async () => {
  //   return await axios
  //     .get(getChefsUrl)
  //     .then((response) => dispatch(setChefs(response.data)));
  // };

  // const fetchAllRestaurantsData = async () => {
  //   return await axios
  //     .get(getRestaurantsUrl)
  //     .then((response) => dispatch(setRestaurants(response.data)));
  // };

  // const fetchAllDishesData = async () => {
  //   return await axios
  //     .get(getDishesUrl)
  //     .then((response) => dispatch(setDishes(response.data)));
  // };

  return (
    <>
      <BrowserRouter>
        {windowSize < 600 ? <HeaderMobile /> : <HeaderDesktop />}
        <ToastContainer />
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
