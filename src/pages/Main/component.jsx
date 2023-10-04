import {React, useState} from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../../component/Restaurant/component';
import { Header } from '../../component/Header/component';
import { Footer } from '../../component/Footer/component';
import { ThemeContext } from '../../contexts/Theme';
import styles from './styles.module.css';

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!restaurants?.length) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={styles.root}>
        <Header className={styles.header} restaurants={restaurants} activeTab={activeTab} onTabSelect={setActiveTab} onChangeTheme={changeTheme} />
        <Restaurant className={styles.mainArea} restaurant={restaurants[activeTab]} />
        <Footer className={styles.footer}/>
      </div>
    </ThemeContext.Provider>
  );
};