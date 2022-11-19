import React from "react";

import "./RestaurantCard.css";

const RestaurantCard = () => {
  return (
    <>
      <div className="restaurant-card-content">
        <img
          className="restaurant-image"
          alt="restaurant"
          src={require("../../assets/claro-img-mobile.png")}
        />
        <div className="card-info">
          <div className="card-frame">
            <h3 className="restaurant-name">Claro</h3>
            <h4 className="restaurant-manger">Ran Shmueli</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;