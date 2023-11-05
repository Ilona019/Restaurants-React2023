import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";

export const Cart = ({ dishes }) => {
  return (
    <div className={styles.root}>
      <h2>Cart</h2>
      {!dishes?.length ? (
        <h3>The cart is empty. Choose dishes</h3>
      ) : (
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} className={styles.item}>
              <DishContainer dish={dish} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
