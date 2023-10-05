import classNames from 'classnames';
import styles from './styles.module.css';

export const Button = ({ title, disabled, type, active, fontSize, shape, className, onClick }) => {
    return (<button className={classNames(styles.root,
        styles[className],
        styles[type],
        styles['fontSize__' + fontSize],
        {
            [styles.disabled]: disabled,
            [styles.active]: active,
            [styles['shape__' + shape]]: shape
        },
        )} disabled={disabled} onClick={() => onClick()}>{title}</button>)
 };
