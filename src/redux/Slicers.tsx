import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    allRestaurants: [],
    restaurant: {},
    dishes: [],
  },
  reducers: {
    setAllRestaurants: (state, action) => {
      state.allRestaurants = action.payload;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setRestaurantDishes: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

export const dishSlice = createSlice({
  name: "dishes",
  initialState: {
    allDishes: [],
  },
  reducers: {
    setDishes: (state, action) => {
      state.allDishes = action.payload;
    },
  },
});

export const chefSlice = createSlice({
  name: "chefs",
  initialState: {
    allChefs: [],
    chefOfTheWeek: [],
  },
  reducers: {
    setChefs: (state, action) => {
      state.allChefs = action.payload;
    },
    setChefOfTheWeek: (state, action) => {
      state.chefOfTheWeek = action.payload;
    },
  },
});

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    allOrders: [],
    userOrders: [],
    counter: 0,
  },
  reducers: {
    setOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setUserOrders: (state, action) => {
      state.userOrders = action.payload;
    },
    setOrdersNumber: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    restaurants: [],
    totalPrice: 0,
  },
  reducers: {
    setCheckoutRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    setCheckoutTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    email: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllRestaurants, setRestaurant, setRestaurantDishes } =
  restaurantSlice.actions;
export const { setDishes } = dishSlice.actions;
export const { setChefs, setChefOfTheWeek } = chefSlice.actions;
export const { setOrders, setUserOrders, setOrdersNumber } = orderSlice.actions;
export const { setCheckoutRestaurants, setCheckoutTotalPrice } =
  checkoutSlice.actions;
export const { setUser } = userSlice.actions;
