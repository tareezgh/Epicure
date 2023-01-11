import { IChef } from "./IChef";

export interface IRestaurant {
  name: string;
  chefName: string;
  restaurantRating: number;
  isPopular: boolean;
  isNewRestaurant: boolean;
  isOpen: boolean; // before check by openingHours, need to FIX 
  address: string;
  image: string;
  openingHours: {
    sunday: {
      open: string;
      close: string;
    };
    monday: {
      open: string;
      close: string;
    };
    tuesday: {
      open: string;
      close: string;
    };
    wednesday: {
      open: string;
      close: string;
    };
    thursday: {
      open: string;
      close: string;
    };
    friday: {
      open: string;
      close: string;
    };
    saturday: {
      open: string;
      close: string;
    };
  };
}
