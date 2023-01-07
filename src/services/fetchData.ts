import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createOrderUrl,
  getChefsUrl,
  getDishesUrl,
  getOrdersUrl,
  getRestaurantsUrl,
  getSingleRestaurantUrl,
  loginUrl,
  registerUrl,
} from "../constants";
import { IDish } from "../Interfaces/IDish";

// Restaurants Fetch Data

export const fetchAllRestaurantsData = async () => {
  try {
    const response = await axios.get(getRestaurantsUrl);
    return response.data;
  } catch {
    toast.error("Error!");
  }
};

export const fetchRestaurantData = async (restaurantName: string) => {
  const args = {
    name: restaurantName,
  };
  try {
    const response = await axios.post(getSingleRestaurantUrl, args);
    return response.data;
  } catch {
    toast.error("Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

// Dishes Fetch Data

export const fetchAllDishesData = async () => {
  try {
    const response = await axios.get(getDishesUrl);
    return response.data;
  } catch {
    toast.error("Error!");
  }
};

// Chefs Fetch Data

export const fetchAllChefsData = async () => {
  try {
    const response = await axios.get(getChefsUrl);
    return response.data;
  } catch {
    toast.error("Error!");
  }
};

// Order

export const createOrder = async (
  dish: IDish,
  selectRadioBtn: string,
  selectCheckBoxBtn: string[],
  quantity: number
) => {
  const args = {
    restaurant: dish.restaurant,
    image: dish.image,
    name: dish.name,
    price: dish.price,
    side: selectRadioBtn,
    changes: selectCheckBoxBtn,
    quantity: quantity,
  };
  try {
    await axios.post(createOrderUrl, args);
    toast.success("Added successfully!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } catch {
    toast.error("Error!");
  }
};

export const fetchAllOrdersData = async () => {
  try {
    const response = await axios.get(getOrdersUrl);
    return response.data;
  } catch {
    toast.error("Error!");
  }
};

// Users

export const registerUser = async (user: any) => {
  const args = {
    email: user.email,
    password: user.password,
  };

  const respond = await axios.post(registerUrl, args);

  if (respond.data.status === "failure") {
    toast.error(respond.data.message, {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } else {
    toast.success("Added successfully!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

export const loginUser = async (user: any) => {
  const args = {
    email: user.email,
    password: user.password,
  };
  try {
    await axios.post(loginUrl, args);
    toast.success("Logged in!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } catch {
    toast.error("Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};
