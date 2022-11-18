import React from "react";

import "./HomePage.css";

import Search from "../components/Search/Search";
import RestaurantCard from "../components/Cards/RestaurantCard";
import DishCard from "../components/Cards/DishCard";
import ChefCard from "../components/Cards/ChefCard";

import { Counter } from "../components/counter/Counter";
import DisplayCounter from "../components/DisplayCounter";

const HomePage = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Epicure works with the top chef restaurants in Tel Aviv
          </h1>
          <Search />
        </div>
      </section>

      <section className="restaurants-container">
        <h2 className="restaurants-title">popular restaurant in epicure:</h2>
        <div className="slide-row-restaurants">
          <RestaurantCard />
          <RestaurantCard />
        </div>
        <div className="all-link">
          <a className="link-title">All Restaurants</a>
          <img
            className="go-icon"
            alt="go"
            src={require("../assets/go-icon.png")}
          />
        </div>
      </section>

      <section className="dishes-container">
        <h2 className="dishes-title">Signature Dish Of:</h2>
        <div className="slide-row-dishes">
          <DishCard />
          <DishCard />
        </div>

        <div className="all-link all-link-dishes">
          <a className="link-title">All Dishes</a>
          <img
            className="go-icon"
            alt="go"
            src={require("../assets/go-icon.png")}
          />
        </div>

        <div className="ingredients-icons">
          <h2 className="ingredients-title">Signature Dish Of:</h2>
          <div className="ingredient-frame first-ingredient">
            <img
              className="spicy-icon"
              alt="spicy"
              src={require("../assets/spicy-icon.png")}
            />
            <h4 className="ingredient-title">Spicy</h4>
          </div>

          <div className="ingredient-frame">
            <img
              className="vegetarian-icon"
              alt="spicy"
              src={require("../assets/vegetarian-icon.png")}
            />
            <h4 className="ingredient-title">Vegetarian</h4>
          </div>

          <div className="ingredient-frame last-ingredient">
            <img
              className="vegan-icon"
              alt="spicy"
              src={require("../assets/vegan-icon.png")}
            />
            <h4 className="ingredient-title">Vegan</h4>
          </div>
        </div>
      </section>

      <section className="chef-container"></section>

      <section className="about-container"></section>
    </>
  );
};

export default HomePage;
