import { useState } from "react";
import {
  EditInput,
  EditableCell,
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableRow,
} from "./style";

const AdminPageDesktop = () => {
  const [data, setData] = useState([
    { id: 1, value: "Data 1", editable: true },
    { id: 2, value: "Data 2", editable: false },
    { id: 3, value: "Data 3", editable: false },
  ]);

  const toggleEdit = (id: any) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            editable: !item.editable,
          };
        }
        return item;
      })
    );
  };

  const handleInputChange = (id: any, e: any) => {
    const value = e.target.value;
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            value: value,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableData>Header 1</TableData>
            <TableData>Header 2</TableData>
            <TableData>Header 3</TableData>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <EditableCell
                onClick={() => toggleEdit(item.id)}
                style={{
                  backgroundColor: item.editable ? "#ffffcc" : "inherit",
                }}
              >
                {item.editable ? (
                  <EditInput
                    type="text"
                    value={item.value}
                    onChange={(e) => handleInputChange(item.id, e)}
                  />
                ) : (
                  item.value
                )}
              </EditableCell>
              <EditableCell
                onClick={() => toggleEdit(item.id)}
                style={{
                  backgroundColor: item.editable ? "#ffffcc" : "inherit",
                }}
              >
                {item.editable ? (
                  <EditInput
                    type="text"
                    value={item.value}
                    onChange={(e) => handleInputChange(item.id, e)}
                  />
                ) : (
                  item.value
                )}
              </EditableCell>
              <EditableCell
                onClick={() => toggleEdit(item.id)}
                style={{
                  backgroundColor: item.editable ? "#ffffcc" : "inherit",
                }}
              >
                {item.editable ? (
                  <EditInput
                    type="text"
                    value={item.value}
                    onChange={(e) => handleInputChange(item.id, e)}
                  />
                ) : (
                  item.value
                )}
              </EditableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableData>Data 4</TableData>
            <TableData>Data 5</TableData>
            <TableData>Data 6</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default AdminPageDesktop;
