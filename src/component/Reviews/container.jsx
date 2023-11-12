import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";

export const ReviewsContainer = ({ restaurantId }) => {
  const {data: restaurantReviews, isFetching } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <h3>Loading...</h3>;
  }

  return <Reviews reviews={restaurantReviews} />;
};
