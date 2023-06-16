import styled from "styled-components";

export const Table = styled.table`
  width: auto;
  border-collapse: collapse;
  margin: 100px auto;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const EditableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  position: relative;
  cursor: pointer;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 4px 8px;
`;
