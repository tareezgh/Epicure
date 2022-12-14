import { useEffect, useState } from "react";
import { Filter } from "./style";

interface Params {
  myFilters: string[];
  page?: string;
  handleData: (str: string) => void;
}

const FilterFunction = (filtersProps: Params) => {
  const [myFilter, setMyFilter] = useState<string>(" ");

  useEffect(() => {
    filtersProps.page === "Header"
      ? setMyFilter(" ")
      : setMyFilter(filtersProps.myFilters[0]);
  }, []);

  const renderData = (
    <>
      {filtersProps.myFilters.map((filter: string, key: number) => (
        <Filter
          key={key}
          onClick={() => {
            setMyFilter(filter);
            filtersProps.handleData(filter);
          }}
          style={{
            fontWeight: myFilter === filter ? "400" : "200",
            borderBottom:
              myFilter === filter ? "1.8px solid rgba(222, 146, 0, 0.9)" : "",
          }}
          page={filtersProps.page}
        >
          {filter}
        </Filter>
      ))}
    </>
  );

  return <>{renderData}</>;
};

export default FilterFunction;
