import { IChef } from "./IChef";

export interface IRestaurant {
  name: string;
  chef: IChef;
  rating: number;
  popular: boolean;
  new: boolean;
  open: boolean; // before check by openingHours
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
