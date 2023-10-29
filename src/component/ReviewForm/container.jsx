import { ReviewForm } from "./component";
import { useMakeRequest } from "../../hooks/use-make-request";
import { createReview } from "../../redux/entities/review/thunks/create-review";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const ReviewFormContainer = ({ restaurantId }) => {
  const [saveReviewStatus, saveReview] = useMakeRequest(createReview);

  if (saveReviewStatus === LOADING_STATUS.loading) {
    return <h3>Sending</h3>;
  }

  return (
    <ReviewForm
      onSubmit={(form) =>
        saveReview({ restaurantId, newReview: form })
      }/>
  );
};
