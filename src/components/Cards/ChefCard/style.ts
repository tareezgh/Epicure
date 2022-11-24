import styled from "styled-components";

import chefImg from "../../../assets/yossi-img.png";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContent = styled.div`
  width: 335px;
  height: 262px;

  background: #000000;

  background-image: url(${chefImg});
  background-repeat: no-repeat;
  margin: 0 20px 24px 20px;
`;

export const CardInfo = styled(FlexContainerColumn)`
  align-items: center;
  padding: 0px;

  height: 51px;

  background: rgba(255, 255, 255, 0.8);
  transform: translateY(215px);
`;

export const ChefName = styled.h3`
  width: 335px;
  height: 47px;

  font-weight: 400;

  line-height: 47px;
  /* identical to box height, or 261% */
  text-align: center;
  letter-spacing: 2.67px;
  margin: 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
