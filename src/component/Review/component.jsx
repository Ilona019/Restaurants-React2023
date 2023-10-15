import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  if (!review) {
    return null;
  }

  return (
    <b>
      {user.name} ({review.rating}): {review.text}
    </b>
  );
};
