import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";

export const Cart = ({ dishIds }) => {
  return (
    <div className={styles.root}>
      <h2>Cart</h2>
      {!dishIds?.length ? (
        <h3>The cart is empty. Choose dishes</h3>
      ) : (
        <ul>
          {dishIds.map((dishId) => (
            <li key={dishId} className={styles.item}>
              <DishContainer key={dishId} dishId={dishId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
