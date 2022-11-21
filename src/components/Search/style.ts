import styled from "styled-components";

import searchIcon from "../../assets/search-icon.svg";

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchField = styled(FlexContainerRow)`
  box-sizing: border-box;
  padding: 6px 12px;
  width: 315px;
  height: 30px;

  border: 0.5px solid #000000;
  border-radius: 4px;
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon,
})`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const InputLine = styled.div`
  height: 14px;
  border: 0.5px solid #000000;
`;

export const SearchInput = styled.input.attrs({
  placeholder: "Search for restaurant cuisine, chef",
})`
  width: 241px;
  height: 15px;

  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.29px;
  color: #000000;
  margin: 0 12px 0 4px;

  padding: 0;
`;

// on focus  opacity: 0.2;
