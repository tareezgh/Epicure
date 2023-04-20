import { useState } from "react";
import RestaurantsCards from "../../components/Cards/CardsDesktop/RestaurantsCards/RestaurantCard";
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

  const frameStyle = [
    {
      background: `${priceOpen ? "#D0CFCF" : "#FAFAFA"}`,
    },
    {
      background: `${distanceOpen ? "#D0CFCF" : "#FAFAFA"}`,
    },
    {
      background: `${ratingOpen ? "#D0CFCF" : "#FAFAFA"}`,
    },
  ];

  const handleData = (filter: string) => {
    setRestaurantsFilter(filter);
  };

  const toggle = (str: String) => {
    setPriceOpen(false);
    setDistanceOpen(false);
    setRatingOpen(false);
    switch (str) {
      case buttons[0]:
        setPriceOpen(!priceOpen);
        break;
      case buttons[1]:
        setDistanceOpen(!distanceOpen);
        break;
      case buttons[2]:
        setRatingOpen(!ratingOpen);
        break;

      default:
        break;
    }
  };

  const renderComponent = (comp: string, key: number) => (
    <>
      <InsiderFrame key={key} style={frameStyle[key]}>
        <ComponentFrame onClick={() => toggle(comp)}>
          <Title>{comp}</Title>
          <Arrow />
        </ComponentFrame>
      </InsiderFrame>
      {priceOpen && <Price />}
      {distanceOpen && <Distance />}
      {ratingOpen && <Rating />}
    </>
  );

  return (
    <>
      <FiltersFrame>
        <FilterFunction myFilters={filters} handleData={handleData} />
      </FiltersFrame>

      <Frame>
        <Group>
          <>
            {renderComponent(buttons[0], 0)}
            {renderComponent(buttons[1], 1)}
            {renderComponent(buttons[2], 2)}
          </>
        </Group>
      </Frame>

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
