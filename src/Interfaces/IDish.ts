import { IRestaurant } from "./IRestaurant";

export interface IDish {
  name: string;
  description: string;
  restaurant?: IRestaurant;
  image: string;
  price: number;
  signature: string;

}
