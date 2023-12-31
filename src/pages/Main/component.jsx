import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "../../hooks/use-request";
import { RestaurantContainer } from "../../component/Restaurant/container";
import { Layout } from "../../component/Layout/component";
import { getRestaurantsIfNotExist } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { selectCartDishIds } from "../../redux/ui/cart/selectors";
import styles from "./styles.module.css";
import { CartContainer } from "../../component/Cart/container";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantLoadingStatus = useRequest(getRestaurantsIfNotExist);
  const [activeRestaurantId, setActiveTab] = useState();
  const [isOpenCartPage, showCart] = useState(false);
  const dispatch = useDispatch();
  const dishIds = useSelector(selectCartDishIds);

  useEffect(() => {
    dispatch(getRestaurantsIfNotExist());
  }, []);

  useEffect(() => {
    if (!activeRestaurantId && restaurantIds?.length) {
      setActiveTab(restaurantIds[0]);
    }
  }, [restaurantIds]);

  return (
    <Layout
      activeTab={activeRestaurantId}
      setActiveTab={setActiveTab}
      showCart={showCart} >
      {isOpenCartPage ? (
        <CartContainer dishIds={dishIds} />
      ) : restaurantLoadingStatus === LOADING_STATUS.loading ? (
        <h3>Loading...</h3>
      ) : (
        <RestaurantContainer
          className={styles.mainArea}
          restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
