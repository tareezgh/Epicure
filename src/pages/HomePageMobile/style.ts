import styled from "styled-components";

import epicureLogo from "../../assets/Epicure-logo.png";
import heroImage from "../../assets/hero-img-mobile.png";

import spicyIcon from "../../assets/spicy-icon-small.svg";
import vegetarianIcon from "../../assets/vegetarian-icon-small.svg";
import veganIcon from "../../assets/vegan-icon-small.svg";

import arrowIcon from "../../assets/arrow-icon.svg";
import googleIcon from "../../assets/google-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeroContainer = styled.section`
  width: 100%;
  height: 273px;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
`;

export const HeroContent = styled(FlexContainerColumn)`
  width: 335px;
  height: 144px;
  align-items: center;
  gap: 18px;
  margin: 46px 0 0 20px;
  transform: translateY(65px);
  background: rgba(255, 255, 255, 0.88);
`;

// Titles  //

const GeneralTitle = styled.h2`
  line-height: 194%; /* identical to box height, or 35px */
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const HeroTitle = styled(GeneralTitle)`
  width: 315px;
  height: 64px;
  margin: 0;
  padding-top: 16px;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: 1.9px;
  text-transform: none;
`;

export const RestaurantsTitle = styled(GeneralTitle)`
  width: 326px;
  margin: 48px 0 17px 20px;
  line-height: 133%;
  /* identical to box height, or 24px */
`;

export const DishesTitle = styled(GeneralTitle)`
  width: 190px;
  height: 35px;
  margin: 48px 0 17px 20px;
`;

export const IngredientsTitle = styled(GeneralTitle)`
  width: 190px;
  height: 35px;
  margin: 0;
`;

export const ChefsTitle = styled(GeneralTitle)`
  width: 186px;
  height: 35px;
  margin: 32px 0 16px 20px;
`;

export const AboutUsTitle = styled(GeneralTitle)`
  width: 101px;
  height: 35px;
  letter-spacing: 1.18px;
  margin: 20px 0 16px 20px;
`;

// Restaurants  //

export const RestaurantsContainer = styled.section``;

export const LinkAllContainer = styled(FlexContainerRow)<{
  type?: string;
}>`
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: ${(props) => (props.type === "Restaurants" ? "172px" : "126px")};

  height: 35px;
  margin: ${(props) =>
    props.type === "Restaurants" ? "18px 0 0 20px" : "18px 0 48px 20px"};
`;

const LinkAll = styled.a`
  height: 35px;

  font-weight: 400;
  font-size: 16px;
  line-height: 219%;
  /* identical to box height, or 35px  */
  text-align: right;
  letter-spacing: 1.85px;
  text-transform: capitalize;
  text-decoration: none;
`;

export const LinkAllRestaurants = styled(LinkAll).attrs({
  href: "/AllRestaurants",
})`
  width: 136px;
`;

export const LinkAllDishes = styled(LinkAll).attrs({
  href: "",
})`
  width: 126px;
`;

export const ArrowImage = styled.img.attrs({
  src: arrowIcon,
})`
  width: 24px;
  height: 24px;
`;

export const DishesContainer = styled.section``;

// Ingredients

export const IngredientsContainer = styled(FlexContainerColumn)`
  width: 100%;
  height: 584px;
  justify-content: center;
  align-items: center;

  gap: 32px;
  padding-bottom: 24px;
  background: #fafafa;
`;

export const IngredientsFrame = styled(FlexContainerColumn)<{
  type?: string;
}>`
  align-items: center;
  padding: 0px;
  margin-top: 32px;
  gap: 32px;

  width: 136px;
  height: 102.98px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SpicyIcon = styled.img.attrs({
  src: spicyIcon,
})`
  width: 46.42px;
  height: 35.98px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const VegetarianIcon = styled.img.attrs({
  src: vegetarianIcon,
})`
  width: 56px;
  height: 56px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const VeganIcon = styled.img.attrs({
  src: veganIcon,
})`
  width: 56px;
  height: 56px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const IngredientName = styled.h4`
  width: 136px;
  height: 35px;

  line-height: 167%;
  /* or 30px */
  text-align: center;
  letter-spacing: 1.97px;

  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// Chefs
export const ChefsContainer = styled.section`
  padding-top: 16px;
  padding-bottom: 48px;
`;

export const AboutUsContainer = styled(FlexContainerColumn)`
  justify-content: center;
  align-items: none;
  width: 100%;
  height: 867px;
  left: -1px;
  background: #fafafa;
`;

export const EpicureLogo = styled.img.attrs({
  src: epicureLogo,
})`
  width: 102px;
  height: 95px;

  margin-bottom: 32px;
  margin-left: 20px;
`;

export const DownloadFrame = styled(FlexContainerColumn)`
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 180px;
  height: 120px;
  margin: 0 0 48px 20px;
`;

export const Frame = styled(FlexContainerRow)`
  align-items: center;
  box-sizing: border-box;
  padding: 7px 12px;
  gap: 7px;

  width: 180px;
  height: 52px;

  border: 0.5px solid #000000;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const InsideFrame = styled(FlexContainerColumn)`
  padding: 0px;

  width: 130px;
  height: 38px;
  align-items: center;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Hint = styled.div`
  width: 130px;
  height: 18px;

  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  /* identical to box height, or 18px */
  text-align: center;
  letter-spacing: 1.29px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Platform = styled.div`
  width: 130px;
  height: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  /* identical to box height, or  20px */
  text-align: center;
  letter-spacing: 1.29px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const GoogleIcon = styled.img.attrs({
  src: googleIcon,
})``;
export const AppleIcon = styled.img.attrs({
  src: appleIcon,
})``;

export const FirstParagraph = styled.p`
  width: 331px;
  height: 280px;

  line-height: 28px;
  /* or 156% */
  letter-spacing: 2.14px;

  margin: 0 0 1px 20px;
`;

export const SecondParagraph = styled.p`
  width: 306px;
  height: 168px;
  line-height: 28px;
  /* or 156% */
  letter-spacing: 2.14px;
  margin: 0 0 0 20px;
`;
