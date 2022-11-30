import { IRestaurant } from "../Interfaces/IRestaurant";
import { IDish } from "../Interfaces/IDish";
import { IChef } from "../Interfaces/IChef";

import AsafGranit_Img from "../assets/chefs/Asaf_Granit.png";
import AvivMoshe_Img from "../assets/chefs/Aviv_Moshe.png";
import EyalShani_Img from "../assets/chefs/Eyal_Shani.png";
import MeirAdoni_Img from "../assets/chefs/Meir_Adoni.png";
import NitzanRaz_Img from "../assets/chefs/Nitzan_Raz.png";
import OmerMille_Img from "../assets/chefs/Omer_Miller.png";
import ShahafShabtay_Img from "../assets/chefs/Shahaf_Shabtay.png";
import YossiShitrit_Img from "../assets/chefs/Yossi_Shitrit.png";
import YuvalBenNeriah_Img from "../assets/chefs/Yuval_Ben_Neriah.png";

export const AllChefs: Array<IChef> = [
  {
    name: "Asaf Granit",
    description: "",
    img: AsafGranit_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Aviv Moshe",
    description: "",
    img: AvivMoshe_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Eyal Shani",
    description: "",
    img: EyalShani_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Meir Adoni",
    description: "",
    img: MeirAdoni_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Nitzan Raz",
    description: "",
    img: NitzanRaz_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Omer Mille",
    description: "",
    img: OmerMille_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Asaf Granit",
    description: "",
    img: AsafGranit_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Yossi Shitrit",
    description:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    img: YossiShitrit_Img,
    chefOfTheWeek: true,
  },
  {
    name: "Yuval Ben Neriah",
    description: "",
    img: YuvalBenNeriah_Img,
    chefOfTheWeek: false,
  },
  {
    name: "Ran Shmueli",
    description: "",
    img: "",
    chefOfTheWeek: false,
  },
];

export const AllRestaurants: Array<IRestaurant> = [
  {
    name: "Claro",
    chef: AllChefs[9],
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
    chef: AllChefs[9],
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
