import { Outlet, NavLink } from "react-router-dom";
import { RestaurantTabContainer } from "../RestaurantTab/container";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import styles from "./styles.module.css";
import classNames from "classnames";

export const RestaurantTabs = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery(undefined);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className={styles.root}>
      {(restaurants || []).map((restaurant) => (
        <NavLink key={restaurant.id} to={restaurant.id} className={({isActive}) => classNames(styles.tab, {[styles.activeTab]: isActive})}>
        <RestaurantTabContainer
          key={restaurant.id}
          restaurant={restaurant} />
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};
