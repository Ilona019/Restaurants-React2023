import { useState } from "react";
import { useSelector } from "react-redux";
import { RestaurantContainer } from "../../component/Restaurant/container";
import { Layout } from "../../component/Layout/component";
import { selectFirstRestaurantId } from "../../redux/entities/restaurant/selectors";
import styles from "./styles.module.css";

export const MainPage = () => {
  const firstRestaurantId = useSelector(selectFirstRestaurantId);
  const [activeRestaurantId, setActiveTab] = useState(firstRestaurantId);

  if (!firstRestaurantId) {
    return null;
  }

  return (
    <Layout
      activeTab={activeRestaurantId}
      setActiveTab={setActiveTab}>
      <RestaurantContainer
        className={styles.mainArea}
        restaurantId={activeRestaurantId} />
    </Layout>
  );
};
