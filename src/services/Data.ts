import { IRestaurant } from "../Interfaces/IRestaurant";
import { IDish } from "../Interfaces/IDish";
import { IChef } from "../Interfaces/IChef";



export const AllChefs: Array<IChef> = [
  {
    name: "Ran Shmueli",
    description: "",
    img: "../../../assets/chefs/Yossi_Shitrit.png",
    chefOfTheWeek: false,
  },
  {
    name: "Yossi Shitrit",
    description: "",
    img: "../../../assets/chefs/Yossi_Shitrit.png",
    chefOfTheWeek: true,
  },
];

export const AllRestaurants: Array<IRestaurant> = [
  {
    name: "Claro",
    chef: AllChefs[0],
    rating: 10,
    popular: true,
    openingHours: {
      sunday: {
        open: "",
        close: "",
      },
      monday: {
        open: "",
        close: "",
      },
      tuesday: {
        open: "",
        close: "",
      },
      wednesday: {
        open: "",
        close: "",
      },
      thursday: {
        open: "",
        close: "",
      },
      friday: {
        open: "",
        close: "",
      },
      saturday: {
        open: "",
        close: "",
      },
    },
    address: "",
    image: "",
  },

  {
    name: "Kab Kem",
    chef: AllChefs[0],
    rating: 10,
    popular: true,
    openingHours: {
      sunday: {
        open: "",
        close: "",
      },
      monday: {
        open: "",
        close: "",
      },
      tuesday: {
        open: "",
        close: "",
      },
      wednesday: {
        open: "",
        close: "",
      },
      thursday: {
        open: "",
        close: "",
      },
      friday: {
        open: "",
        close: "",
      },
      saturday: {
        open: "",
        close: "",
      },
    },
    address: "",
    image: "",
  },
];

export const AllDishes: Array<IDish> = [
  {
    name: "Pad Ki Mao",
    description:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    img: "",
    price: 88,
    properties: "spicy",
    signature: true,
  },
  {
    name: "Ta Ma La Ko",
    description:
      "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    img: "",
    price: 65,
    properties: "",
    signature: true,
  },
];
