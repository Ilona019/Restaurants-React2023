import { NavLink } from "react-router-dom";
import { Title } from "../Title/component";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Header = ({ className }) => {
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
      <NavLink
        to="/"
        replace
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.activeTab]: isActive })
        }>
        <Button title="Home" fontSize="l" className="fullSize" />
      </NavLink>
      <NavLink
        to="/restaurants"
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.activeTab]: isActive })
        }>
        <Button
          title="List of restaurants"
          fontSize="l"
          className="fullSize" />
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.activeTab]: isActive })
        }>
        <Button title="Cart" fontSize="l" className="fullSize" />
      </NavLink>
    </header>
  );
};
