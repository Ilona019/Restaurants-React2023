import { Dish } from "./component";

export const DishContainer = ({ dish }) => {
  if (!dish) {
    return null;
  }

  return <Dish dish={dish}/>
};
