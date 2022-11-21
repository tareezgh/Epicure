import React from "react";

import "./DishCard.css";
import coinIcon from "../../assets/coin-icon.svg";
import spicyIcon from "../../assets/spicy-icon-small.svg";
import vegetarianIcon from "../../assets/vegetarian-icon-small.svg";
import veganIcon from "../../assets/vegan-icon-small.svg";

import claroImg from "../../assets/claro-img-mobile.png";

const DishCard = () => {
  return (
    <>
      <div className="dish-card-content">
        <img className="dish-image" alt="dish" src={claroImg} />
        <div className="dish-card-info">
          <div className="dish-card-frame">
            <h3 className="dish-name">Pad Ki Mao</h3>
            <p className="dish-ingredients">
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic
              Chili Brown Coconut
            </p>
          </div>
          <img className="ingredient-icon" alt="dish" src={spicyIcon} />
          <div className="dish-price">
            <img className="currency-icon" alt="dish" src={coinIcon} />
            <div className="price">88</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishCard;
