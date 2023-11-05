import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RestaurantContainer } from "../../component/Restaurant/container";
import { Layout } from "../../component/Layout/component";
import { selectCartDishes } from "../../redux/ui/cart/selectors";
import { CartContainer } from "../../component/Cart/container";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import styles from "./styles.module.css";

export const MainPage = () => {
  const [activeRestaurant, setActiveTab] = useState();
  const [isOpenCartPage, showCart] = useState(false);
  const dishes = useSelector(selectCartDishes);

  const { data: restaurants, isFetching } = useGetRestaurantsQuery();

  useEffect(() => {
    if (!activeRestaurant && restaurants?.length) {
      setActiveTab(restaurants[0]);
    }
  }, [restaurants]);

  return (
    <Layout
      restaurants={restaurants}
      activeRestaurant={activeRestaurant}
      setActiveTab={setActiveTab}
      showCart={showCart}
    >
      {isOpenCartPage ? (
        <CartContainer dishes={dishes} />
      ) : isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <RestaurantContainer
          className={styles.mainArea}
          restaurant={activeRestaurant} />
      )}
    </Layout>
  );
};
