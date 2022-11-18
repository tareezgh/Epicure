import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="search-filed">
        <img
          className="search-icon-input"
          alt="search"
          src={require("../../assets/search-icon.png")}
        />
        <div className="input-line"></div>
        <input
          className="search-input"
          placeholder="Search for restaurant cuisine, chef"
        />
      </div>
    </>
  );
};

export default Search;
