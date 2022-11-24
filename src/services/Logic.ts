export interface IRestaurant {
  name: string;
  manager: string;
  
  hours: string;
  image: string;
}

export interface IDish {
  restaurant: string;
  dishName: string;
  price: number;
  ingredients: string;
  dishType: string;
  image: string;
}

export interface IChef {
  name: string;
  description: string;
  restaurants: number[];
  image: string;
}
