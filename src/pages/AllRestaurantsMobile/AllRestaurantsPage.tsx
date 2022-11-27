import React from "react";
import RestaurantsCards from "../../components/Cards/RestaurantsCards/RestaurantCard";
import { Filter, FiltersFrame, PageTitle, RestaurantsSection } from "./style";
const AllRestaurantsPage = () => {
  return (
    <>
      <PageTitle>Restaurants</PageTitle>

      <FiltersFrame>
        <Filter active={true}>All</Filter>
        <Filter active={false}>New</Filter>
        <Filter active={false}>Most Popular</Filter>
        <Filter active={false}>Open Now</Filter>
      </FiltersFrame>

      <RestaurantsSection>
        <RestaurantsCards Size="Default" Page="AllRestaurants" />
      </RestaurantsSection>
    </>
  );
};

export default AllRestaurantsPage;
