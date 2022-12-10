import styled from "styled-components";

import searchIcon from "../../assets/search-icon.svg";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchContent = styled(FlexContainerColumn)<{
  page?: string;
  searchResult: string;
}>`
  ${(props) =>
    props.searchResult && props.page === "HeaderDesktop"
      ? ` transform: translateY(55px);`
      : ``}
`;

export const SearchField = styled(FlexContainerRow)`
  box-sizing: border-box;
  padding: 6px 12px;
  width: 315px;
  height: 30px;

  border: 0.5px solid #000000;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon,
})`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  cursor: pointer;
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
  color: #000000;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.29px;
  margin: 0 12px 0 4px;
  padding: 0;
  &:focus{
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
  }
`;



export const SearchResultBox = styled(FlexContainerColumn)`
  align-items: flex-start;
  padding: 16px 15px 16px 70px;
  gap: 10px;
  width: 230px;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Results = styled.h5<{
  type?: string; // title of result
}>`
  font-weight: ${(props) => (props.type === "Result" ? "400" : "200")};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.29px;
  margin: 0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
