import { Tab } from "../Tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({
  restaurantIds,
  activeTab,
  onTabSelect,
}) => {
  return (
    <div className={styles.root}>
      {restaurantIds.map((restaurantId) => (
        <Tab
          key={restaurantId}
          idTab={restaurantId}
          isActiveTab={restaurantId === activeTab}
          onClick={() => onTabSelect(restaurantId)} />
      ))}
    </div>
  );
};
