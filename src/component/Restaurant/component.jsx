import { Title } from "../Title/component";
import { AddReviewButton } from "../AddReviewButton/component";
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";

export const Restaurant = ({ restaurant, className }) => {
  return (
    <div className={className}>
      <Title name={restaurant.name} type="secondary" />
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />
      <AddReviewButton  restaurantId={restaurant.id} />
    </div>
  );
};
