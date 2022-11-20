import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AllRestaurants from "./pages/AllRestaurants";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllRestaurants" element={<AllRestaurants />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
