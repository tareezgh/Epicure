import styled from "styled-components";

import fullStarIcon from "../../../assets/full-star-icon.svg";
import emptyStarIcon from "../../../assets/empty-star-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CardContent = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Big" ? "379px" : "231px")};
  height: ${(props) => (props.size === "Big" ? "405px" : "357px")};
  padding: 0px;
`;

export const CardImage = styled.img<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 379px; 
        height: 236px;`
      : `width: 231px; 
        height: 224px;`};

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardFrame = styled(FlexContainerColumn)<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 379px; 
      height: 169px; 
      justify-content: center;`
      : `width: 231px; 
      height: 133px; 
      justify-content: none;
      padding: 20px 0px 0px;
      `};

  align-items: center;
  gap: 8px;
  background: #f9f4ea;

  flex: none;
  order: 10;
  align-self: stretch;
  flex-grow: 0;
`;

export const CardInfo = styled(FlexContainerColumn)`
  justify-content: center;
  align-items: center;

  height: 85px;

  gap: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantName = styled.h3<{
  size?: string;
}>`
  font-weight: 400;
  font-size: ${(props) => (props.size === "Big" ? "40px" : "30px")};
  line-height: 47px;
  letter-spacing: 2.67px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantManager = styled.h4`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 1.97px;

  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const StarsFrame = styled(FlexContainerRow)`
  width: 216px;
  height: 40px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Star = styled.div<{
  active?: boolean;
}>`
  width: 40px;
  height: 40px;
  left: 81.5px;
  top: 111px;
  background-image: url(${(props) =>
    props.active ? fullStarIcon : emptyStarIcon});

  background-repeat: no-repeat;
`;
