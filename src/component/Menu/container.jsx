import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRequest } from "../../hooks/use-request";
import { Menu } from "./component";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { getDishesByRestaurantIdIfNotExist } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const MenuContainer = ({ restaurantId }) => {
  const restaurantMenu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dishesLoadingStatus = useRequest(getDishesByRestaurantIdIfNotExist, restaurantId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantIdIfNotExist(restaurantId));
  }, [restaurantId]);

  return dishesLoadingStatus === LOADING_STATUS.loading ? (
    <h3>Loading...</h3>
  ) : (
    <Menu menu={restaurantMenu} />
  );
};
