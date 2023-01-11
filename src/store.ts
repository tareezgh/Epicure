import { configureStore } from "@reduxjs/toolkit";

import {
  restaurantSlice,
  dishSlice,
  chefSlice,
  orderSlice,
  userSlice,
} from "./helpers/Slicers";

export default configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer,
    dishes: dishSlice.reducer,
    chefs: chefSlice.reducer,
    orders: orderSlice.reducer,
    currentUser: userSlice.reducer,
  },
});
