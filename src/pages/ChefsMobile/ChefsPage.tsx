import { useState } from "react";
import ChefCard from "../../components/Cards/CardsMobile/ChefCard/ChefCard";
import FilterFunction from "../../components/Filters/FilterFunction";
import { FiltersFrame, PageTitle, ChefsSection } from "./style";
const ChefsPageMobile = () => {
  const [chefsFilter, setChefsFilter] = useState<string>("All");
  const filters = ["All", "New", "Most Viewed"];

  const handleData = (filter: string) => {
    setChefsFilter(filter);
  };

  return (
    <>
      <PageTitle>Chefs</PageTitle>

      <FiltersFrame>
        <FilterFunction myFilters={filters} handleData={handleData} />
      </FiltersFrame>

      <ChefsSection>
        <ChefCard filter={chefsFilter} />
      </ChefsSection>
    </>
  );
};

export default ChefsPageMobile;
