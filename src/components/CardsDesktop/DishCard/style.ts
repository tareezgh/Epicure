import styled from "styled-components";

import currencyIcon from "../../../assets/currency-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardContent = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Big" ? "380px" : "272px")};
  height: ${(props) => (props.size === "Big" ? "654px" : "413px")};
  padding: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardImage = styled.img<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Big" ? "380px" : "272px")};
  height: ${(props) => (props.size === "Big" ? "306px" : "172.73px")};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardFrame = styled(FlexContainerColumn)<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Big" ? "380px" : "272px")};
  height: ${(props) => (props.size === "Big" ? "372px" : "250.27px;")};
  gap: 16px;
  background: #f9f4ea;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const DishName = styled.h3<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `
      font-size: 40px;
      line-height: 47px;
  `
      : `
      font-size: 24px;
      line-height: 26px;
      `};

  font-weight: 400;
  letter-spacing: 2.4px;
  padding-top: 24px;
  margin: 0;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DishDescription = styled.p<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 295px;
      height: 176px;
      font-size: 24px;
      line-height: 30px;
  `
      : `width: 222px;
      font-size: 20px;
      line-height: 24px;
      `};

  // height: 136.27px;
  text-align: center;
  letter-spacing: 1.97px;

  margin: 8px 0 0 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SpicyIcon = styled.img`
  width: 40px;
  height: 31px;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const PriceFrame = styled(FlexContainerRow)<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 287px;
        gap: 12px;
      `
      : `width: 224px;
        gap: 8px;
    `};

  height: 30px;
  justify-content: flex-end;
  align-items: center;

  padding: 0px;
  margin: 8px 0 8px 0;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const Line = styled.div<{
  size?: string;
  second?: boolean;
}>`
  width: ${(props) => (props.size === "Big" ? "112px" : "82.5px")};

  height: 0px;

  border: 0.5px solid #979797;

  flex: none;
  order: ${(props) => (props.second ? "2" : "0")};

  flex-grow: 0;
`;

export const PriceAndIcon = styled(FlexContainerRow)<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 47px;
        gap: 4px;
      `
      : `
        width: 35px;
        gap: 2px;
    `};

  height: 30px;
  justify-content: center;
  align-items: flex-end;

  padding: 0px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CurrencyIcon = styled.img.attrs({
  src: currencyIcon,
})<{
  size?: string;
}>`
  width: ${(props) => (props.size === "Big" ? "14px" : "8px")};
  height: 19px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Price = styled.div<{
  size?: string;
}>`
  ${(props) =>
    props.size === "Big"
      ? `width: 29px;
    height: 30px;
    font-size: 24px;
`
      : `width: 25px;
    height: 30px;
    font-size: 20px;
    font-weight: 400;
    `};

  line-height: 30px;

  text-align: center;
  letter-spacing: 1.97px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
