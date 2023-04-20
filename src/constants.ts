export const url = "http://localhost:3001/api";
// export const url = "https://us-central1-epicureserver-84e42.cloudfunctions.net/app/api";

// Restaurant
export const getRestaurantsUrl = `${url}/restaurants/getRestaurants`;
export const getSingleRestaurantUrl = `${url}/restaurants/getRestaurant`;

// Chefs
export const getChefsUrl = `${url}/chefs/getChefs`;
export const getChefOfTheWeekUrl = `${url}/chefs/getChefOfTheWeek`;

// Dishes
export const getDishesUrl = `${url}/dishes/getDishes`;
export const getDishesOfRestaurantUrl = `${url}/dishes/getDishesOfRestaurant`;

// Order
export const createOrderUrl = `${url}/orders/createOrder`;
export const getOrdersUrl = `${url}/orders/getOrders`;
export const getOrdersOfUserUrl = `${url}/orders/getOrdersOfUser`;
export const deleteOrderByIDUrl = `${url}/orders/deleteOrderById`;

export const checkoutOrderUrl = `${url}/orders/completeOrder`;

// User
export const loginUrl = `${url}/auth/login`;
export const registerUrl = `${url}/auth/register`;
