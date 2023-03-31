import { configureStore } from "@reduxjs/toolkit";

import {
  restaurantSlice,
  dishSlice,
  chefSlice,
  orderSlice,
  userSlice,
  checkoutSlice,
} from "./Slicers";

export default configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer,
    dishes: dishSlice.reducer,
    chefs: chefSlice.reducer,
    orders: orderSlice.reducer,
    checkout: checkoutSlice.reducer,
    currentUser: userSlice.reducer,
  },
});
