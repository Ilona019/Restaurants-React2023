import { useSelector } from "react-redux";
import { Cart } from "./component";
import { selectCartDishIds } from "../../redux/ui/cart/selectors";

export const CartContainer = () => {
  const dishIds = useSelector(selectCartDishIds);

  return <Cart dishIds={dishIds} />;
};
