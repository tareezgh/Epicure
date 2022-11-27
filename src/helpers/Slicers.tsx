import { createSlice } from "@reduxjs/toolkit";
import { AllRestaurants, AllDishes, AllChefs } from "../services/Data";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: AllRestaurants,
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
    value: AllDishes,
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
    value: AllChefs,
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
