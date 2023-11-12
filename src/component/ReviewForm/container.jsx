import { ReviewForm } from "./component";
import { useCreateReviewMutation } from "../../redux/services/api";

export const ReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <h3>Sending...</h3>;
  }

  return (
    <ReviewForm
      onSubmit={(form) => createReview({ restaurantId, newReview: form })}
    />
  );
};
