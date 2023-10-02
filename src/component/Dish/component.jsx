import { Button } from "../Button/component";
import { useState } from "react";

export const Dish = ({ dish }) => {
    const [amount, setAmount] = useState(0);
    if (!dish.name) {
        return null;
    }

    return (
        <>
            <b>{dish.name}</b>-
            <Button title="-" onClick={() => setAmount(amount - 1)} disabled={amount === 0}/>
            {amount}
            <Button title="+" onClick={() => setAmount(amount + 1)} disabled={amount === 5}/>
        </>
    );
};
