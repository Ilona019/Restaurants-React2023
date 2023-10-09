import { Tab } from "../Tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({ restaurants, activeTab, onTabSelect }) => {
  return (
    <div className={styles.root}>
      {restaurants.map(({ name, id }, index) => (
        <Tab
          key={id}
          indexTab={index}
          name={name}
          isActiveTab={index === activeTab}
          onClick={() => onTabSelect(index)} />
      ))}
    </div>
  );
};
