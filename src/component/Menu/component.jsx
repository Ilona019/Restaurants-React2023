import { Dish } from "../Dish/component";
import styles from "./styles.module.css";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu</h2>
      {menu?.length > 0 && (
        <ul>
          {menu.map((dish) => (
            <li className={styles.item} key={dish.id}>
              <Dish dish={dish} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
