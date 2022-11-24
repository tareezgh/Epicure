import React from "react";
import RestaurantCard from "../components/Cards/RestaurantCard/RestaurantCard";
import "./AllRestaurants.css";
const AllRestaurants = () => {
  const filters = document.querySelectorAll(".filters");

  const toggleFilter = (str: string) => {
    filters.forEach((filter) => {
      filter.classList.remove("filter-active");
      console.log("remove");
    });
    // const filter = document.querySelector(`filter-${str}`);
    // filter?.classList.toggle("filter-active");
  };

  return (
    <>
      <h2 className="allRestaurants-title">Restaurants</h2>

      <section className="filters-frame">
        <div className="filters filter-all filter-active">All</div>
        <div className="filters filter-new">New</div>
        <div className="filters filter-popular ">Most Popular</div>
        <div className="filters filter-open ">Open Now</div>
      </section>

      <section className="renderRestaurants">
        <RestaurantCard Size="Default"/>
      </section>
    </>
  );
};

export default AllRestaurants;
