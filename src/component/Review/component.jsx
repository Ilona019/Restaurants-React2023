import { UserContainer } from "../User/selector";

export const Review = ({ review }) => {
  return (
    <b>
      <UserContainer userId={review.userId}/> ({review.rating}): {review.text}
    </b>
  );
};
