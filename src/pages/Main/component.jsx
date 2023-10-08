import {React, useState} from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../../component/Restaurant/component';
import { Layout } from '../../component/Layout/component';
import styles from './styles.module.css';

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <Layout restaurants={restaurants} activeTab={activeTab} setActiveTab={setActiveTab}>
        <Restaurant className={styles.mainArea} restaurant={restaurants[activeTab]} />
    </Layout>
  );
};