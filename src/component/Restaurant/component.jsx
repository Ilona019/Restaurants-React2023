import { useSelector } from "react-redux";
import { Title } from "../Title/component";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import { AddReviewButton } from "../AddReviewButton/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <div className={className}>
      <Title name={restaurant.name} type="secondary" />
      <Menu menu={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
      <AddReviewButton />
    </div>
  );
};
