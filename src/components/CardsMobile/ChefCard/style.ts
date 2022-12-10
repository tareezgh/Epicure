import styled from "styled-components";

interface chefImg {
  imgUrl: string;
}

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsContainer = styled.section``;

export const CardContent = styled.div<{
  imgUrl: string;
}>`
  width: 335px;
  height: 262px;
  background: #000000;
  background-image: url(${(props: chefImg) => props.imgUrl});
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
  font-weight: 400;
  line-height: 261%;
  text-align: center;
  letter-spacing: 2.67px;
  margin: 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const ChefsDescription = styled.p`
  width: 335px;
  height: 252px;

  margin: 24px 0 0 20px;
  line-height: 28px;
  /* or 156% */
  text-align: justify;
  letter-spacing: 1.25px;
`;
