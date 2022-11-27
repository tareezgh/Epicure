import styled from "styled-components";

import claroImg from "../../assets/claro-img-mobile.png";

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

export const PageTitle = styled.h2`
  height: 22px;
  margin: 60px 0 0 19.89px;
  line-height: 22px;
  letter-spacing: 1.92px;
  text-transform: uppercase;
`;

export const FiltersFrame = styled(FlexContainerRow)`
  width: 342px;
  height: 27px;
  margin: 24px 0 0 19.89px;
  padding: 0px;
  gap: 20px;
`;

export const Filter = styled.div<{
  active?: boolean;
}>`
  line-height: 22px;
  letter-spacing: 1.92px;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `font-weight: 400;
  border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);`};
`;

export const ChefsSection = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 25px;

  margin: 37px 0 0 0;
`;

//   Restaurant page  // 

export const RestaurantImage = styled.img.attrs({
  src: claroImg,
})`
  width: 100%;
  height: 272px;
  margin-top: 46px;
`;


export const RestaurantName = styled.h3`
  // width: 54px;
  height: 21px;

  font-weight: 400;
  line-height: 21px;
  letter-spacing: 2.67px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;


export const RestaurantManager = styled.h4`
  width: 104px;
  height: 20px;

  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.82px;

  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;