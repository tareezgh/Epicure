import React from "react";

import "./DishCard.css";

const DishCard = () => {
  return (
    <>
      <div className="dish-card-content">
        <img
          className="dish-image"
          alt="dish"
          src={require("../../assets/claro-img-mobile.png")}
        />
        <div className="dish-card-info">
          <div className="dish-card-frame">
            <h3 className="dish-name">Pad Ki Mao</h3>
            <p className="dish-ingredients">
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic
              Chili Brown Coconut
            </p>
          </div>
          <img
            className="ingredient-icon"
            alt="dish"
            src={require("../../assets/spicy-icon.png")}
          />
          <div className="dish-price">
            <img
              className="currency-icon"
              alt="dish"
              src={require("../../assets/shekel-icon.png")}
            />
            <div className="price">88</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishCard;
