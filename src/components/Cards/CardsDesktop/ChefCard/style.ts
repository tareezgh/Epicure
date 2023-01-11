import styled from "styled-components";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 1183.5px;
  margin: 40px auto 45px auto;
`;

export const CardsContainer = styled(FlexContainerRow)`
  width: 1183.5px;
  margin: 40px auto 45px auto;
`;

export const RestaurantsContainer = styled(FlexContainerColumn)`
  width: 1183.5px;
  margin: 40px auto 45px auto;
`;

export const SubTitle = styled.h2`
  width: 100%;
  height: 35px;
  font-size: 30px;
  line-height: 35px;
  text-align: start;
  letter-spacing: 1.25px;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardsFrame = styled(FlexContainerRow)`
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin: 40px auto 45px 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardContent = styled.div<{
  regular?: boolean;
}>`
  ${(props) =>
    props.regular
      ? `
      width: 378px;
      height: 372px;
`
      : `width: 478px;
      height: 372px;`}

  background: #000000;
`;

export const CardImage = styled.img<{
  regular?: boolean;
}>`
  ${(props) =>
    props.regular
      ? `
      width: 378px;
      height: 372px;
      margin: 0;
`
      : `width: 380px;
      height: 355px;
      margin: 17px 49px 0 49px;`}

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

export const CardInfo = styled(FlexContainerColumn)`
  justify-content: center;
  text-align: center;
  padding: 0px;
  height: 78px;
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-82px);
`;

export const ChefName = styled.h3`
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  letter-spacing: 2.67px;
  margin: 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const ChefsDescription = styled.p`
  width: 642px;
  height: 255px;

  margin-left: 63.5px;
  font-size: 24px;
  line-height: 35px;
  text-align: justify;
  letter-spacing: 1.25px;
`;
