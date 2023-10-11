import { Title } from "../Title/component";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import { AddReviwButton } from "../AddReviwButton/component";

export const Restaurant = ({ restaurant, className }) => {
  return (
    <div className={className}>
      <Title name={restaurant.name} type="secondary" />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <AddReviwButton />
    </div>
  );
};
