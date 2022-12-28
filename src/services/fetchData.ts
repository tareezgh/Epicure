import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createOrderUrl,
  createUserUrl,
  getChefsUrl,
  getDishesUrl,
  getRestaurantsUrl,
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

export const createOrder = async (dish: IDish) => {
  const args = {
    name: dish.name,
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

// Users

export const createUser = async (user: any) => {
  const args = {
    name: user.name,
  };
  try {
    await axios.post(createUserUrl, args);
    toast.success("Added successfully!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } catch {
    toast.error("Error!");
  }
};
