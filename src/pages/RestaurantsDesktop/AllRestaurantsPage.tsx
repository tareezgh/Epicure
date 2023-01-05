import { useState } from "react";
import RestaurantsCards from "../../components/CardsDesktop/RestaurantsCards/RestaurantCard";
import FilterFunction from "../../components/Filters/FilterFunction";
import Distance from "../../components/RestaurantComponents/Distance/Distance";
import Price from "../../components/RestaurantComponents/Price/Price";
import Rating from "../../components/RestaurantComponents/Rating/Rating";
import {
  Arrow,
  ComponentFrame,
  FiltersFrame,
  Frame,
  Group,
  InsiderFrame,
  RestaurantsSection,
  RowSection,
  Title,
} from "./style";

const AllRestaurantsPageDesktop = () => {
  const [priceOpen, setPriceOpen] = useState<boolean>(false);
  const [distanceOpen, setDistanceOpen] = useState<boolean>(false);
  const [ratingOpen, setRatingOpen] = useState<boolean>(false);
  const [restaurantsFilter, setRestaurantsFilter] = useState<string>("All");
  const filters = ["All", "New", "Most Popular", "Open Now", "Map View"];
  const buttons = ["Price Range", "Distance", "Rating"];


  const handleData = (filter: string) => {
    setRestaurantsFilter(filter);
  };

  const togglePrice = () => {
    setPriceOpen(!priceOpen);
  };

  const toggleDistance = () => {
    setDistanceOpen(!distanceOpen);
  };

  const toggleRating = () => {
    setRatingOpen(!ratingOpen);
  };

  const toggle = (str: String) => {
    setPriceOpen(false);
    setDistanceOpen(false);
    setRatingOpen(false);
    switch (str) {
      case "Price Range":
        togglePrice();
        break;
      case "Distance":
        toggleDistance();
        break;
      case "Rating":
        toggleRating();
        break;

      default:
        break;
    }

  };

  const renderComponent = buttons.map((button: string, key: number) => (
    <InsiderFrame
      key={key}
      // style={{
      //   background:  ? "#D0CFCF" : "#FAFAFA",
      // }}
    >
      <ComponentFrame onClick={() => toggle(button)}>
        <Title>{button}</Title>
        <Arrow />
      </ComponentFrame>
    </InsiderFrame>
  ));

  return (
    <>
      <FiltersFrame>
        <FilterFunction myFilters={filters} handleData={handleData} />
      </FiltersFrame>

      <Frame>
        <Group>{renderComponent}</Group>
      </Frame>
      {priceOpen && <Price />}
      {distanceOpen && <Distance />}
      {ratingOpen && <Rating />}

      <RestaurantsSection>
        <RowSection>
          <RestaurantsCards
            size="Big"
            page="AllRestaurants"
            filter={restaurantsFilter}
          />
        </RowSection>
      </RestaurantsSection>
    </>
  );
};

export default AllRestaurantsPageDesktop;
