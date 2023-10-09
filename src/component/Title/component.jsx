import styles from "./styles.module.css";

export const Title = ({ name, type }) => {
    return (
        <h1 className={styles[type]}>{name}</h1>
    );
};
