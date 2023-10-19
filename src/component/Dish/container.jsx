import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDishById, selectDishLoadingStatus } from "../../redux/entities/dish/selectors";
import { getDish } from "../../redux/entities/dish/thunks/get-dish";
import { Dish } from "./component";
import { REQUEST_STATUS } from "../../constants/statuses";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const loadingStatus = useSelector(selectDishLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDish(dishId));
  }, []);

  if (!dish) {
    return null;
  }

  return loadingStatus === REQUEST_STATUS.pending ? <Dish dish={dish}/> : <h3>Loading...</h3>;
};
