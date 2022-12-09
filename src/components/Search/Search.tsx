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
  const restaurantsData = useSelector((state: any) => state.restaurants.value);
  const dishesData = useSelector((state: any) => state.dishes.value);
  const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();

  const renderRestaurantsData = (
    <>
      {restaurantsData
        .filter((restaurant: IRestaurant) =>
          restaurant.name.includes(searchResult)
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
        .filter((dish: IDish) => dish.name.includes(searchResult))
        .map((dish: IDish, key: number) => (
          <Results type="Result" key={key}>
            {dish.name}
          </Results>
        ))}
    </>
  );

  return (
    <>
      <SearchContent page={searchProps.page} searchResult={searchResult}>
        {searchProps.page === "HeaderDesktop" ? (
          <SearchField>
            <InputLine />
            <SearchInput
              onChange={(text) => setSearchResult(text.target.value)}
            />
            <SearchIcon
              onClick={() => {
                searchProps.toggleSearch && searchProps.toggleSearch(); // close search bar
              }}
            />
          </SearchField>
        ) : (
          <SearchField>
            <SearchIcon />
            <>{searchProps.page === "HomePage" ? "" : <InputLine />}</>
            <SearchInput
              onChange={(text) => setSearchResult(text.target.value)}
            />
          </SearchField>
        )}

        {searchResult !== "" ? (
          <SearchResultBox>
            <Results type="Title">Restaurants:</Results>
            {renderRestaurantsData}
            <Results type="Title">Cuisine:</Results>
            {renderDishesData}
          </SearchResultBox>
        ) : (
          ""
        )}
      </SearchContent>
    </>
  );
};

export default Search;
