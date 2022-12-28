import { useState } from "react";
import {
  AboutUsContainer,
  AboutUsTitle,
  AppleIcon,
  ArrowImage,
  CardsFrame,
  ChefsContainer,
  DishesContainer,
  DownloadFrame,
  EpicureLogo,
  Frame,
  GoogleIcon,
  HeroContainer,
  HeroContent,
  HeroTitle,
  Hint,
  InfoColumn,
  IngredientName,
  IngredientsContainer,
  IngredientsFrame,
  IngredientsIcon,
  IngredientsIconsFrame,
  InsideFrame,
  LinkAllContainer,
  LinkAllRestaurants,
  Paragraph,
  Platform,
  RestaurantsContainer,
  Title,
} from "./style";

// Components
import Search from "../../components/Search/Search";
import RestaurantsCards from "../../components/CardsDesktop/RestaurantsCards/RestaurantCard";
import DishesCards from "../../components/CardsDesktop/DishCard/DishCard";
import ChefCard from "../../components/CardsDesktop/ChefCard/ChefCard";

import spicyIcon from "../../assets/spicy-icon-big.svg";
import vegetarianIcon from "../../assets/vegetarian-icon-big.svg";
import veganIcon from "../../assets/vegan-icon-big.svg";

const HomePageDesktop = () => {
  const [dishOpen, setDishOpen] = useState<boolean>(false);
  const toggleDish = () => {
    setDishOpen(!dishOpen);
  };
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Epicure works with the top chef restaurants in Tel Aviv
          </HeroTitle>
          <Search page="HomePageDesktop" />
        </HeroContent>
      </HeroContainer>

      <Title>popular restaurant in epicure:</Title>

      <RestaurantsContainer>
        <CardsFrame>
          <RestaurantsCards size="Big" page="HomePageDesktop" />
        </CardsFrame>

        <LinkAllContainer>
          <LinkAllRestaurants>All Restaurants</LinkAllRestaurants>
          <ArrowImage />
        </LinkAllContainer>
      </RestaurantsContainer>

      <Title>SIGNATURE DISH OF:</Title>
      <DishesContainer>
        <CardsFrame>
          <DishesCards
            size="Big"
            page="HomePageDesktop"
            toggleDish={toggleDish}
          />
        </CardsFrame>
      </DishesContainer>

      <IngredientsContainer>
        <Title>THE MEANING OF OUR ICONS:</Title>
        <IngredientsIconsFrame>
          <IngredientsFrame>
            <IngredientsIcon src={spicyIcon} />
            <IngredientName>Spicy</IngredientName>
          </IngredientsFrame>

          <IngredientsFrame>
            <IngredientsIcon src={vegetarianIcon} />
            <IngredientName>Vegetarian</IngredientName>
          </IngredientsFrame>

          <IngredientsFrame>
            <IngredientsIcon src={veganIcon} />
            <IngredientName>Vegan</IngredientName>
          </IngredientsFrame>
        </IngredientsIconsFrame>
      </IngredientsContainer>

      <ChefsContainer>
        <Title>Chef of the week:</Title>
        <ChefCard chefOfTheWeek={true} />
      </ChefsContainer>

      <AboutUsContainer>
        <InfoColumn>
          <AboutUsTitle>about us:</AboutUsTitle>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </Paragraph>

          <DownloadFrame>
            <Frame>
              <GoogleIcon />
              <InsideFrame>
                <Hint>Get it on</Hint>
                <Platform>Google Play</Platform>
              </InsideFrame>
            </Frame>

            <Frame>
              <AppleIcon />
              <InsideFrame>
                <Hint>Download on the</Hint>
                <Platform>App Store</Platform>
              </InsideFrame>
            </Frame>
          </DownloadFrame>
        </InfoColumn>

        <EpicureLogo />
      </AboutUsContainer>
    </>
  );
};

export default HomePageDesktop;
