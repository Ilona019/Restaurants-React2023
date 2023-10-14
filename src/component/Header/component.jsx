import { useContext } from "react";
import classNames from "classnames";
import { Title } from "../Title/component";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";
import styles from "./styles.module.css";

export const Header = ({ className, restaurants, activeTab, onTabSelect }) => {
  const { theme, changeTheme } = useTheme();
  return (
    <header className={classNames(styles.root, className)}>
      <Title name="Food ordering service" type="primary" />
      <div className={styles.toggleButton}>
        <Button
          title={theme + " theme"}
          type="primary"
          fontSize="l"
          shape="superellipse"
          onClick={changeTheme} />
      </div>
      <RestaurantTabs
        restaurants={restaurants}
        activeTab={activeTab}
        onTabSelect={onTabSelect} />
    </header>
  );
};
