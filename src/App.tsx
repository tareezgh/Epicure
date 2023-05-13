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
  setChefOfTheWeek,
  setUserOrders,
} from "./redux/Slicers";

import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "./components/Header/HeaderDesktop/HeaderDesktop";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePageMobile/HomePage";
import AdminPageDesktop from "./pages/Admin/AdminPage";
import AllRestaurantsPageMobile from "./pages/RestaurantsMobile/AllRestaurantsPage";
import AllRestaurantsPageDesktop from "./pages/RestaurantsDesktop/AllRestaurantsPage";
import RestaurantPageMobile from "./pages/RestaurantsMobile/RestaurantPage";
import RestaurantPageDesktop from "./pages/RestaurantsDesktop/RestaurantPage";
import ChefsPageMobile from "./pages/ChefsMobile/ChefsPage";
import ChefsPageDesktop from "./pages/ChefsDesktop/ChefsPage";
import OrderHistoryPageDesktop from "./pages/RestaurantsDesktop/OrderHistoryPage";
import CheckoutPageDesktop from "./pages/RestaurantsDesktop/CheckoutPageDesktop";

import {
  fetchAllChefsData,
  fetchAllDishesData,
  fetchAllRestaurantsData,
  fetchOrdersDataForUser,
  getChefOfTheWeekData,
} from "./services/fetchData";
import "./App.css";

function App() {
  const windowSize = SetWindowSize();
  const dispatch = useDispatch();
  const ordersData = useSelector((state: any) => state.orders.userOrders);
  const currentUser = localStorage.getItem("username");
  dispatch(setOrdersNumber(ordersData.length));

  useEffect(() => {
    fetchAllRestaurantsData().then((res) => dispatch(setAllRestaurants(res)));
    fetchAllDishesData().then((res) => dispatch(setDishes(res)));
    fetchAllChefsData().then((res) => dispatch(setChefs(res)));
    getChefOfTheWeekData().then((res) => dispatch(setChefOfTheWeek(res)));
    currentUser ? (
      fetchOrdersDataForUser(currentUser).then((res) =>
        dispatch(setUserOrders(res))
      )
    ) : (
      <></>
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        {windowSize < 600 ? <HeaderMobile /> : <HeaderDesktop />}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Admin" element={<AdminPageDesktop />} />
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
          {windowSize < 600 ? (
            ""
          ) : (
            <Route path="/Checkout" element={<CheckoutPageDesktop />} />
          )}

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
