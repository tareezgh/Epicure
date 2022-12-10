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

import Claro_Img from "../assets/restaurants/Claro.png";
import KabKem_Img from "../assets/restaurants/KabKem.png";
import Messa_Img from "../assets/restaurants/Messa.png";
import NitanThai_Img from "../assets/restaurants/NitanThai.png";
import TigerLilly_Img from "../assets/restaurants/TigerLilly.png";
import YaPan_Img from "../assets/restaurants/YaPan.png";

export const AllChefs: Array<IChef> = [
  {
    name: "Asaf Granit",
    description: "",
    image: AsafGranit_Img,
    new: false,
    viewed: true,
    chefOfTheWeek: false,
  },
  {
    name: "Aviv Moshe",
    description: "",
    image: AvivMoshe_Img,
    new: false,
    viewed: false,
    chefOfTheWeek: false,
  },
  {
    name: "Eyal Shani",
    description: "",
    image: EyalShani_Img,
    new: false,
    viewed: true,
    chefOfTheWeek: false,
  },
  {
    name: "Meir Adoni",
    description: "",
    image: MeirAdoni_Img,
    new: true,
    viewed: false,
    chefOfTheWeek: false,
  },
  {
    name: "Nitzan Raz",
    description: "",
    image: NitzanRaz_Img,
    new: false,
    viewed: false,
    chefOfTheWeek: false,
  },
  {
    name: "Omer Mille",
    description: "",
    image: OmerMille_Img,
    new: false,
    viewed: false,
    chefOfTheWeek: false,
  },
  {
    name: "Yossi Shitrit",
    description:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    image: YossiShitrit_Img,
    new: false,
    viewed: true,
    chefOfTheWeek: true,
  },
  {
    name: "Yuval Ben Neriah",
    description: "",
    image: YuvalBenNeriah_Img,
    new: true,
    viewed: false,
    chefOfTheWeek: false,
  },
  {
    name: "Ran Shmueli",
    description: "",
    image: "",
    new: true,
    viewed: false,
    chefOfTheWeek: false,
  },
  {
    name: "Shahaf Shabtay",
    description: "",
    image: ShahafShabtay_Img,
    new: true,
    viewed: false,
    chefOfTheWeek: false,
  },
];

export const AllRestaurants: Array<IRestaurant> = [
  {
    name: "Claro",
    chef: AllChefs[8],
    rating: 10,
    popular: true,
    new: true,
    open: true,
    address: "",
    image: Claro_Img,
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
  },

  {
    name: "Kab Kem",
    chef: AllChefs[7],
    rating: 10,
    popular: true,
    new: true,
    open: false,
    address: "",
    image: KabKem_Img,
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
  },

  {
    name: "Messa",
    chef: AllChefs[1],
    rating: 10,
    popular: true,
    new: false,
    open: false,
    address: "",
    image: Messa_Img,
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
  },

  {
    name: "Nitan Thai",
    chef: AllChefs[6],
    rating: 10,
    popular: true,
    new: false,
    open: false,
    address: "",
    image: NitanThai_Img,
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
  },

  {
    name: "Tiger Lilly",
    chef: AllChefs[8],
    rating: 10,
    popular: true,
    new: false,
    open: false,
    address: "",
    image: TigerLilly_Img,
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
  },

  {
    name: "YaPan",
    chef: AllChefs[7],
    rating: 10,
    popular: true,
    new: false,
    open: false,
    address: "",
    image: YaPan_Img,
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
  },
];

export const AllDishes: Array<IDish> = [
  {
    name: "Pad Ki Mao",
    description:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    image: Claro_Img,
    price: 88,
    signature: "spicy",
  },
  {
    name: "Ta Ma La Ko",
    description:
      "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    image: Claro_Img,
    price: 65,
    signature: "",
  },
];
