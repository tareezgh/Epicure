import styled from "styled-components";


export const Filter = styled.div<{
  active?: boolean;
}>`
  line-height: 22px;
  letter-spacing: 1.92px;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `font-weight: 400;
  border-bottom: 1.8px solid rgba(222, 146, 0, 0.9);`};
`;