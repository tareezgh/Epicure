import styled from "styled-components";

import cartIcon from "../../assets/cart-icon.svg";
import currencyIcon from "../../assets/currency-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CartContainer = styled(FlexContainerColumn)<{
  page?: string;
  type?: string;
  checkout?: boolean;
}>`
  width: ${(props) => (props.page === "Desktop" ? "497px" : "100%")};
  top: ${(props) => (props.page === "Desktop" ? "64px" : "46px")};
  top: ${(props) => (props.checkout ? "111px" : "")};
  right: ${(props) => (props.page === "Desktop" ? "0" : "")};

  height: ${(props) =>
    props.type === "Empty" && props.page !== "Desktop" ? "218px" : "514px"};

  height: ${(props) => (props.page === "Desktop" ? "779px" : "")};
  height: ${(props) => (props.checkout ? "708px" : "")};
  gap: 20px;
  position: ${(props) => (props.checkout ? "" : "absolute")};
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
  overflow-y: scroll;
`;

export const OrderSummaryContainer = styled(CartContainer)`
  width: 497px;
  height: 779px;
  margin: 500px 50% 0 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DishesContainer = styled(FlexContainerColumn)`
  width: 100%;
  height: 250px;
  gap: 12px;
  overflow-y: scroll;
`;

export const CartIcon = styled.img.attrs({
  src: cartIcon,
})<{
  page?: string;
}>`
  width: 45px;
  height: 45px;
  margin-top: 63px;
  margin: ${(props) => (props.page === "Desktop" ? "20% 0 0 0" : "")};
`;

export const CartStatus = styled.h3`
  width: 145px;
  height: 19px;

  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 1.97px;
  text-transform: uppercase;

  color: #000000;
`;

export const Title = styled.h3<{
  page?: string;
}>`
  font-weight: 400;
  font-size: ${(props) => (props.page === "Desktop" ? "32px" : "20px")};
  line-height: ${(props) => (props.page === "Desktop" ? "35px" : "24px")};

  align-items: center;
  text-align: center;

  letter-spacing: ${(props) =>
    props.page === "Desktop" ? "1.25px" : "2.67px"};
  text-transform: uppercase;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SummaryFrame = styled(FlexContainerRow)`
  padding: 0px;
  gap: 4px;
  margin-top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// ********************//
// ********************//

export const MainFrame = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 4px;
  margin-top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RestaurantName = styled.h3`
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.97px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardContent = styled(FlexContainerRow)`
  width: 340px;
  height: 96px;
  padding: 0px;
  justify-content: flex-start;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardImage = styled.img<{
  size?: string;
}>`
  width: 96px;
  height: 96px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardFrame = styled(FlexContainerColumn)`
  padding: 12px 12px 12px 24px;
  width: 208px;
  height: 72px;
  align-items: flex-start;
  background: #f9f4ea;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const InfoFrame = styled(FlexContainerRow)`
  gap: 10px;
  text-align: flex-start;
  letter-spacing: 2.67px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Quantity = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DishName = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ChangesFrame = styled(FlexContainerRow)`
  width: auto;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 12px;
  line-height: 16px;
  margin-top: 8px;
  letter-spacing: 1.23px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// -----Desktop-----//
// ********************//

export const InfoFrameDesktop = styled(InfoFrame)`
  gap: 12px;
  height: 37px;
`;

export const QuantityDesktop = styled(FlexContainerColumn)`
  box-sizing: border-box;
  justify-content: center;
  margin: auto 0;
  gap: 10px;

  width: 31px;
  height: 31px;

  border: 0.571429px solid #979797;
  border-radius: 3.42857px;

  font-weight: 400;
  font-size: 18.1191px;
  line-height: 18px;

  color: #de9200;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const NameFrame = styled(FlexContainerColumn)`
  gap: 6px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DishNameDesktop = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const CommentInput = styled.textarea`
  box-sizing: border-box;
  width: 358px;
  height: 122px;

  font-size: 12px;
  line-height: 15px;

  letter-spacing: 1.29px;

  color: #979797;

  border: 0.6px solid #979797;
  border-radius: 3.42857px;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:active,
  focus {
    color: #000000;
  }
`;

// ********************//
// ********************//

export const PriceFrame = styled(FlexContainerRow)`
  justify-content: flex-end;
  padding: 0px;
  gap: 2px;
  height: 14px;
  margin-right: 12px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 1;
`;

export const CurrencyIcon = styled.img.attrs({
  src: currencyIcon,
})`
  width: 8px;
  height: 22px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Price = styled.div`
  width: 20px;
  height: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1.97px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const PriceDesktop = styled(Price)`
  height: 13px;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 1.42278px;
  color: #de9200;
`;

// ********************//
// ********************//

export const QuantityFrame = styled(FlexContainerRow)`
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  gap: 15px;
  width: 129.84px;
  height: 31px;
  background: #ffffff;
  border-radius: 3.42857px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const OperationFrame = styled.div`
  width: 21px;
  height: 21px;
  background: #f9f4ea;
  border-radius: 50%;
  justify-content: center;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Minus = styled.div`
  width: 13px;
  height: 0;

  margin: auto;
  transform: translateY(10px);
  border: 0.5px solid #000000;
  cursor: pointer;
`;

export const DeleteIcon = styled.img.attrs({
  src: deleteIcon,
})`
  width: 15.84px;
  height: 19px;

  flex: none;
  order: 3;
  flex-grow: 0;
`;
