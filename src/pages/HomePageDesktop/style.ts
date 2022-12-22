import styled from "styled-components";

import epicureLogo from "../../assets/Epicure-logo.png";
import arrowIcon from "../../assets/arrow-icon.svg";
import googleIcon from "../../assets/google-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";

import spicyIcon from "../../assets/spicy-icon-big.svg";
import vegetarianIcon from "../../assets/vegetarian-icon-big.svg";
import veganIcon from "../../assets/vegan-icon-big.svg";

import heroImage from "../../assets/hero-img-desktop.png";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

// Containers  //

export const HeroContainer = styled.section`
  width: 100%;
  height: 696px;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  margin: 64px auto 80px auto;
`;

export const RestaurantsContainer = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 40px;
  margin: 40px auto 80px auto;
  width: 1185px;
  height: 480px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DishesContainer = styled.section`
  width: 1185px;
  margin: 40px auto 80px auto;
`;

export const IngredientsContainer = styled(FlexContainerColumn)`
  width: 100%;
  height: 265px;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  margin-bottom: 80px;
`;

export const ChefsContainer = styled.section``;

export const AboutUsContainer = styled(FlexContainerRow)`
  width: 100%;
  left: -1px;
  background: #fafafa;
`;

export const LinkAllContainer = styled(FlexContainerRow)`
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 35px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// Titles  //

const GeneralTitle = styled.h2`
  line-height: 194%;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const HeroTitle = styled(GeneralTitle)`
  width: 402px;
  height: 80px;
  margin: 0;
  padding-top: 37px;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 1.9px;
  text-transform: none;
`;

export const Title = styled(GeneralTitle)`
  width: 100%;
  height: 35px;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 1.25px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const AboutUsTitle = styled(GeneralTitle)`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 2.14px;
  margin: 0;
`;

// Generals //

export const CardsFrame = styled(FlexContainerRow)`
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// Hero  //

export const HeroContent = styled(FlexContainerColumn)`
  width: 776px;
  height: 221px;
  align-items: center;
  gap: 18px;
  margin: 46px auto 0 auto;
  transform: translateY(236px);
  background: rgba(255, 255, 255, 0.88);
`;

// Restaurants  //

export const LinkAllRestaurants = styled.a.attrs({
  href: "/AllRestaurants",
})`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;

  text-align: right;
  letter-spacing: 2px;
  text-transform: capitalize;
`;

export const ArrowImage = styled.img.attrs({
  src: arrowIcon,
})`
  width: 24px;
  height: 24px;
`;

// Ingredients

export const IngredientsIconsFrame = styled(FlexContainerRow)`
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 488px;
  height: 127px;
  margin-top: 10px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const IngredientsFrame = styled(FlexContainerColumn)<{
  type?: string;
}>`
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 136px;
  height: 127px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const IngredientsIcon = styled.img`
  width: 77.42px;
  height: 60px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const IngredientName = styled.h4`
  height: 35px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 1.97px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// Chefs

export const ChefsDescription = styled.p`
  width: 335px;
  height: 252px;

  margin: 24px 0 0 20px;
  line-height: 28px;
  text-align: justify;
  letter-spacing: 1.25px;
`;

// About us

export const InfoColumn = styled(FlexContainerColumn)`
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 917.78px;
  margin: 40px auto 40px auto;
  padding-left: 20px;
`;

export const Paragraph = styled.p`
  width: 569px;
  // height: 330px;

  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2.14px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const EpicureLogo = styled.img.attrs({
  src: epicureLogo,
})`
  width: 178.22px;
  height: 166px;
  margin: auto;
  margin-left: 0;
`;

export const DownloadFrame = styled(FlexContainerRow)`
  width: 376px;
  height: 52px;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  flex: none;
  order: 2;
  flex-grow: 0;
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

  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

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
