import { Button } from "../Button/component";
import { useState } from "react";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);
  if (!dish.name) {
    return null;
  }

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
        onClick={() => setAmount(amount - 1)} />
      {space}
      {amount}
      {space}
      <Button
        title="+"
        type="secondary"
        fontSize="s"
        shape="circle"
        disabled={amount === 5}
        onClick={() => setAmount(amount + 1)} />
    </>
  );
};
