import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { selectDishesLoadingStatus } from "../../redux/entities/dish/selectors";
import { getDishesByRestaturantIdIfNotExist } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { REQUEST_STATUS } from "../../constants/statuses";

export const MenuContainer = ({ restaurantId }) => {
  const restaurantMenu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );
  const loadingStatus = useSelector(selectDishesLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaturantIdIfNotExist(restaurantId));
  }, [restaurantId]);

  return loadingStatus === REQUEST_STATUS.pending ? (
    <h3>Loading...</h3>
  ) : (
    <Menu menu={restaurantMenu} />
  );
};
