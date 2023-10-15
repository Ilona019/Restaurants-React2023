import { Review } from "../Review/component";

export const Reviews = ({ reviewIds }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviewIds?.length > 0 && (
        <ul>
          {reviewIds.map((reviewId) => {
            return (
              <li key={reviewId}>
                <Review reviewId={reviewId} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
