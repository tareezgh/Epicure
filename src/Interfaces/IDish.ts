import { IRestaurant } from "./IRestaurant";

export interface IDish {
  name: string;
  description: string;
  restaurant?: IRestaurant;
  img: string;
  price: number;
  properties: string;
  signature: boolean;
}
