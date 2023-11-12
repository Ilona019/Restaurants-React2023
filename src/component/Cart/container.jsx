import { useSelector } from "react-redux";
import { Cart } from "./component";
import { selectCartDishes } from "../../redux/ui/cart/selectors";

export const CartContainer = () => {
  const dishes = useSelector(selectCartDishes);

  return <Cart dishes={dishes} />;
};
