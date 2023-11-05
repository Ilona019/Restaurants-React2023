import { RestaurantTabContainer } from "../RestaurantTab/container";
import styles from "./styles.module.css";

export const RestaurantTabs = ({
  restaurants,
  activeRestaurant,
  onTabSelect,
  onShowCart
}) => {
  return (
    <div className={styles.root}>
      {(restaurants || []).map((restaurant) => (
        <RestaurantTabContainer
          key={restaurant.id}
          restaurant={restaurant}
          isActiveTab={restaurant?.id === activeRestaurant?.id}
          onClick={() => {onTabSelect(restaurant);
             onShowCart(false)}} />
          ))}
    </div>
  );
};
