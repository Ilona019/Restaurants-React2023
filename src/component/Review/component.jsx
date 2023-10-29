import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  return (
    <b>
      <UserContainer userId={review.userId}/> ({review.rating}): {review.text}
    </b>
  );
};
