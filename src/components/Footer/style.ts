import styled from "styled-components";

export const FooterContainer = styled.div<{
  windowType?: string;
}>`
  background: #ffffff;
  height: ${(props) => (props.windowType === "Desktop" ? "84px" : "202px")};

  ${(props) =>
    props.windowType === "Desktop"
      ? `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;`
      : `padding-left: 19px;`};
`;

export const FooterList = styled.div<{
  windowType?: string;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.windowType === "Desktop" ? "row" : "column"};
  align-items: flex-start;
  list-style: none;
  gap: 40px;
  ${(props) => (props.windowType === "Mobile" ? `margin-top: 40px;` : ``)};
`;

export const FooterLink = styled.a`
  line-height: 22px;
  letter-spacing: 1.92px;
`;
