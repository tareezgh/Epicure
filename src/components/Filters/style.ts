import styled from "styled-components";

export const Filter = styled.div<{
  active?: boolean;
  page?: string;
}>`
  letter-spacing: 1.92px;
  flex: none;
  flex-grow: 0;
  cursor: pointer;

  font-size: ${(props) => (props.page === "Desktop" ? "24px" : "18px")};
  line-height: ${(props) => (props.page === "Desktop" ? "29px" : "22px")};
`;
