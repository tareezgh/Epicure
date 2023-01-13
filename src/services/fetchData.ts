import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createOrderUrl,
  getChefOfTheWeekUrl,
  getChefsUrl,
  getDishesOfRestaurantUrl,
  getDishesUrl,
  getOrdersOfUserUrl,
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
    toast.error("Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
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
    toast.error("Restaurant Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

export const fetchRestaurantDishesData = async (restaurantName: string) => {
  const args = {
    name: restaurantName,
  };
  try {
    const response = await axios.post(getDishesOfRestaurantUrl, args);
    return response.data;
  } catch {
    toast.error("fetchRestaurantDishesData Error!", {
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
    toast.error("Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

// Chefs Fetch Data

export const fetchAllChefsData = async () => {
  try {
    const response = await axios.get(getChefsUrl);
    return response.data;
  } catch {
    toast.error("All Chefs Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

export const getChefOfTheWeekData = async () => {
  try {
    const response = await axios.get(getChefOfTheWeekUrl);
    return response.data;
  } catch {
    toast.error("Chef of the week doesn't exist", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

// Order

export const createOrder = async (
  dish: IDish,
  selectRadioBtn: string,
  selectCheckBoxBtn: string[],
  quantity: number,
  currentUser: string
) => {
  const args = {
    restaurant: dish.restaurant,
    userName: currentUser,
    image: dish.image,
    name: dish.name,
    price: dish.price,
    side: selectRadioBtn,
    changes: selectCheckBoxBtn,
    quantity: quantity,
  };
  try {
    const response = await axios.post(createOrderUrl, args);
    toast.success("Added successfully!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
    return response.data;
  } catch {
    toast.error("Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

export const fetchAllOrdersData = async () => {
  try {
    const response = await axios.get(getOrdersUrl);
    return response.data;
  } catch {
    toast.error("Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

export const fetchOrdersDataForUser = async (email: string) => {
  const args = {
    name: email,
  };
  try {
    const response = await axios.post(getOrdersOfUserUrl, args);
    return response.data;
  } catch {
    toast.error("fetchOrdersDataForUser Error!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

// Users

export const registerUser = async (user: any) => {
  const args = {
    email: user.email,
    password: user.password,
  };

  const response = await axios.post(registerUrl, args);

  if (response.data.status === "failure") {
    toast.error(response.data.message, {
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

  const response = await axios.post(loginUrl, args);

  if (response.data.status === "failure") {
    toast.error(response.data.message, {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } else {
    toast.success("Logged in!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
    return args;
  }
};
