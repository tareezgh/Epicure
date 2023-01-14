import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IDish } from "../../Interfaces/IDish";
import { IRestaurant } from "../../Interfaces/IRestaurant";
import {
  SearchContent,
  SearchField,
  SearchIcon,
  InputLine,
  SearchInput,
  SearchResultBox,
  Results,
} from "./style";

interface Params {
  page?: string;
  toggleSearch?: () => void;
}

const Search = (searchProps: Params) => {
  const navigate = useNavigate();
  const restaurantsData = useSelector(
    (state: any) => state.restaurants.allRestaurants
  );
  const dishesData = useSelector((state: any) => state.dishes.allDishes);
  const [searchResult, setSearchResult] = useState("");
  const searchResultBoxStyle = {
    transform: `${
      searchResult && searchProps.page === "HeaderDesktop"
        ? " translateY(86px)"
        : ""
    }`,
  };

  const renderRestaurantsData = (
    <>
      {restaurantsData
        .filter((restaurant: IRestaurant) =>
          restaurant.name.toLowerCase().includes(searchResult.toLowerCase())
        )
        .map((restaurant: IRestaurant, key: number) => (
          <Results
            type="Result"
            key={key}
            onClick={() => {
              navigate(`/Restaurant${restaurant.name}`);
              searchProps.toggleSearch && searchProps.toggleSearch(); // close search bar
            }}
          >
            {restaurant.name}
          </Results>
        ))}
    </>
  );

  const renderDishesData = (
    <>
      {dishesData
        .filter((dish: IDish) =>
          dish.name.toLowerCase().includes(searchResult.toLowerCase())
        )
        .map((dish: IDish, key: number) => (
          <Results type="Result" key={key}>
            {dish.name}
          </Results>
        ))}
    </>
  );

  const renderSearchResultBox = (
    <>
      <SearchResultBox page={searchProps.page}>
        <Results type="Title" page={searchProps.page}>
          Restaurants:
        </Results>
        {renderRestaurantsData}
        <Results type="Title" page={searchProps.page}>
          Cuisine:
        </Results>
        {renderDishesData}
      </SearchResultBox>
    </>
  );

  const renderSearchFieldHeaderDesktop = (
    <>
      <SearchField>
        <InputLine />
        <SearchInput onChange={(text) => setSearchResult(text.target.value)} />
        <SearchIcon
          onClick={() => {
            searchProps.toggleSearch && searchProps.toggleSearch(); // close search bar
          }}
        />
      </SearchField>
    </>
  );

  const renderSearchFieldHomePage = (
    <>
      <SearchField page={searchProps.page}>
        <SearchIcon page={searchProps.page} />
        <>
          {searchProps.page === "HomePageMobile" ||
          searchProps.page === "HomePageDesktop" ? (
            ""
          ) : (
            <InputLine />
          )}
        </>
        <SearchInput
          page={searchProps.page}
          onChange={(text) => setSearchResult(text.target.value)}
        />
      </SearchField>
    </>
  );

  return (
    <>
      <SearchContent style={searchResultBoxStyle}>
        {searchProps.page === "HeaderDesktop"
          ? renderSearchFieldHeaderDesktop
          : renderSearchFieldHomePage}

        {searchResult ? renderSearchResultBox : ""}
      </SearchContent>
    </>
  );
};

export default Search;
