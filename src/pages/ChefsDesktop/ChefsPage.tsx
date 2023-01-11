import { useState } from "react";

import ChefCard from "../../components/Cards/CardsDesktop/ChefCard/ChefCard";
import FilterFunction from "../../components/Filters/FilterFunction";
import { FiltersFrame, ChefsSection, RowSection } from "./style";

const ChefsPageDesktop = () => {
  const [chefsFilter, setChefsFilter] = useState<string>("All");
  const filters = ["All", "New", "Most Viewed"];

  const handleData = (filter: string) => {
    setChefsFilter(filter);
  };

  return (
    <>
      <FiltersFrame>
        <FilterFunction myFilters={filters} handleData={handleData} />
      </FiltersFrame>

      <ChefsSection>
        <RowSection>
          <ChefCard filter={chefsFilter} />
        </RowSection>
      </ChefsSection>
    </>
  );
};

export default ChefsPageDesktop;
