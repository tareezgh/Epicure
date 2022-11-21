import styled from "styled-components";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterContainer = styled.div`
  height: 202px;
  top: 46px;
  padding-left: 19px;
  background: #ffffff;
`;

export const FooterList = styled(FlexContainerColumn)`
  list-style: none;
  margin-top: 40px;
  gap: 40px;
`;

export const FooterLink = styled.a`
  line-height: 22px;
  letter-spacing: 1.92px;
  color: #000000;
`;
