import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {} from "./style";

import "./HomePage.css";

import epicureLogo from "../../assets/Epicure-logo.png";
import arrowIcon from "../../assets/arrow-icon.svg";
import googleIcon from "../../assets/google-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";

import spicyIcon from "../../assets/spicy-icon-small.svg";
import vegetarianIcon from "../../assets/vegetarian-icon-small.svg";
import veganIcon from "../../assets/vegan-icon-small.svg";

// Components
import Search from "../../components/Search/Search";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import DishCard from "../../components/Cards/DishCard";
import ChefCard from "../../components/Cards/ChefCard";

import { Counter } from "../../components/counter/Counter";
import DisplayCounter from "../../components/DisplayCounter";

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
        <Swiper spaceBetween={24} slidesPerView={1.5}>
          <div className="slide-row-restaurants">
            <SwiperSlide>
              <RestaurantCard />
            </SwiperSlide>
            <SwiperSlide>
              <RestaurantCard />
            </SwiperSlide>
            <SwiperSlide>
              <RestaurantCard />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="all-link-restaurants">
          <a className="link-title-restaurants" href="/AllRestaurants">
            All Restaurants
          </a>

          <img className="go-icon" alt="go" src={arrowIcon} />
        </div>
      </section>

      <section className="dishes-container">
        <h2 className="dishes-title">Signature Dish Of:</h2>
        <Swiper spaceBetween={24} slidesPerView={1.5}>
          <div className="slide-row-dishes">
            <SwiperSlide>
              <DishCard />
            </SwiperSlide>
            <SwiperSlide>
              <DishCard />
            </SwiperSlide>
            <SwiperSlide>
              <DishCard />
            </SwiperSlide>
          </div>
        </Swiper>

        <div className="all-link-dishes">
          <a className="link-title-dishes" href="#">
            All Dishes
          </a>

          <img className="go-icon" alt="go" src={arrowIcon} />
        </div>

        <div className="ingredients-icons">
          <h2 className="ingredients-title">Signature Dish Of:</h2>
          <div className="ingredient-frame first-ingredient">
            <img className="spicy-icon" alt="spicy" src={spicyIcon} />
            <h4 className="ingredient-title">Spicy</h4>
          </div>

          <div className="ingredient-frame">
            <img className="vegetarian-icon" alt="spicy" src={vegetarianIcon} />
            <h4 className="ingredient-title">Vegetarian</h4>
          </div>

          <div className="ingredient-frame last-ingredient">
            <img className="vegan-icon" alt="spicy" src={veganIcon} />
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
        <Swiper spaceBetween={24} slidesPerView={1.5}>
          <div className="slide-row-restaurants">
            <SwiperSlide>
              <RestaurantCard />
            </SwiperSlide>
            <SwiperSlide>
              <RestaurantCard />
            </SwiperSlide>
            <SwiperSlide>
              <RestaurantCard />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="all-link-restaurants">
          <a className="link-title-restaurants" href="/AllRestaurants">
            All Restaurants
          </a>
          <img className="go-icon" alt="go" src={arrowIcon} />
        </div>
      </section>

      <section className="about-container">
        <div className="logo">
          <img className="epicure-logo" alt="Epicure" src={epicureLogo} />
        </div>

        <div className="download-frame">
          <div className="frame">
            <img className="google-img" alt="Google" src={googleIcon} />
            <div className="frame2">
              <div className="first">Get it on</div>
              <div className="second">Google Play</div>
            </div>
          </div>

          <div className="frame">
            <img className="apple-img" alt="Google" src={appleIcon} />
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
