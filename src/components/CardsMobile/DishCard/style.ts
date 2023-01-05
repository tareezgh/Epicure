import styled from "styled-components";

import currencyIcon from "../../../assets/currency-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SlideRow = styled(FlexContainerRow)<{
  type?: string;
}>`
  width: 354px;
  height: ${(props) => (props.type === "Restaurants" ? "232.8px" : "388px")};
  padding: 0px;
  gap: 24px;
  align-items: flex-start;
  // overflow: hidden;
`;

export const CardContent = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "335px" : "245px")};

  height: ${(props) => (props.size === "Default" ? " 390.9px" : "388px")};
  padding: 0px;
  margin-left: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardImage = styled.img<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "335px" : "245px")};
  height: ${(props) => (props.size === "Default" ? "211.9px" : "152px")};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardFrame = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "335px" : "245px")};
  height: ${(props) => (props.size === "Default" ? "179px" : "236px")};

  gap: 16px;
  background: #f9f4ea;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const CardInfo = styled(FlexContainerColumn)`
  width: 209px;
  padding-left: 16px;
  gap: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DishName = styled.h3`
  height: 21px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 2.4px;

  padding-top: 16px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DishDescription = styled.p<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "303px;" : "209px;")};
  height: ${(props) => (props.size === "Default" ? "75px;" : "100px;")};

  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.8px;

  margin: 8px 0 0 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SignatureIcon = styled.img`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  // width: 30px;
  // height: 24px;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const PriceFrame = styled(FlexContainerRow)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Default" ? "303px;" : "32.11px;")};
  height: ${(props) => (props.size === "Default" ? "30px;" : "19px;")};

  justify-content: flex-end;
  align-items: center;

  padding-bottom: 16px;
  padding-left: 16px;

  gap: 4px;

  flex: none;
  order: 1;
`;

export const CurrencyIcon = styled.img.attrs({
  src: currencyIcon,
})`
  width: 8px;
  height: 8px;
  left: 0%;
  right: 10.4%;
  top: 5.15%;
  bottom: 34.21%;
`;

export const Price = styled.div`
  width: 20px;
  height: 19px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 1.97px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const RowSpace = styled.div`
  width: 256px;
  height: 0px;

  border: 0.5px solid #979797;
  margin-left: 12px;

  flex: none;
  order: 1;
  flex-grow: 1;
`;
