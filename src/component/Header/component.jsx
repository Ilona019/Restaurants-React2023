import { Title } from '../Title/component';
import { RestaurantTabs } from '../RestaurantTabs/component';
import styles from './styles.module.css';

export const Header = ({restaurants, activeTab, onTabSelect}) => {
  return (
  <header className={styles.root}>
    <Title name={'Food ordering service'} type='primary'/>
    <RestaurantTabs restaurants={restaurants} activeTab={activeTab} onTabSelect={onTabSelect} />
  </header>);
};
