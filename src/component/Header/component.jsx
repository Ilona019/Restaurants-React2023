import { useContext } from "react";
import classNames from "classnames";
import { Title } from "../Title/component";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { Button } from "../Button/component";
import { ThemeContext } from "../../contexts/Theme";
import styles from "./styles.module.css";

export const Header = ({ className, restaurants, activeTab, onTabSelect }) => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <header className={classNames(styles.root, className)}>
      <Title name="Food ordering service" type="primary" />
      <Button title="Theme" type="switch" fontSize="l" onClick={changeTheme} />
      <RestaurantTabs
        restaurants={restaurants}
        activeTab={activeTab}
        onTabSelect={onTabSelect}
      />
    </header>
  );
};
