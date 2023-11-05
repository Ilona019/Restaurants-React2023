import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/component";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";

export const Dish = ({ dish }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dish.id));
  const dispatchAmount = useDispatch();

  const dash = String.fromCharCode(8212);
  const space = String.fromCharCode(160);
  return (
    <>
      <b>{dish.name}</b> {dash} {space}
      <Button
        title="-"
        type="secondary"
        fontSize="s"
        shape="circle"
        disabled={amount === 0}
        onClick={() => dispatchAmount(cartActions.decrement(dish))} />
      {space}
      {amount}
      {space}
      <Button
        title="+"
        type="secondary"
        fontSize="s"
        shape="circle"
        disabled={amount === 5}
        onClick={() => dispatchAmount(cartActions.increment(dish))} />
    </>
  );
};
