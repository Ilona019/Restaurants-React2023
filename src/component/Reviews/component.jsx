import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewContainer review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
