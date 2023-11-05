import { Restaurant } from "./component";

export const RestaurantContainer = ({ restaurant, className }) => {

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} className={className} />;
};
