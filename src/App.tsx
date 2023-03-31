import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import SetWindowSize from "./helpers/SetWindowSize";
import {
  setChefs,
  setDishes,
  setAllRestaurants,
  setOrdersNumber,
  setOrders,
  setChefOfTheWeek,
} from "./redux/Slicers";

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
  fetchAllOrdersData,
  fetchAllRestaurantsData,
  fetchOrdersDataForUser,
  getChefOfTheWeekData,
} from "./services/fetchData";
import "./App.css";
import OrderHistoryPageDesktop from "./pages/RestaurantsDesktop/OrderHistoryPage";

function App() {
  const windowSize = SetWindowSize();
  const dispatch = useDispatch();
  const ordersData = useSelector((state: any) => state.orders.allOrders);
  const currentUser = useSelector((state: any) => state.currentUser.email);
  dispatch(setOrdersNumber(ordersData.length));

  // PromiseAll need to FIX
  useEffect(() => {
    fetchAllRestaurantsData().then((res) => dispatch(setAllRestaurants(res)));
    fetchAllDishesData().then((res) => dispatch(setDishes(res)));
    fetchAllChefsData().then((res) => dispatch(setChefs(res)));
    fetchAllOrdersData().then((res) => dispatch(setOrders(res)));
    getChefOfTheWeekData().then((res) => dispatch(setChefOfTheWeek(res)));
  }, []);

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

          <Route path="/OrderHistory" element={<OrderHistoryPageDesktop />} />

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
