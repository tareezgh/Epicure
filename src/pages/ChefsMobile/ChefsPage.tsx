import React from "react";
import ChefCard from "../../components/Cards/ChefCard/ChefCard";
import { Filter, FiltersFrame, PageTitle, ChefsSection } from "./style";
const ChefsPage = () => {
  return (
    <>
      <PageTitle>Chefs</PageTitle>

      <FiltersFrame>
        <Filter active={true}>All</Filter>
        <Filter active={false}>New</Filter>
        <Filter active={false}>Most Viewed</Filter>
        
      </FiltersFrame>

      <ChefsSection>
        <ChefCard />
      </ChefsSection>
    </>
  );
};

export default ChefsPage;
