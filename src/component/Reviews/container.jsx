import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "../../hooks/use-request";
import { Reviews } from "./component";
import { getReviewsByRestaurantIdIfNotExist } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { getUsersIfNotExist } from "../../redux/entities/user/thunks/get-users";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurantReviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const reviewsLoadingStatus = useRequest(
    getReviewsByRestaurantIdIfNotExist,
    restaurantId
  );

  const usersLoadingStatus = useRequest(getUsersIfNotExist, restaurantId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantIdIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(getUsersIfNotExist());
  }, []);

  if (
    reviewsLoadingStatus === LOADING_STATUS.loading ||
    usersLoadingStatus === LOADING_STATUS.loading
  ) {
    return <h3>Loading...</h3>;
  }

  return <Reviews reviews={restaurantReviews} />;
};
