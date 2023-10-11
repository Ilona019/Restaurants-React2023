export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews?.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <b>
                {review.user}: {review.text}
              </b>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
