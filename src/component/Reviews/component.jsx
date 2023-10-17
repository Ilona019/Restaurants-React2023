import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviewIds }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviewIds?.length > 0 && (
        <ul>
          {reviewIds.map((reviewId) => {
            return (
              <li key={reviewId}>
                <ReviewContainer reviewId={reviewId} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
