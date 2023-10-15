import { useState } from "react";
import { useSelector } from "react-redux";
import { Restaurant } from "../../component/Restaurant/component";
import { Layout } from "../../component/Layout/component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import styles from "./styles.module.css";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeTab, setActiveTab] = useState(restaurantIds[0]);

  if (!restaurantIds?.length) {
    return null;
  }

  const activeRestaurantId = restaurantIds.find(
    (id) => id === activeTab
  );

  return (
    <Layout
      restaurantIds={restaurantIds}
      activeTab={activeTab}
      setActiveTab={setActiveTab}>
      <Restaurant
        className={styles.mainArea}
        restaurantId={activeRestaurantId} />
    </Layout>
  );
};
