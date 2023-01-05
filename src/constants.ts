export const url = "http://localhost:3001/api";

// Restaurant
export const getRestaurantsUrl = `${url}/restaurants/getRestaurants`;
export const getSingleRestaurantUrl = `${url}/restaurants/getRestaurant`;

// Chefs
export const getChefsUrl = `${url}/chefs/getChefs`;
export const getChefOfTheWeekUrl = `${url}/chefs/getChefOfTheWeek`; // not implemented

// Dishes
export const getDishesUrl = `${url}/dishes/getDishes`;

// Order
export const createOrderUrl = `${url}/orders/createOrder`;
export const getOrdersUrl = `${url}/orders/getOrders`;

// User
export const loginUrl = `${url}/auth/login`;
export const registerUrl = `${url}/auth/register`;
