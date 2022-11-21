import styled from "styled-components";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HamburgerContainer = styled(FlexContainerColumn)`
  width: 100%;
  height: 327px;

  top: 46px;
  z-index: 1;
  position: fixed;
  padding: 40px 0 0 0;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`;

const HamburgerLink = styled.a`
  text-decoration: none;
  line-height: 22px;
  letter-spacing: 1.92px;
  color: #000000;
  padding-left: 20px;
`;

export const RestaurantsLink = styled(HamburgerLink).attrs({
  href: "/AllRestaurants",
})`
  margin-bottom: 24px;
`;

export const ChefsLink = styled(HamburgerLink).attrs({
  href: "#",
})`
  margin-bottom: 40px;
`;

export const SpaceLine = styled.div`
  width: 375px;
  height: 0px;
  left: -1px;
  top: 194px;

  border: 1px solid #f2f2f2;
`;
