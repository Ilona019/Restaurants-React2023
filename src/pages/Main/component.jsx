import {React, useState} from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../../component/Restaurant/component';
import { Header } from '../../component/Header/component';
import { Footer } from '../../component/Footer/component';
import styles from './styles.module.css';

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
      <div className={styles.root}>
        <Header className={styles.header} restaurants={restaurants} activeTab={activeTab} onTabSelect={setActiveTab} />
        <Restaurant className={styles.mainArea} restaurant={restaurants[activeTab]} />
        <Footer className={styles.footer}/>
      </div>
  );
};