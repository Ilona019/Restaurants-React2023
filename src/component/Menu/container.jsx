import { Menu } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {
  const {data: restaurantMenu, isFetching} = useGetDishesByRestaurantIdQuery(restaurantId);
  console.log(restaurantMenu);

  return isFetching ? (
    <h3>Loading...</h3>
  ) : (
    <Menu menu={restaurantMenu} />
  );
};
