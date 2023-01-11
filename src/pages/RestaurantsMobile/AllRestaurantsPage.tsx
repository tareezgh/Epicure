import { useState } from "react";
import RestaurantsCards from "../../components/Cards/CardsMobile/RestaurantsCards/RestaurantCard";
import FilterFunction from "../../components/Filters/FilterFunction";
import { FiltersFrame, PageTitle, RestaurantsSection } from "./style";
const AllRestaurantsPageMobile = () => {
  const [restaurantsFilter, setRestaurantsFilter] = useState<string>("All");
  const filters = ["All", "New", "Most Popular", "Open Now"];

  const handleData = (filter: string) => {
    setRestaurantsFilter(filter);
  };

  return (
    <>
      <PageTitle>Restaurants</PageTitle>

      <FiltersFrame>
        <FilterFunction myFilters={filters} handleData={handleData} />
      </FiltersFrame>

      <RestaurantsSection>
        <RestaurantsCards
          size="Default"
          page="AllRestaurants"
          filter={restaurantsFilter}
        />
      </RestaurantsSection>
    </>
  );
};

export default AllRestaurantsPageMobile;
