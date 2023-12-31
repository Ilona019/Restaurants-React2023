import { createPortal } from "react-dom";
import { Button } from "../Button/component";
import styles from "./styles.module.css";

export const Modal = ({ title, withOverlay = true, children, onClose }) => {
  return createPortal(
    <>
      {withOverlay && <div className={styles.overlay}></div>}
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}> {title} </h3>
          <Button type="close" onClick={onClose} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>,
    document.getElementById("modal-container")
  );
};
