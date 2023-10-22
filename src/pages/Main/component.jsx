import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "../../hooks/use-request";
import { RestaurantContainer } from "../../component/Restaurant/container";
import { Layout } from "../../component/Layout/component";
import { getRestaurantsIfNotExist } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import styles from "./styles.module.css";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantLoadingStatus = useRequest(getRestaurantsIfNotExist);
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
      {restaurantLoadingStatus === LOADING_STATUS.loading ? (
        <h3>Loading...</h3>
      ) : (
        <RestaurantContainer
          className={styles.mainArea}
          restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
