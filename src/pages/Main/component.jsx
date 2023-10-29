import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantContainer } from "../../component/Restaurant/container";
import { Layout } from "../../component/Layout/component";
import { selectRestaurantIds, selectRestaurantLoadingStatus } from "../../redux/entities/restaurant/selectors";
import { getRestaurantsIfNotExist } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constants/statuses";
import styles from "./styles.module.css";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const [activeRestaurantId, setActiveTab] = useState();
  if (!activeRestaurantId && restaurantIds?.length) {
    setActiveTab(restaurantIds[0]);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsIfNotExist());
  }, []);

  return (
    <Layout activeTab={activeRestaurantId} setActiveTab={setActiveTab}>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <h3>Loading...</h3>
      ) : (
        <RestaurantContainer
          className={styles.mainArea}
          restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
