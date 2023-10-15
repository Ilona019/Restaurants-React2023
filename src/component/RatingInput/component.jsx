import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export const RatingInput = ({ className, value, maxRating = 5, onChange }) => {
    const [hoveredElementIndex, setHoveredElementIndex] = useState();
  return (
    <div className={classNames(styles.root, className)}>
      {new Array(maxRating).fill(null).map((_, index) => (
        <div
          className={classNames(styles.star, {
            [styles.active]: index + 1 <= value,
            [styles.hovered]: index < hoveredElementIndex
          })}
          key={index}
          onClick={() => onChange(index + 1)} 
          onMouseEnter={() => setHoveredElementIndex(index + 1)}
          onMouseLeave={() => setHoveredElementIndex(null)}>
        </div>
      ))}
    </div>
  );
};
