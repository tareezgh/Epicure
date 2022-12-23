import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: [],
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.value = action.payload;
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

// Action creators are generated for each case reducer function
export const { setRestaurants } = restaurantSlice.actions;
export const { setDishes } = dishSlice.actions;
export const { setChefs } = chefSlice.actions;
