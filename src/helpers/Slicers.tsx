import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: [],
    restaurant: {},
  },
  reducers: {
    setAllRestaurants: (state, action) => {
      state.value = action.payload;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});


export const dishSlice = createSlice({
  name: "dishes",
  initialState: {
    value: [],
  },
  reducers: {
    setDishes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const chefSlice = createSlice({
  name: "chefs",
  initialState: {
    value: [],
  },
  reducers: {
    setChefs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    value: [],
    counter: 0,
  },
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload;
    },
    setOrdersNumber: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllRestaurants, setRestaurant } = restaurantSlice.actions;
export const { setDishes } = dishSlice.actions;
export const { setChefs } = chefSlice.actions;
export const { setOrders, setOrdersNumber } = orderSlice.actions;
export const { setUsers } = userSlice.actions;
