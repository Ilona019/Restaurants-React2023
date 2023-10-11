import { useTheme } from "../../contexts/Theme";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({
  title,
  type,
  active = false,
  fontSize = "s",
  shape,
  disabled,
  className,
  onClick,
}) => {
  const {theme} = useTheme();

  return (
    <button
      className={classNames(
        styles.root,
        styles[className],
        styles[type],
        styles["fontSize__" + fontSize],
        styles[theme],
        {
          [styles.disabled]: disabled,
          [styles.active]: active,
          [styles["shape__" + shape]]: shape
        }
      )}
      disabled={disabled}
      onClick={() => onClick(theme)}>
      {title}
    </button>
  );
};
