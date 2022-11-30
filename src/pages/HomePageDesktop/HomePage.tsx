import React from "react";

import {
  AboutUsContainer,
  AboutUsTitle,
  AppleIcon,
  ArrowImage,
  ChefsContainer,
  ChefsDescription,
  ChefsTitle,
  DishesContainer,
  DishesTitle,
  DownloadFrame,
  EpicureLogo,
  First,
  FirstParagraph,
  Frame,
  GoogleIcon,
  HeroContainer,
  HeroContent,
  HeroTitle,
  IngredientName,
  IngredientsContainer,
  IngredientsFrame,
  IngredientsTitle,
  InsideFrame,
  LinkAllContainer,
  LinkAllDishes,
  LinkAllRestaurants,
  Platform,
  RestaurantsContainer,
  RestaurantsTitle,
  SecondParagraph,
  SpicyIcon,
  VeganIcon,
  VegetarianIcon,
} from "./style";

// Components
import Search from "../../components/Search/Search";
import RestaurantsCards from "../../components/Cards/RestaurantsCards/RestaurantCard";
import DishesCards from "../../components/Cards/DishCard/DishCard";
import ChefCard from "../../components/Cards/ChefCard/ChefCard";

const HomePageDesktop = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Epicure works with the top chef restaurants in Tel Aviv
          </HeroTitle>
          <Search />
        </HeroContent>
      </HeroContainer>

      <RestaurantsContainer>
        <RestaurantsTitle>popular restaurant in epicure:</RestaurantsTitle>

        <RestaurantsCards Size="Small" />

        <LinkAllContainer type="Restaurants">
          <LinkAllRestaurants>All Restaurants</LinkAllRestaurants>
          <ArrowImage />
        </LinkAllContainer>
      </RestaurantsContainer>

      <DishesContainer>
        <DishesTitle>Signature Dish Of:</DishesTitle>
        <DishesCards Size="Small" />

        <LinkAllContainer type="Dishes">
          <LinkAllDishes> All Dishes</LinkAllDishes>
          <ArrowImage />
        </LinkAllContainer>
      </DishesContainer>

      <IngredientsContainer>
        <IngredientsTitle>Signature Dish Of:</IngredientsTitle>

        <IngredientsFrame type="Spicy">
          <SpicyIcon />
          <IngredientName>Spicy</IngredientName>
        </IngredientsFrame>

        <IngredientsFrame type="Vegetarian">
          <VegetarianIcon />
          <IngredientName>Vegetarian</IngredientName>
        </IngredientsFrame>

        <IngredientsFrame type="Vegan">
          <VeganIcon />
          <IngredientName>Vegan</IngredientName>
        </IngredientsFrame>
      </IngredientsContainer>

      <ChefsContainer>
        {/* need to change for specific chef*/}
        <ChefsTitle>Chef of the week:</ChefsTitle>
        <ChefCard chefOfTheWeek={true} />
        <ChefsDescription>
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </ChefsDescription>
        <ChefsTitle>Chef of the week:</ChefsTitle>
        <RestaurantsCards Size="Small" />
        <LinkAllContainer type="Restaurants">
          <LinkAllRestaurants> All Restaurants</LinkAllRestaurants>
          <ArrowImage />
        </LinkAllContainer>
      </ChefsContainer>

      <AboutUsContainer>
        <EpicureLogo />

        <DownloadFrame>
          <Frame>
            <GoogleIcon />
            <InsideFrame>
              <First>Get it on</First>
              <Platform>Google Play</Platform>
            </InsideFrame>
          </Frame>

          <Frame>
            <AppleIcon />
            <InsideFrame>
              <First>Download on the</First>
              <Platform>App Store</Platform>
            </InsideFrame>
          </Frame>
        </DownloadFrame>

        <AboutUsTitle>about us:</AboutUsTitle>

        <FirstParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum.
        </FirstParagraph>

        <SecondParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
        </SecondParagraph>
      </AboutUsContainer>
    </>
  );
};

export default HomePageDesktop;
