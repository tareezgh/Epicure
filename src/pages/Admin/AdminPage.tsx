import { useState } from "react";
import { useSelector } from "react-redux";
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
  const restaurantsData = useSelector(
    (state: any) => state.restaurants.allRestaurants
  );
  const dishesData = useSelector((state: any) => state.dishes.allDishes);
  const chefsData = useSelector((state: any) => state.chefs.allChefs);

  const restaurantTableHeaders = [
    "Restaurant Name",
    "Chef",
    "Rating",
    "Popular",
    "New",
    "Open",
    "Image",
  ];
  const dishesTableHeaders = [
    "Dish Name",
    "Restaurant",
    "Type",
    "Signature",
    "Price",
    "Description",
    "Image",
  ];
  const chefsTableHeaders = [
    "Chef Name",
    "Restaurants",
    "Viewed",
    "Chef Of The Week",
    "Description",
    "Image",
  ];

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

  const renderRestaurantsTable = (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {restaurantTableHeaders.map((header: any, key: number) => (
              <TableData key={key}>{header}</TableData>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {restaurantsData.map((rest: any, key: number) => (
            <TableRow key={key}>
              {/* <>{console.log(rest)}</> */}
              <TableData>{rest.name}</TableData>
              <TableData>{rest.chefName}</TableData>
              <TableData>{rest.restaurantRating}</TableData>
              <TableData>{rest.isPopular}</TableData>
              <TableData>{rest.isNewRestaurant}</TableData>
              <TableData>{rest.isOpen}</TableData>
              <TableData>{rest.image}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );

  const renderDishesTable = (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {dishesTableHeaders.map((header: any, key: number) => (
              <TableData key={key}>{header}</TableData>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dishesData.map((dish: any, key: number) => (
            <TableRow key={key}>
              {/* <>{console.log(dish)}</> */}
              <TableData>{dish.name}</TableData>
              <TableData>{dish.restaurant}</TableData>
              <TableData>{dish.type}</TableData>
              <TableData>{dish.signature}</TableData>
              <TableData>{dish.price}</TableData>
              <TableData>{dish.description}</TableData>
              <TableData>{dish.image}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );

  const renderChefsTable = (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {chefsTableHeaders.map((header: any, key: number) => (
              <TableData key={key}>{header}</TableData>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {chefsData.map((chef: any, key: number) => (
            <TableRow key={key}>
              {/* <>{console.log(chef)}</> */}
              <TableData>{chef.chefName}</TableData>
              <TableData>{chef.restaurants}</TableData>
              <TableData>{chef.isViewed}</TableData>
              <TableData>{chef.isChefOfTheWeek}</TableData>
              <TableData>{chef.description}</TableData>
              <TableData>{chef.image}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );

  return (
    <>
      {renderRestaurantsTable}
      {renderDishesTable}
      {renderChefsTable}
    </>
  );
};

export default AdminPageDesktop;

/* <EditableCell
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
              </EditableCell> */
