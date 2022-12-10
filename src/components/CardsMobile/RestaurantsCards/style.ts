import styled from "styled-components";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SlideRow = styled.div<{
  type?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 354px;
  height: ${(props) => (props.type === "Restaurants" ? "232.8px" : "388px")};
  padding: 0px;
  gap: 24px;
 
`;

export const CardContent = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "334px" : "245px")};
  height: ${(props) => (props.size === "Default" ? "288px" : "232.8px")};
  padding: 0px;
  margin-left: 20px;
`;

export const CardImage = styled.img<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "334px" : "245px")};
  height: ${(props) => (props.size === "Default" ? "207px" : "151.8px")};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;


export const CardFrame = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "334px" : "245px")};
  height: 81px;
  gap: 10px;
  background: #f9f4ea;

  flex: none;
  order: 12;
  align-self: stretch;
  flex-grow: 0;
`;

export const CardInfo = styled(FlexContainerColumn)`
  height: 49px;
  padding-top: 16px;
  padding-left: 16px;
  gap: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantName = styled.h3`
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 2.67px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const RestaurantManager = styled.h4`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.82px;

  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
