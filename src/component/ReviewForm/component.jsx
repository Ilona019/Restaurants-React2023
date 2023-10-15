import { useReducer } from "react";
import { Button } from "../Button/component";
import styles from "./styles.module.css";
import { RatingInput } from "../RatingInput/component";

const DEFAULT_VALUE = {
  name: "",
  review: "",
  rating: 1,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...DEFAULT_VALUE, name: action.payload };
    case "setReview":
      return { ...state, review: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const ReviwForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <span>Name: </span>
        <input
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          } />
      </div>
      <div className={styles.item}>
        <span>Review: </span>
        <textarea
          autoComplete="off"
          cols="25"
          rows="5"
          value={formValue.review}
          onChange={(event) => {
            dispatch({ type: "setReview", payload: event.target.value });
          }}></textarea>
      </div>
      <div className={styles.item}>
        <span>Rating: </span>
        <RatingInput
          value={formValue.rating}
          onChange={(value) => {
            dispatch({ type: "setRating", payload: value });
          }} />
      </div>
      <div className={styles.buttonSubmit}>
        <Button
          title="Save"
          type="primary"
          shape="circle"
          onClick={() => dispatch({ type: "reset" })} />
      </div>
    </div>
  );
};
