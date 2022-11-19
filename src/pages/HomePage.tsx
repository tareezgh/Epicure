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
        <div className="all-link-restaurants">
          <a className="link-title-restaurants">All Restaurants</a>
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

        <div className="all-link-dishes">
          <a className="link-title-dishes">All Dishes</a>
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

      <section className="chef-container">
        <h2 className="chef-title">Chef of the week:</h2>

        <ChefCard />
        <p className="chef-description">
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </p>
        <h2 className="chef-title">Chef of the week:</h2>
        <div className="slide-row-restaurants">
          <RestaurantCard />
          <RestaurantCard />
        </div>
        <div className="all-link-restaurants">
          <a className="link-title-restaurants">All Restaurants</a>
          <img
            className="go-icon"
            alt="go"
            src={require("../assets/go-icon.png")}
          />
        </div>
      </section>

      <section className="about-container">
        <div className="logo">
          <img
            className="epicure-logo"
            alt="Epicure"
            src={require("../assets/Epicure-logo.png")}
          />
        </div>

        <div className="download-frame">
          <div className="frame">
            <img
              className="google-img"
              alt="Google"
              src={require("../assets/google-icon.png")}
            />
            <div className="frame2">
              <div className="first">Get it on</div>
              <div className="second">Google Play</div>
            </div>
          </div>

          <div className="frame">
            <img
              className="apple-img"
              alt="Google"
              src={require("../assets/apple-icon.png")}
            />
            <div className="frame2">
              <div className="first">Download on the</div>
              <div className="second">App Store</div>
            </div>
          </div>
        </div>

        <h2 className="about-title">about us:</h2>

        <p className="first-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum.
        </p>

        <p className="second-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
        </p>
      </section>
    </>
  );
};

export default HomePage;
