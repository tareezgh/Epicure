import styled from "styled-components";

import blackCloseIcon from "../../assets/black-close-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignInContainer = styled(FlexContainerColumn)<{
  page?: string;
}>`
  ${(props) =>
    props.page === "Desktop"
      ? `
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `
      : `
      top: 46px;
  `};
  position: fixed;
  gap: 40px;

  width: ${(props) => (props.page === "Desktop" ? "573px" : "100%")};
  height: auto;
  padding-bottom: 30px;
  z-index: 1;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CloseIcon = styled.img.attrs({
  src: blackCloseIcon,
})`
  width: 24px;
  height: 24px;
  margin: 10px;
  cursor: pointer;
`;

export const InfoFrame = styled(FlexContainerColumn)`
  padding: 40px 0 0 0;
  width: 351px;
  height: 242px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: 0 0 14px 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const SubTitle = styled.h4`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1.97px;
  margin: 0 0 40px 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const InputFiled = styled(FlexContainerColumn)`
  align-items: flex-start;
  padding: 0px;

  width: 327px;
  // height: 52px;
  border-bottom: 0.5px solid #000000;
  margin: 0 0 40px 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const InputTitle = styled.h5`
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1.97px;

  color: #000000;

  opacity: 0.4;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Input = styled.input`
  width: 327px;
  font-size: 14px;
  line-height: 18px;

  text-align: flex-start;
  letter-spacing: 1.97px;
  margin-bottom: 8px;
  color: #000000;
  border: none;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const InputEmail = styled(Input).attrs({
  placeholder: "Email address",
  type: "email",
})``;

export const InputPassword = styled(Input).attrs({
  placeholder: "Password",
  type: "password",
})``;

//

export const PrimaryFrame = styled(FlexContainerColumn)`
  padding: 0px;
  gap: 16px;

  width: 206px;
  height: 82px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ForgetQuestion = styled.h5`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1.97px;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

/////

export const RowSpace = styled(FlexContainerRow)`
  padding: 0px;
  gap: 12px;

  width: 292px;
  height: 18px;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const Line = styled.div`
  width: 126.5px;
  height: 0px;

  border: 0.5px solid #979797;

  flex: none;
  order: 0;
  flex-grow: 1;
`;
export const Or = styled.h6`
  width: 15px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1.97px;
  color: #979797;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
