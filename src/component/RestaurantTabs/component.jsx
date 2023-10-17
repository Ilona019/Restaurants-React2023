import { RestaurantTabContainer } from "../RestaurantTab/container";
import styles from "./styles.module.css";

export const RestaurantTabs = ({
  restaurantIds,
  activeTab,
  onTabSelect,
}) => {
  return (
    <div className={styles.root}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTabContainer
          key={restaurantId}
          restaurantId={restaurantId}
          isActiveTab={restaurantId === activeTab}
          onClick={() => onTabSelect(restaurantId)} />
      ))}
    </div>
  );
};
