import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import classNames from 'classnames';
import styles from './styles.module.css';

export const Button = ({ title, disabled, type, active, fontSize, shape, className, onClick }) => {
    const themeContext = useContext(ThemeContext);
    const isDark = themeContext.theme === 'dark';

    return (<button className={classNames(styles.root,
        styles[className],
        styles[type],
        styles['fontSize__' + fontSize],
        {
            [styles.disabled]: disabled,
            [styles.active]: active,
            [styles['shape__' + shape]]: shape,
            [styles.dark]: isDark
        },
        )} disabled={disabled} onClick={() => onClick(themeContext.theme)}>{title}</button>)
 };
