import {
  AboutUsContainer,
  AboutUsTitle,
  AppleIcon,
  ArrowImage,
  ChefsContainer,
  ChefsTitle,
  DishesContainer,
  DishesTitle,
  DownloadFrame,
  EpicureLogo,
  FirstParagraph,
  Frame,
  GoogleIcon,
  HeroContainer,
  HeroContent,
  HeroTitle,
  Hint,
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
import RestaurantsCards from "../../components/CardsMobile/RestaurantsCards/RestaurantCard";
import DishesCards from "../../components/CardsMobile/DishCard/DishCard";
import ChefCard from "../../components/CardsMobile/ChefCard/ChefCard";

const HomePageMobile = () => {
  const renderAllLink = (
    <>
      <LinkAllContainer type="Restaurants">
        <LinkAllRestaurants>All Restaurants</LinkAllRestaurants>
        <ArrowImage />
      </LinkAllContainer>
    </>
  );

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Epicure works with the top chef restaurants in Tel Aviv
          </HeroTitle>
          <Search page={"HomePageMobile"} />
        </HeroContent>
      </HeroContainer>

      <RestaurantsContainer>
        <RestaurantsTitle>popular restaurant in epicure:</RestaurantsTitle>
        <RestaurantsCards size="Small" page="HomePageMobile" />
        {renderAllLink}
      </RestaurantsContainer>

      <DishesContainer>
        <DishesTitle>Signature Dish Of:</DishesTitle>
        <DishesCards size="Small" toggleOrder={() => {}} />
        {/*  no need to open order her  */}
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
        <ChefsTitle>Chef of the week:</ChefsTitle>
        <ChefCard chefOfTheWeek={true} />
        <ChefsTitle>Chef of the week:</ChefsTitle>
        <RestaurantsCards size="Small" page="HomePageMobile" />
        {renderAllLink}
      </ChefsContainer>

      <AboutUsContainer>
        <EpicureLogo />
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

        <AboutUsTitle>About us:</AboutUsTitle>
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

export default HomePageMobile;
