import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu</h2>
      {menu?.length > 0 && (
        <ul>
          {menu.map((dishId) => (
            <li className={styles.item} key={dishId}>
              <DishContainer dishId={dishId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
