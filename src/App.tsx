import React from "react";

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestaurants(AllRestaurants));
    dispatch(setDishes(AllDishes));
    dispatch(setChefs(AllChefs));
  }, []);

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AllRestaurants" element={<AllRestaurantsPage />} />
          <Route path="/Restaurant:name" element={<RestaurantPage />} />
          <Route path="/Chefs" element={<ChefsPage />} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
