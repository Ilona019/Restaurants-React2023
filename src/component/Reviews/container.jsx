import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { useEffect } from "react";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { selectReviewsLoadingStatus } from "../../redux/entities/review/selectors";
import { getReviewsByRestaturantIdIfNotExist } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { getUsersIfNotExist } from "../../redux/entities/user/thunks/get-users";
import { selectUsersLoadingStatus } from "../../redux/entities/user/selectors";
import { REQUEST_STATUS } from "../../constants/statuses";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurantReviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaturantIdIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(getUsersIfNotExist())
  }, []);

  const reviewsLoadingStatus = useSelector(selectReviewsLoadingStatus);
  const usersLoadingStatus = useSelector(selectUsersLoadingStatus);

  if (
    reviewsLoadingStatus === REQUEST_STATUS.pending ||
    usersLoadingStatus === REQUEST_STATUS.pending
  ) {
    return <h3>Loading...</h3>;
  }

  return <Reviews reviews={restaurantReviews} />;
};
